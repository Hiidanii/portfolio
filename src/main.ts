import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    // Reveal-on-scroll using IntersectionObserver
    const revealSelector = '.reveal';

    // Better defaults: slightly smaller negative margin so bottom elements can trigger
    const ioOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -5% 0px',
      threshold: 0.06,
    };

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, ioOptions);

    // Observe all current .reveal elements that are not yet observed
    const observeAll = () => {
      const els = Array.from(document.querySelectorAll(revealSelector)) as Element[];
      els.forEach((el) => {
        // mark elements we've started observing to avoid double-observing
        if (!(el as HTMLElement).dataset['ioObserved']) {
          io.observe(el);
          (el as HTMLElement).dataset['ioObserved'] = 'true';
        }
      });
    };

    // Initial observe
    observeAll();

    // If new nodes with .reveal are added later (ngFor, lazy load), observe them too
    const mo = new MutationObserver((mutations) => {
      let found = false;
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          for (const node of Array.from(m.addedNodes)) {
            if (node instanceof Element) {
              if (node.matches && node.matches(revealSelector)) found = true;
              if (node.querySelector && node.querySelector(revealSelector)) found = true;
            }
          }
        }
      }
      if (found) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Also re-check on load in case some assets delayed rendering
    window.addEventListener('load', observeAll, { once: true });
  })
  .catch((err) => console.error(err));
