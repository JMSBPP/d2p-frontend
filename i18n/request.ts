import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

const SUPPORTED_LOCALES = ['es-CO', 'en'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

function isSupportedLocale(value: string | undefined): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale)
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const cookieValue = cookieStore.get('NEXT_LOCALE')?.value
  const locale: SupportedLocale = isSupportedLocale(cookieValue) ? cookieValue : 'es-CO'

  const commonMessages = (await import(`../messages/${locale}/common.json`)).default as Record<
    string,
    unknown
  >
  const labMessages = (await import(`../messages/${locale}/lab.json`)).default as Record<
    string,
    unknown
  >
  const navMessages = (await import(`../messages/${locale}/nav.json`)).default as Record<
    string,
    unknown
  >

  const messages = {
    ...commonMessages,
    ...labMessages,
    ...navMessages,
  }

  return { locale, messages }
})
