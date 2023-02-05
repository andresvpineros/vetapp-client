import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import langEs from '../translations/es/lang.json'

const detectionOptions = {
  order: ['navigator'],
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    detection: detectionOptions,
    react: {
      useSuspense: false,
    },
    resources: {
      es: {
        lang: langEs,
      },
    },
  })

export default i18n
