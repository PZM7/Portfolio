# Portfolio de Pedro Zahonero Mangas

Portfolio profesional en español orientado a posiciones de Full-Stack Developer, Ruby on Rails Developer y Backend Engineer. Es una página única, responsive y accesible, construida sin dependencias de producción.

## Stack

- HTML5 semántico
- CSS moderno (Grid, Flexbox, variables y media queries)
- JavaScript nativo

## Ejecución local

No es necesario instalar dependencias. Desde la raíz del proyecto:

```powershell
python -m http.server 8000
```

Después, abre `http://localhost:8000`.

## Comprobaciones

El proyecto no utiliza un gestor de paquetes y no tiene suites de lint, tests, typecheck o build. La sintaxis de JavaScript puede comprobarse con:

```powershell
node --check app.js
```

Al ser un sitio estático, `index.html`, `style.css`, `app.js`, `favicon.svg` y el CV forman directamente el artefacto publicable.

## Estructura

```text
.
├── index.html                    Página única del portfolio
├── style.css                    Diseño, temas y responsive
├── app.js                       Navegación, tema y mejoras de interacción
├── favicon.svg                  Icono del sitio
├── CV_Pedro_Zahonero_ES.docx    CV descargable
└── README.md                    Documentación del proyecto
```

## Despliegue

El repositorio no incluye actualmente una configuración de despliegue automatizado ni una URL de producción verificada.
