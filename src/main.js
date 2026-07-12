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

// ─── Hash-based Router ───────────────────────────────────────────────
// Routes:
//   (empty) / #/ / #/home        → home page
//   #/case/tf                    → The Ticket Fairy case
//   #/case/wt                    → WealthTrace case
//   #/work  #/about  #/contact   → home page + scroll to anchor

// Map route segments to page element IDs
const CASE_ROUTES = { tf: 'tf', wt: 'wt' };

/**
 * Parse location.hash into { page, anchor }.
 * Examples:
 *   ""            → { page: "home", anchor: null }
 *   "#/"          → { page: "home", anchor: null }
 *   "#/case/tf"   → { page: "tf",   anchor: null }
 *   "#/about"     → { page: "home", anchor: "about" }
 */
function parseRoute(hash) {
  const raw = (hash || '').replace(/^#\/?/, '');   // strip leading #/ or #
  const segments = raw.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { page: 'home', anchor: null };
  }

  // #/case/<id>
  if (segments[0] === 'case' && segments[1] && CASE_ROUTES[segments[1]]) {
    return { page: CASE_ROUTES[segments[1]], anchor: null };
  }

  // #/work, #/about, #/contact — anchors on the home page
  const knownAnchors = ['work', 'about', 'contact'];
  if (knownAnchors.includes(segments[0])) {
    return { page: 'home', anchor: segments[0] };
  }

  // Fallback to home
  return { page: 'home', anchor: null };
}

/**
 * Apply the current hash route to the DOM:
 * switch visible .page, scroll to top or anchor.
 */
function applyRoute() {
  const { page, anchor } = parseRoute(window.location.hash);

  document.querySelectorAll('.page').forEach((p) => {
    p.classList.remove('active');
  });

  const el = document.getElementById(page);
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

/**
 * Build a hash string from page id + optional anchor,
 * set it on location (triggers hashchange).
 */
export function go(id, anchor) {
  let hash;
  if (id === 'home' && anchor) {
    hash = `#/${anchor}`;
  } else if (id === 'home') {
    hash = '#/';
  } else {
    hash = `#/case/${id}`;
  }

  // If the hash is already correct, applyRoute manually
  // (hashchange won't fire for identical hashes)
  if (window.location.hash === hash) {
    applyRoute();
  } else {
    window.location.hash = hash;
  }
}

// ─── Initialization ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initI18n();

  // Listen to hash changes (browser back/forward, link clicks)
  window.addEventListener('hashchange', applyRoute);

  // Apply the initial route from the URL
  applyRoute();

  // Setup click handler for [data-go] routing links
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go]');
    if (!t) return;
    e.preventDefault();
    go(t.getAttribute('data-go'), t.getAttribute('data-anchor'));
  });

  // Sidebar TOC links inside case pages — smooth scroll without
  // breaking the hash router. They use href="#tf-problem" etc.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.case-sidebar a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Navbar dark/light detection based on underlying section
  const nav = document.querySelector('nav');
  if (nav) {
    const navH = nav.offsetHeight;
    const darkSections = document.querySelectorAll('.dark-theme');

    // Observe dark sections intersecting with the nav strip at the top
    const observer = new IntersectionObserver(
      (entries) => {
        let isDark = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) isDark = true;
        });
        nav.classList.toggle('nav-dark', isDark);
      },
      {
        // Only trigger when a dark section enters the top nav-height strip
        rootMargin: `0px 0px -${window.innerHeight - navH}px 0px`,
        threshold: 0,
      }
    );

    darkSections.forEach((s) => observer.observe(s));
  }

  // Lightbox and Tooltip for Other Products
  const globalTooltip = document.createElement('div');
  globalTooltip.className = 'global-op-tooltip';
  document.body.appendChild(globalTooltip);

  document.querySelectorAll('.op-card-image').forEach(card => {
    const tooltipContent = card.querySelector('.op-card-tooltip');
    
    // Tooltip logic
    card.addEventListener('mouseenter', () => {
      if(tooltipContent) {
        globalTooltip.innerHTML = tooltipContent.innerHTML;
        globalTooltip.classList.add('visible');
      }
    });
    card.addEventListener('mousemove', (e) => {
      // position slightly offset from cursor
      globalTooltip.style.left = e.clientX + 'px';
      globalTooltip.style.top = e.clientY + 'px';
      globalTooltip.style.transform = 'translate(15px, 15px)';
    });
    card.addEventListener('mouseleave', () => {
      globalTooltip.classList.remove('visible');
    });

    // Lightbox logic
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (!img) return;

      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox-overlay';
      
      const imgClone = document.createElement('img');
      imgClone.src = img.src;
      imgClone.alt = img.alt;
      
      lightbox.appendChild(imgClone);
      document.body.appendChild(lightbox);
      
      // Force reflow before adding visible class for transition
      void lightbox.offsetWidth;
      lightbox.classList.add('visible');
      
      // Close on click
      lightbox.addEventListener('click', () => {
        lightbox.classList.remove('visible');
        setTimeout(() => lightbox.remove(), 300);
      });
    });
  });
});
