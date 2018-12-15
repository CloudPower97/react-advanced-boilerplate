import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend' // primary use cache
import XHR from 'i18next-xhr-backend' // fallback xhr load
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    backend: {
      backends: [LocalStorageBackend, XHR],
      backendOptions: [
        {
          prefix: 'i18next_res_',
          versions: {
            en: 'v1.0',
          },
        },
        {
          loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    whitelist: ['en'],
    ns: ['common'],
    defaultNS: 'common',
    react: {
      wait: true,
    },
  })

export default i18n
