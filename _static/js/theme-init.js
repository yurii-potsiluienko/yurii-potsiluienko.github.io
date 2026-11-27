// theme-init.js
// sets light/dark mode before the page shows up.
//
// this can't go in main.js! main.js loads at the bottom of the page, and by
// then the browser has already drawn everything in light mode, so dark mode
// would flash white for a second. this file loads in the <head> instead
// (see _layouts/default.html). keep it small, the page waits for it.

// (() => { ... })(); just runs the code right away and keeps the
// variables inside so they don't mess with other scripts
(() => {
    // what I picked last time with the toggle button: 'dark', 'light',
    // or null if I never clicked it (localStorage remembers it between visits)
    const savedTheme = localStorage.getItem('theme');

    // is the computer/phone set to dark mode? only matters if nothing is saved
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // dark if I chose dark before, or if I never chose and the system is dark
    const useDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    // bootstrap changes all its colours based on data-bs-theme on the <html> tag
    document.documentElement.setAttribute('data-bs-theme', useDark ? 'dark' : 'light');
})();
