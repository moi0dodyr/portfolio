// Stylesheet imports (Vite will bundle these)
import './styles/main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/elements.css';
import './styles/subpages.css';
import './styles/footer.css';

// i18n switcher logic
import { initI18n } from './i18n.js';

// Page navigation logic (Client-side Page Router)
export function go(id, anchor) {
  document.querySelectorAll('.page').forEach((p) => {
    p.classList.remove('active');
  });
  
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
  }
  
  if (anchor) {
    requestAnimationFrame(() => {
      const a = document.getElementById(anchor);
      if (a) {
        a.scrollIntoView({ behavior: 'smooth' });
      }
    });
  } else {
    window.scrollTo({ top: 0 });
  }
}

// Initialize navigation and translations
document.addEventListener('DOMContentLoaded', () => {
  initI18n();

  // Setup click handler for client-side routing links
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go]');
    if (!t) return;
    e.preventDefault();
    go(t.getAttribute('data-go'), t.getAttribute('data-anchor'));
  });
});
