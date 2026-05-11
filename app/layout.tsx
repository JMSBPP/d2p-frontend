import { StructuredData } from '@/components/StructuredData'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import './globals.css'

// Root layout — no wallet imports (FOUND-11, Pitfall 3).
// Provides: i18n context, theme context, JSON-LD structured data.
// TopNav is added in Task 4 (Plan 01-04) above {children}.

export const metadata: Metadata = {
  title: 'WVS Finance',
  description: 'Verified convex hedges for wage-earner macro risk in frontier markets',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-bg-canvas text-text-primary antialiased">
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
