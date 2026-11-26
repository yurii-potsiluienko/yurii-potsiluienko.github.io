// main.js
// loads at the bottom of the page (see _layouts/default.html), so all the
// HTML is already there when this runs.


// --- footer year ---
// fills in <span id="current-year"> in the footer so the © year updates itself
document.getElementById('current-year').textContent = new Date().getFullYear();


// --- light/dark toggle button ---
// DOMContentLoaded = the page's HTML has finished loading, so the button exists
document.addEventListener("DOMContentLoaded", () => {
    // grab stuff by id
    const btn = document.getElementById('theme-toggle');   // button in the navbar
    const icon = document.getElementById('theme-icon');    // moon/sun icon inside it
    const htmlElement = document.documentElement;          // the <html> tag

    // theme-init.js already picked the starting theme, just read it
    const isDark = htmlElement.getAttribute('data-bs-theme') === 'dark';

    // switches the theme + icon
    // dark = true  -> dark mode, sun icon (click it to go back to light)
    // dark = false -> light mode, moon icon
    const setTheme = (dark) => {
        htmlElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
        icon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
    };

    // run once so the icon matches the starting theme
    setTheme(isDark);

    // on click: flip light <-> dark
    btn.onclick = () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newThemeIsDark = currentTheme === 'light';
        setTheme(newThemeIsDark);

        // save it so theme-init.js uses it next time
        localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light');
    };
});
