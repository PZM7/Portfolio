# Portfolio de Pedro Zahonero Mangas

Portfolio profesional en español orientado a posiciones de Full-Stack Developer, Ruby on Rails Developer y Backend Engineer. Es una página única, responsive y accesible, construida sin dependencias de producción.

## Stack

- HTML5 semántico
- CSS moderno (Grid, Flexbox, variables y media queries)
- Tipografía Erode (Fontshare)
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

La raíz es la única fuente editable. Para generar el artefacto publicable en `dist`, ejecuta:

```powershell
.\scripts\build.ps1
```

El script recrea `dist` a partir de los archivos canónicos y evita mantener dos copias manualmente.

## Estructura

```text
.
├── index.html                    Página única del portfolio
├── style.css                    Diseño (tema oscuro único) y responsive
├── app.js                       Menú, índice de trabajo, comparativa de consultas y animaciones
├── assets/                      Retrato de la sección Sobre mí
├── favicon.svg                  Icono del sitio
├── CV_Pedro_Zahonero_ES.docx    CV descargable
├── robots.txt                  Directivas para rastreadores
├── sitemap.xml                 Mapa del sitio
├── scripts/build.ps1           Generación reproducible de dist
└── README.md                    Documentación del proyecto
```

## Despliegue

La configuración de Sites utiliza `dist` como salida generada. La URL canónica configurada en los metadatos es `https://pedro-zahonero-portfolio.pzm7.chatgpt.site/`.

La generación del artefacto no publica ni modifica ninguna rama remota.
