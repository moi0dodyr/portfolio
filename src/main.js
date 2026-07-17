// Single stylesheet entry — src/styles/main.css imports the token
// collections, base styles and every component (Vite bundles them).
import './styles/main.css';

// Language switcher logic
import { initI18n } from './i18n.js';

// ─── Legacy URL redirects ────────────────────────────────────────────
// The site used to be a single page with hash routes (#/case/tf).
// If someone opens an old link, send them to the new page.
const LEGACY_ROUTES = {
  '#/case/tf': '/ticket-fairy/',
  '#/case/wt': '/wealthtrace/',
  '#/work': '/#work',
  '#/contact': '/#contact',
};

if (LEGACY_ROUTES[window.location.hash]) {
  window.location.replace(LEGACY_ROUTES[window.location.hash]);
}

// ─── Initialization ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initI18n();

  // Navbar dark/light detection based on the section underneath it
  const nav = document.querySelector('nav');
  const darkSections = document.querySelectorAll('.dark-theme');
  if (nav && darkSections.length > 0) {
    const navH = nav.offsetHeight;

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

  // Sidebar TOC scrollspy (case pages only)
  const tocLinks = document.querySelectorAll('.case-sidebar a[href^="#"]');
  if (tocLinks.length > 0) {
    const sections = Array.from(tocLinks)
      .map((link) => document.getElementById(link.hash.slice(1)))
      .filter(Boolean);

    const updateActive = () => {
      // Active = the last section whose top has passed the upper third of the viewport
      const cutoff = window.innerHeight * 0.35;
      let current = sections[0];
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= cutoff) current = s;
      });
      tocLinks.forEach((link) => {
        link.classList.toggle('active', link.hash === `#${current.id}`);
      });
    };

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            updateActive();
            ticking = false;
          });
        }
      },
      { passive: true }
    );
    updateActive();
  }

  // Tooltip + lightbox for the "Other products" cards (home page only)
  const opCards = document.querySelectorAll('.op-card-image');
  if (opCards.length > 0) {
    const globalTooltip = document.createElement('div');
    globalTooltip.className = 'global-op-tooltip';
    document.body.appendChild(globalTooltip);

    opCards.forEach((card) => {
      const tooltipContent = card.querySelector('.op-card-tooltip');

      // Tooltip follows the cursor
      card.addEventListener('mouseenter', () => {
        if (tooltipContent) {
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

      // Click opens the image fullscreen
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
  }
});
