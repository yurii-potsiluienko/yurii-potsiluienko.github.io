(() => {
  'use strict';

  const storageKey = 'ee-portfolio-theme';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const getStoredTheme = () => localStorage.getItem(storageKey);
  const setStoredTheme = (theme) => localStorage.setItem(storageKey, theme);

  const resolveTheme = (pref) => {
    if (pref === 'light' || pref === 'dark') return pref;
    return mediaQuery.matches ? 'dark' : 'light';
  };

  const applyTheme = (pref) => {
    const active = resolveTheme(pref);
    document.documentElement.setAttribute('data-bs-theme', active);

    const icon = document.getElementById('themeToggleIcon');
    const btn = document.getElementById('themeToggleBtn');
    if (icon && btn) {
      icon.className = active === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
      const label = active === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }
  };

  applyTheme(getStoredTheme() || 'auto');

  window.addEventListener('DOMContentLoaded', () => {
    applyTheme(getStoredTheme() || 'auto');

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-bs-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setStoredTheme(next);
        applyTheme(next);
      });
    }

    mediaQuery.addEventListener('change', () => {
      if (!getStoredTheme()) {
        applyTheme('auto');
      }
    });
  });
})();