// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { ensurePrefix } from '@/utils/string'

// Check if the url is missing the locale
export const isUrlMissingLocale = url => {
  return i18n.locales.every(locale => !(url.startsWith(`/${locale}/`) || url === `/${locale}`))
}

// Get the localized url
export const getLocalizedUrl = (url, languageCode) => {
  if (!url) throw new Error("URL can't be empty")

  // Langsung return url tanpa prefix locale
  return ensurePrefix(url, '/')
}
