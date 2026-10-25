const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-links');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Menú móvil
function setMenu(open) {
    if (!navToggle || !navList) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.textContent = open ? 'Cerrar' : 'Menú';
    navList.classList.toggle('is-open', open);
}

navToggle?.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

// Enlace activo según la sección visible
if ('IntersectionObserver' in window) {
    const targets = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'true');
                else link.removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '-40% 0px -55%' });
    targets.forEach((section) => navObserver.observe(section));
}

// Entrada escalonada de cada sección
const revealables = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !reducedMotion.matches) {
    revealables.forEach((element) => {
        const siblings = [...element.closest('section').querySelectorAll('.reveal')];
        element.style.setProperty('--delay', `${Math.min(siblings.indexOf(element), 5) * 80}ms`);
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -12% 0px' });
    revealables.forEach((element) => revealObserver.observe(element));
} else {
    revealables.forEach((element) => element.classList.add('is-in'));
}

// Índice de trabajo: el nombre señalado muestra su contexto
const workItems = [...document.querySelectorAll('.work-item')];
function activateWork(item) {
    workItems.forEach((other) => {
        const isActive = other === item;
        other.classList.toggle('is-active', isActive);
        other.querySelector('.work-name button')?.setAttribute('aria-expanded', String(isActive));
    });
}
workItems.forEach((item) => {
    const button = item.querySelector('.work-name button');
    button?.addEventListener('pointerenter', () => activateWork(item));
    button?.addEventListener('focus', () => activateWork(item));
    button?.addEventListener('click', () => activateWork(item));
});

// Carrera de consultas: los rangos medidos, reproducidos a escala real
const race = document.querySelector('.race');
if (race) {
    const button = race.querySelector('.race-button');
    const status = race.querySelector('.race-status');
    const lanes = [...race.querySelectorAll('.race-lane')].map((lane) => ({
        min: Number(lane.dataset.min),
        max: Number(lane.dataset.max),
        name: lane.dataset.lane,
        bar: lane.querySelector('.race-bar'),
        time: lane.querySelector('.race-time'),
    }));
    const format = (seconds) => `${seconds.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} s`;
    let frame = 0;

    function reset() {
        cancelAnimationFrame(frame);
        lanes.forEach((lane) => {
            lane.bar.style.setProperty('--p', '0');
            lane.time.textContent = format(0);
        });
    }

    function run() {
        reset();
        lanes.forEach((lane) => { lane.duration = lane.min + Math.random() * (lane.max - lane.min); });
        const longest = Math.max(...lanes.map((lane) => lane.duration));
        const start = performance.now();
        button.textContent = 'Reiniciar';
        status.textContent = 'Ejecutando las dos consultas…';

        const tick = (now) => {
            const elapsed = (now - start) / 1000;
            lanes.forEach((lane) => {
                const done = Math.min(elapsed, lane.duration);
                lane.bar.style.setProperty('--p', String(done / longest));
                lane.time.textContent = format(done);
            });
            const after = lanes.find((lane) => lane.name === 'after');
            const before = lanes.find((lane) => lane.name === 'before');
            if (elapsed >= before.duration) {
                status.textContent = `Terminadas. La consulta reescrita fue ${Math.round(before.duration / after.duration)} veces más rápida.`;
                button.textContent = 'Ejecutar otra vez';
                return;
            }
            if (elapsed >= after.duration) status.textContent = `PostgreSQL 17 terminó en ${format(after.duration)}. La original sigue en marcha…`;
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
    }

    button.hidden = false;
    reset();
    status.textContent = 'Rangos medidos: 45–60 s antes y 1–5 s después.';
    button.addEventListener('click', run);
    // La comparativa arranca sola la primera vez que se ve, salvo con movimiento reducido.
    if ('IntersectionObserver' in window && !reducedMotion.matches) {
        const raceObserver = new IntersectionObserver((entries, observer) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            observer.disconnect();
            setTimeout(run, 600);
        }, { threshold: 0.6 });
        raceObserver.observe(race);
    }
}

const year = document.getElementById('current-year');
if (year) year.textContent = String(new Date().getFullYear());
