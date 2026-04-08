import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

function getInitialLanguage() {
  const saved = localStorage.getItem('pycon-lang');
  if (saved === 'en' || saved === 'fr') return saved;

  // Detect browser language
  const browserLang = navigator.language || navigator.userLanguage || '';
  if (browserLang.startsWith('fr')) return 'fr';
  return 'en';
}

const initialLang = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  initImmediate: false,
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('pycon-lang', lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = initialLang;

export default i18n;
