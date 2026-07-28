// ─── Language switching ──────────────────────────────────────────────
// How it works:
//   • The English text lives directly in the HTML — it is the source of truth.
//   • Ukrainian translations live in src/locales/ua.json.
//   • Every translatable element has a data-i18n="some_key" attribute,
//     and ua.json maps that key to the Ukrainian text.
//   • If a key is missing from ua.json, the element simply stays in English.
//   • By default the key swaps the element's innerHTML. To translate an
//     attribute instead (alt, content, or the <title> text), add
//     data-i18n-attr="alt" / "content" / "text" alongside data-i18n.

import uaDict from './locales/ua.json';

// Original English text, captured from the HTML on first run
const englishOriginals = new Map();

let currentLang = 'en';

function readValue(el, attr) {
  if (!attr) return el.innerHTML;
  if (attr === 'text') return el.textContent;
  return el.getAttribute(attr);
}

function writeValue(el, attr, value) {
  if (!attr) {
    el.innerHTML = value;
  } else if (attr === 'text') {
    el.textContent = value;
  } else {
    el.setAttribute(attr, value);
  }
}

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
    const attr = el.getAttribute('data-i18n-attr');
    if (lang === 'uk' && uaDict[key] !== undefined) {
      writeValue(el, attr, uaDict[key]);
    } else {
      writeValue(el, attr, englishOriginals.get(key) ?? readValue(el, attr));
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
    const attr = el.getAttribute('data-i18n-attr');
    englishOriginals.set(el.getAttribute('data-i18n'), readValue(el, attr));
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
