import enDict from './locales/en.json';
import uaDict from './locales/ua.json';

const dictionaries = {
  en: enDict,
  uk: uaDict
};

let currentLang = 'en';

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (lang !== 'en' && lang !== 'uk') {
    lang = 'en';
  }
  
  currentLang = lang;
  localStorage.setItem('pref-lang', lang);
  document.documentElement.lang = lang;
  
  const dict = dictionaries[lang];
  
  // Find all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update active state on flags selector links
  document.querySelectorAll('.lang-link').forEach((link) => {
    if (link.getAttribute('data-lang') === lang) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export function initI18n() {
  // Recover saved language or detect browser preference
  let savedLang = localStorage.getItem('pref-lang');
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage || '';
    savedLang = browserLang.startsWith('uk') ? 'uk' : 'en';
  }
  
  // Bind language click handlers
  document.querySelectorAll('.lang-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(this.getAttribute('data-lang'));
    });
  });
  
  setLang(savedLang);
}
