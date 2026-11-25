// =====================================================================
// main.js
// ---------------------------------------------------------------------
// General page behaviour. This file is loaded at the bottom of the page
// (see _layouts/default.html), so all the HTML elements already exist
// by the time this code runs.
// =====================================================================


// ---------------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------------
// Find the <span id="current-year"> in the footer and put this year's
// number inside it, so the "© 2026" text never goes out of date.
document.getElementById('current-year').textContent = new Date().getFullYear();


// ---------------------------------------------------------------------
// Light / dark theme toggle button
// ---------------------------------------------------------------------
// "DOMContentLoaded" fires once the whole page's HTML has been read.
// Wrapping the code in it guarantees the button exists before we use it.
document.addEventListener("DOMContentLoaded", () => {
    // Grab the elements we need from the page by their id="..." values.
    const btn = document.getElementById('theme-toggle');   // the button in the navbar
    const icon = document.getElementById('theme-icon');    // the moon/sun icon inside it
    const htmlElement = document.documentElement;          // the <html> tag itself

    // The starting theme was already chosen by theme-init.js (in <head>).
    // Here we just read what it picked.
    const isDark = htmlElement.getAttribute('data-bs-theme') === 'dark';

    // A small helper function that switches the theme.
    //   dark = true  -> dark mode, show a sun icon (click to go light)
    //   dark = false -> light mode, show a moon icon (click to go dark)
    const setTheme = (dark) => {
        htmlElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
        icon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
    };

    // Run it once now so the icon matches the starting theme.
    setTheme(isDark);

    // What happens when the button is clicked:
    btn.onclick = () => {
        // If we're currently in light mode, switch to dark (and vice versa).
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newThemeIsDark = currentTheme === 'light';
        setTheme(newThemeIsDark);

        // Remember the choice so theme-init.js can use it on the next visit.
        localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light');
    };
});
