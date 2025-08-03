# Portfolio de Pedro Zahonero

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html          # Página principal (Inicio)
├── studies.html        # Página de formación y experiencia
├── about.html          # Página sobre mí
├── style.css           # Estilos principales (responsive, navegación, popups, temas)
├── studies.css         # Estilos específicos para la línea de tiempo
├── about.css           # Estilos específicos para la página about
├── app.js              # JavaScript principal (navegación, modales)
├── phone-popup.js      # Módulo JavaScript para popup de teléfono
├── theme.js            # Módulo JavaScript para gestión de temas (modo oscuro)
└── README.md           # Documentación del proyecto
```

## 🚀 Funcionalidades Implementadas

### **Navegación Responsive**
- **Menú hamburguesa**: En móvil con icono de tres puntos
- **Navegación fija**: Header con glassmorphism
- **Enlaces activos**: Indicador visual de la página actual

### **Sistema de Temas (Modo Oscuro/Claro)**
- **Modo claro/oscuro**: Cambio dinámico de tema con botón en el header
- **Persistencia**: El tema se guarda automáticamente en localStorage
- **Detección automática**: Respeta la preferencia del sistema operativo
- **Transiciones suaves**: Animaciones fluidas entre temas
- **Variables CSS**: Sistema centralizado de colores para ambos temas
- **Iconos dinámicos**: Sol/luna según el tema actual
- **Accesibilidad**: Alto contraste en ambos modos

### **Página de Inicio (index.html)**
- **Hero Section**: Presentación con gradientes y animaciones
- **Quick Skills**: Muestra de tecnologías principales
- **About Preview**: Vista previa con enlace a página completa
- **Estadísticas**: Métricas profesionales destacadas

### **Página de Estudios (studies.html)**
- **Timeline interactivo**: Línea de tiempo con tarjetas alternadas
- **Modal expandible**: Tarjeta clickeable con información detallada
- **Sección de idiomas**: Con banderas reales y niveles
- **Responsive completo**: Adaptado para todos los dispositivos

### **Página About Me (about.html)**
- **Historia personal**: Trayectoria académica y profesional
- **Filosofía profesional**: Principios y valores
- **Experiencia técnica**: Detalle de habilidades
- **Intereses personales**: Hobbies y pasiones
- **Metas y aspiraciones**: Objetivos a corto, medio y largo plazo

### **Sistema de Contacto Modular**
- **Popup de teléfono**: Creado dinámicamente con JavaScript
- **Módulo reutilizable**: Clase PhonePopup en archivo separado
- **Copiar número**: Con feedback visual
- **WhatsApp directo**: Integración con API de WhatsApp
- **Email directo**: Enlaces mailto

## 🎨 Características de Diseño

### **Estilo Minimalista**
- **Paleta de colores**: Gradientes azul-púrpura
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: FontAwesome
- **Animaciones**: Suaves y profesionales

### **Sistema de Temas Avanzado**
- **Modo claro**: Colores claros y legibles con fondo blanco
- **Modo oscuro**: Colores oscuros para reducir fatiga visual
- **Variables CSS**: Sistema centralizado de colores con transiciones
- **Transiciones**: Cambios suaves entre temas (0.3s ease)
- **Accesibilidad**: Alto contraste en ambos modos
- **Botón de cambio**: Icono sol/luna en el header
- **Persistencia**: Recuerda la preferencia del usuario

### **Responsive Design**
- **Desktop**: Layout completo con efectos hover
- **Tablet**: Ajustes de tamaño y espaciado
- **Móvil**: Navegación optimizada y elementos adaptados

### **Accesibilidad**
- **Semántica HTML**: Estructura semántica correcta
- **Contraste**: Colores con buen contraste en ambos temas
- **Navegación por teclado**: Soporte completo
- **ARIA labels**: Para lectores de pantalla

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Media Queries, Variables CSS
- **JavaScript ES6+**: DOM manipulation, Event handling, Classes
- **APIs**: Clipboard API, WhatsApp API
- **Fuentes**: Google Fonts (Inter)
- **Iconos**: FontAwesome

## 📱 Funcionalidades Avanzadas

### **Modal Interactivo**
- **Apertura**: Clic en tarjeta de experiencia
- **Contenido detallado**: Información profesional completa
- **Cierre múltiple**: Botón X, clic fuera, Escape
- **Ocultar footer**: Durante la visualización del modal

### **Popup de Teléfono Modular**
- **Creación dinámica**: Se crea automáticamente cuando es necesario
- **Módulo reutilizable**: Clase PhonePopup independiente
- **Funciona globalmente**: En todas las páginas del sitio
- **Copiar número**: Con confirmación visual
- **WhatsApp directo**: Mensaje predefinido profesional
- **Responsive**: Adaptado para móvil

### **Timeline Responsive**
- **Alternancia**: Tarjetas izquierda/derecha en desktop
- **Layout móvil**: Una columna con línea vertical
- **Animaciones**: Entrada suave de elementos
- **Puntos de conexión**: Indicadores visuales del timeline

### **Gestor de Temas (theme.js)**
- **Cambio dinámico**: Botón en el header para cambiar tema
- **Persistencia**: El tema se guarda automáticamente en localStorage
- **Detección automática**: Respeta preferencias del sistema operativo
- **Transiciones suaves**: Animaciones fluidas entre temas
- **Variables CSS**: Sistema centralizado de colores
- **Iconos dinámicos**: Sol para modo oscuro, luna para modo claro
- **Clase ThemeManager**: Gestión completa del sistema de temas

## 🚀 Optimizaciones Implementadas

### **JavaScript Modular**
- **Clases ES6**: PhonePopup y ThemeManager como clases reutilizables
- **Verificaciones condicionales**: Solo ejecuta si existen elementos
- **Event delegation**: Manejo eficiente de eventos
- **Código modular**: Separación clara de funcionalidades
- **Manejo de errores**: Try-catch para operaciones críticas

### **CSS Organizado**
- **Variables CSS**: Para colores y valores reutilizables
- **Media queries**: Responsive design completo
- **Animaciones**: Performance optimizada
- **Especificidad controlada**: Evita conflictos de estilos
- **Sistema de temas**: Variables CSS para modo claro/oscuro
- **Transiciones**: Cambios suaves entre temas

### **HTML Semántico**
- **Estructura clara**: Header, main, footer, sections
- **Enlaces accesibles**: Href apropiados y aria-labels
- **Contenido estructurado**: H1, H2, H3 jerárquicos
- **Meta tags**: SEO y viewport optimizados

## 📋 Funcionalidades por Página

### **index.html**
- ✅ Hero section con animaciones
- ✅ Quick skills showcase
- ✅ About preview
- ✅ Popup de teléfono (módulo)
- ✅ Navegación responsive
- ✅ Modo oscuro/claro con botón en header

### **studies.html**
- ✅ Timeline interactivo
- ✅ Modal expandible
- ✅ Sección de idiomas
- ✅ Popup de teléfono (módulo)
- ✅ Indicador de click
- ✅ Modo oscuro/claro con botón en header

### **about.html**
- ✅ Historia personal
- ✅ Filosofía profesional
- ✅ Experiencia técnica
- ✅ Intereses personales
- ✅ Metas y aspiraciones
- ✅ Popup de teléfono (módulo)
- ✅ Modo oscuro/claro con botón en header

## 🔧 Estructura Modular

### **theme.js**
```javascript
class ThemeManager {
    constructor() {
        // Configuración inicial del tema
    }
    
    createThemeToggle() {
        // Crea el botón de cambio de tema en el header
    }
    
    applyTheme() {
        // Aplica el tema actual usando variables CSS
    }
    
    toggleTheme() {
        // Cambia entre modo claro y oscuro
    }
    
    getThemeIcon() {
        // Retorna el icono apropiado (sol/luna)
    }
    
    saveTheme() {
        // Guarda la preferencia en localStorage
    }
    
    init() {
        // Inicializa el gestor de temas
    }
}
```

### **phone-popup.js**
```javascript
class PhonePopup {
    constructor() {
        // Configuración inicial
    }
    
    createPopupHTML() {
        // Genera el HTML del popup
    }
    
    createPopup() {
        // Crea el popup dinámicamente
    }
    
    openPopup() {
        // Abre el popup
    }
    
    closePopup() {
        // Cierra el popup
    }
    
    copyPhoneNumber() {
        // Copia número al portapapeles
    }
    
    openWhatsApp() {
        // Abre WhatsApp
    }
    
    setupEvents() {
        // Configura todos los eventos
    }
    
    init() {
        // Inicializa el popup
    }
}
```

### **Ventajas de la Modularización**
- **Reutilizable**: Se puede usar en cualquier página
- **Mantenible**: Código organizado y fácil de modificar
- **Escalable**: Fácil añadir nuevas funcionalidades
- **Independiente**: No interfiere con otros scripts
- **Configurable**: Parámetros personalizables

## 🎯 Próximas Mejoras

- [ ] Añadir página de proyectos
- [ ] Implementar formulario de contacto
- [ ] Optimizar imágenes
- [ ] Añadir más animaciones
- [ ] Implementar PWA
- [ ] Crear más módulos reutilizables
- [ ] Añadir más opciones de tema (sepia, high contrast)
- [ ] Implementar transiciones más avanzadas
- [ ] Añadir modo automático basado en hora del día

## 📞 Contacto

- **Email**: pedro@email.com
- **Teléfono**: +34 600 000 000
- **WhatsApp**: Disponible a través del popup
- **LinkedIn**: https://linkedin.com/in/pedro-zahonero-mangas
- **GitHub**: https://github.com/PZM7
- **Instagram**: https://instagram.com/pzm7 