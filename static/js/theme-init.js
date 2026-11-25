// =====================================================================
// theme-init.js
// ---------------------------------------------------------------------
// Picks light or dark mode BEFORE the page is drawn on screen.
//
// Why is this a separate file instead of being in main.js?
//   main.js is loaded at the very end of the page (it needs the page's
//   buttons and footer to exist first). If the theme were set there, the
//   browser would already have drawn the page in light mode, and dark-mode
//   visitors would see a quick white "flash". This file is loaded in the
//   <head> (see _layouts/default.html), so it runs before anything appears.
//
// Keep this file tiny: the browser waits for it before showing the page.
// =====================================================================

// The "(() => { ... })();" wrapper runs the code immediately and keeps
// the variables inside it private, so they don't clash with other scripts.
(() => {
    // Read the theme the visitor chose last time ("dark", "light", or
    // null if they've never clicked the toggle). localStorage is a small
    // storage space in the browser that remembers values between visits.
    const savedTheme = localStorage.getItem('theme');

    // Ask the browser whether the visitor's operating system is set to
    // dark mode. This is only used if they haven't picked a theme yet.
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use dark mode if they chose it before, OR if they never chose
    // anything and their system is in dark mode.
    const useDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    // Bootstrap switches all of its colours based on the "data-bs-theme"
    // attribute on the <html> tag, so setting it here themes the whole page.
    document.documentElement.setAttribute('data-bs-theme', useDark ? 'dark' : 'light');
})();
