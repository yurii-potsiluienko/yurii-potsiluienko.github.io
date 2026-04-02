// Update footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Theme toggle
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    const setTheme = (dark) => {
        htmlElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
        icon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
    };

    setTheme(isDark);

    btn.onclick = () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newThemeIsDark = currentTheme === 'light';
        setTheme(newThemeIsDark);
        localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light');
    };
});