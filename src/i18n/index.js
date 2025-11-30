import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import hi from './languages/hi.json';
import ta from './languages/ta.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ta: { translation: ta }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
