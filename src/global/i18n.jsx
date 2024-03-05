import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json'; // Import your translation files
import ruTranslation from './locales/ru.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lang:'en',
    fallbackLng: 'en', // The default fallback language
    interpolation: {
      escapeValue: false
    }
  });
export default i18n