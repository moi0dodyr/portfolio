// ─── Language switching ──────────────────────────────────────────────
// How it works:
//   • The English text lives directly in the HTML — it is the source of truth.
//   • Ukrainian translations live in src/locales/ua.json.
//   • Every translatable element has a data-i18n="some_key" attribute,
//     and ua.json maps that key to the Ukrainian text.
//   • If a key is missing from ua.json, the element simply stays in English.

import uaDict from './locales/ua.json';

// Original English text, captured from the HTML on first run
const englishOriginals = new Map();

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

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'uk' && uaDict[key] !== undefined) {
      el.innerHTML = uaDict[key];
    } else {
      el.innerHTML = englishOriginals.get(key) ?? el.innerHTML;
    }
  });

  // Update active state on the flag links in the navbar
  document.querySelectorAll('.lang-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-lang') === lang);
  });
}

export function initI18n() {
  // Remember the English text as written in the HTML
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    englishOriginals.set(el.getAttribute('data-i18n'), el.innerHTML);
  });

  // Recover saved language or detect browser preference
  let savedLang = localStorage.getItem('pref-lang');
  if (!savedLang) {
    const browserLang = navigator.language || '';
    savedLang = browserLang.startsWith('uk') ? 'uk' : 'en';
  }

  // Bind language click handlers
  document.querySelectorAll('.lang-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(link.getAttribute('data-lang'));
    });
  });

  setLang(savedLang);
}
