// Single stylesheet entry — src/styles/main.css imports the token
// collections, base styles and every component (Vite bundles them).
import './styles/main.css';

// Language switcher logic
import { initI18n } from './i18n.js';

// Vercel Analytics — counts visitors and page views once deployed.
// Does nothing on localhost, only sends data from the live site.
import { inject } from '@vercel/analytics';
inject();

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

  // Opens an image fullscreen in a dismissable overlay. Shared by the
  // "Other products" cards (home page) and the case-page figures.
  const openLightbox = (img) => {
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

    const close = () => {
      lightbox.classList.remove('visible');
      document.removeEventListener('keydown', onKey);
      setTimeout(() => lightbox.remove(), 300);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };

    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
  };

  // Click-to-magnify for the inline figures on internal case pages.
  // The hero image (laptop mock-up) is deliberately excluded, and the
  // placeholder blocks have no <img> so they're never zoomable.
  const caseImages = document.querySelectorAll('.case-figure-img');
  caseImages.forEach((img) => {
    img.classList.add('is-zoomable');
    img.addEventListener('click', () => openLightbox(img));
  });

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
        openLightbox(card.querySelector('img'));
      });
    });
  }

  // Hero laptop image magnify-on-scroll fallback (for Firefox / unsupported browsers)
  const heroImages = document.querySelectorAll('.case-hero-image-section .case-hero-image');
  if (heroImages.length > 0) {
    const supportsScrollTimeline =
      window.CSS &&
      CSS.supports &&
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

    if (!supportsScrollTimeline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const updateHeroScale = () => {
        heroImages.forEach((img) => {
          const section = img.closest('.case-hero-image-section') || img;
          const rect = section.getBoundingClientRect();
          const viewHeight = window.innerHeight;

          const totalDist = viewHeight * 0.65;
          const currentDist = viewHeight - rect.top;
          let progress = currentDist / totalDist;
          progress = Math.max(0, Math.min(1, progress));

          const scale = 0.85 + progress * 0.2;
          img.style.transform = `scale(${scale.toFixed(4)})`;
        });
      };

      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            updateHeroScale();
            ticking = false;
          });
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      updateHeroScale();
    }
  }
});
