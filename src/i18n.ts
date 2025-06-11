import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
const basename = import.meta.env.BASE_URL;


i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
   .use(Backend)
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      // **AQUÍ ESTÁ LA CLAVE:** Construye la ruta de carga con el basename
      loadPath: `${basename}locales/{{lng}}/{{ns}}.json`, // Ejemplo: /personal-portfolio-space/locales/es/translation.json
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;