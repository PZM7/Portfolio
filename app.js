const navToggle = document.querySelector('.nav-toggle');
const navActions = document.querySelector('.nav-actions');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const themeToggle = document.querySelector('.theme-toggle');
const sections = [...document.querySelectorAll('main section[id]')];

function setMenu(open) {
    if (!navToggle || !navActions) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navActions.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    navToggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
}

navToggle?.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 980) setMenu(false); });

function getStoredTheme() {
    try { return localStorage.getItem('portfolio-theme'); } catch (_) { return null; }
}

function setTheme(theme, persist = true) {
    document.documentElement.dataset.theme = theme;
    themeToggle?.setAttribute('aria-checked', String(theme === 'dark'));
    if (persist) {
        try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Funciona sin almacenamiento. */ }
    }
}

setTheme(document.documentElement.dataset.theme || 'light', false);
themeToggle?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!getStoredTheme()) setTheme(event.matches ? 'dark' : 'light', false);
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === `#${visible.target.id}`;
            if (isCurrent) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
}

const year = document.getElementById('current-year');
if (year) year.textContent = String(new Date().getFullYear());
