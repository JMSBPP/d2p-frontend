import './lib/env'
import createNextIntlPlugin from 'next-intl/plugin'
import { build } from 'velite'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler: import('webpack').Compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  webpack: (config: { plugins: unknown[] }) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}

export default withNextIntl(nextConfig)
