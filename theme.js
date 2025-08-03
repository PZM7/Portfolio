// Funcionalidad para el cambio de tema (modo claro/oscuro)
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        console.log('Inicializando ThemeManager...');
        
        // Aplicar tema guardado
        this.applyTheme();
        console.log('Tema aplicado:', this.theme);
        
        // Crear y añadir el botón de cambio de tema
        this.createThemeToggle();
        
        // Añadir listener para el botón
        this.addThemeToggleListener();
        
        console.log('ThemeManager inicializado completamente');
    }

    createThemeToggle() {
        // Buscar el nav para insertar el toggle
        const nav = document.querySelector('nav');
        if (!nav) {
            console.log('No se encontró el elemento nav');
            return;
        }

        // Verificar si ya existe el toggle
        const existingToggle = document.querySelector('.theme-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }

        // Crear el toggle switch
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Cambiar tema');
        themeToggle.setAttribute('title', 'Cambiar tema');
        themeToggle.setAttribute('role', 'switch');
        themeToggle.setAttribute('aria-checked', this.theme === 'dark');

        // Aplicar estado inicial
        if (this.theme === 'dark') {
            themeToggle.classList.add('active');
        }

        // Buscar o crear el contenedor nav-right
        let navRight = nav.querySelector('.nav-right');
        if (!navRight) {
            navRight = document.createElement('div');
            navRight.className = 'nav-right';
            
            // Mover el menú al contenedor nav-right
            const navMenu = nav.querySelector('.nav-menu');
            if (navMenu) {
                navRight.appendChild(navMenu);
            }
            
            // Insertar nav-right después del título
            const navTitle = nav.querySelector('h2');
            if (navTitle) {
                navTitle.parentNode.insertBefore(navRight, navTitle.nextSibling);
            } else {
                nav.appendChild(navRight);
            }
        }
        
        // Insertar el toggle en nav-right
        navRight.appendChild(themeToggle);

        console.log('Toggle de tema creado:', themeToggle);
    }

    getThemeIcon() {
        return this.theme === 'dark' 
            ? '☀️' 
            : '🌙';
    }

    addThemeToggleListener() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón de tema clickeado');
                this.toggleTheme();
            });
            console.log('Listener añadido al botón de tema');
        } else {
            console.log('No se encontró el botón de tema para añadir listener');
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveTheme();
        this.updateThemeToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }

    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    updateThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            if (this.theme === 'dark') {
                themeToggle.classList.add('active');
                themeToggle.setAttribute('aria-checked', 'true');
            } else {
                themeToggle.classList.remove('active');
                themeToggle.setAttribute('aria-checked', 'false');
            }
        }
    }

    // Método para obtener el tema actual
    getCurrentTheme() {
        return this.theme;
    }

    // Método para establecer un tema específico
    setTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            this.theme = theme;
            this.applyTheme();
            this.saveTheme();
            this.updateThemeToggle();
        }
    }
}

// Aplicar tema inmediatamente para prevenir flash
function applyThemeImmediately() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.classList.add('theme-loaded');
}

// Aplicar tema antes de que se cargue el DOM
applyThemeImmediately();

// Inicializar el gestor de temas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando tema...');
    
    // Pequeño retraso para asegurar que todo esté cargado
    setTimeout(() => {
        window.themeManager = new ThemeManager();
        console.log('ThemeManager inicializado');
        
        // Verificar que el botón se creó correctamente
        setTimeout(() => {
            const toggle = document.querySelector('.theme-toggle');
            if (toggle) {
                console.log('✅ Botón de tema creado correctamente');
                console.log('Botón:', toggle);
            } else {
                console.log('❌ No se pudo crear el botón de tema');
            }
        }, 200);
    }, 100);
});

// Detectar preferencia del sistema operativo
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Escuchar cambios en la preferencia del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Solo aplicar si no hay un tema guardado manualmente
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            if (window.themeManager) {
                window.themeManager.setTheme(newTheme);
            }
        }
    });
}

// Función para obtener el tema actual (útil para otros scripts)
function getCurrentTheme() {
    return window.themeManager ? window.themeManager.getCurrentTheme() : 'light';
}

// Función para cambiar el tema manualmente
function setTheme(theme) {
    if (window.themeManager) {
        window.themeManager.setTheme(theme);
    }
} 