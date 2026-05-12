# Astro Template

Plantilla base para crear proyectos con Astro sin repetir configuración inicial.

Incluye:

- Astro 6
- Tailwind CSS 4
- MDX
- Sitemap
- Layout base
- Componentes mínimos reutilizables
- SEO técnico básico
- Página 404
- `robots.txt` dinámico
- Manifest web
- Imagen social por defecto
- Tests smoke con `node:test`
- CI en pull requests
- Despliegue automático en GitHub Pages
- Dependabot para npm y GitHub Actions

## Requisitos

Usa Node 22. El repositorio incluye `.nvmrc`.

```sh
nvm use
npm ci
```

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Arranca el servidor local de Astro |
| `npm run build` | Genera la web estática en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm test` | Ejecuta tests smoke básicos |
| `npm run format` | Formatea CSS, JS, JSON, Markdown, TS y YAML |
| `npm run format:check` | Comprueba formato |
| `npm run clean` | Borra `dist` y `.astro` |

## Estructura recomendada

```text
/
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── ci.yml
│       └── pages.yml
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   └── og-image.svg
├── scripts/
│   └── clean.mjs
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── config/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css
└── tests/
    └── smoke.test.mjs
```

## Crear un proyecto nuevo desde esta plantilla

1. Usa este repositorio como template o clónalo.
2. Cambia `name` en `package.json`.
3. Cambia los datos de `src/config/site.ts`.
4. Cambia `public/favicon.svg`, `public/favicon.ico` y `public/og-image.svg`.
5. Actualiza `public/manifest.webmanifest`.
6. Revisa `.env.example` si necesitas sobrescribir `ASTRO_SITE` o `ASTRO_BASE`.
7. Ejecuta `npm ci`, `npm test` y `npm run build`.
8. Activa GitHub Pages en el repositorio usando GitHub Actions como fuente.

## GitHub Pages

El despliegue está en `.github/workflows/pages.yml`.

Por defecto, cuando corre en GitHub Actions, `astro.config.mjs` calcula automáticamente:

- `site`: `https://OWNER.github.io`
- `base`: `/NOMBRE_DEL_REPO`

Puedes sobrescribirlo con variables de entorno:

```env
ASTRO_SITE=https://example.com
ASTRO_BASE=/
```

Para un dominio propio normalmente usarías:

```env
ASTRO_SITE=https://example.com
ASTRO_BASE=/
```

## CI

`.github/workflows/ci.yml` ejecuta en pull requests:

```sh
npm ci
npm test
npm run build
```

Los tests son intencionadamente suaves: comprueban que la estructura mínima existe, que los scripts básicos están disponibles y que los workflows no desaparecen.

## Configuración principal

La configuración editable del sitio está en:

```ts
src/config/site.ts
```

Ahí puedes cambiar nombre, descripción, idioma, autor y URL base del proyecto.

## Notas

Esta plantilla intenta ser útil sin ser pesada. Evita añadir dependencias de desarrollo obligatorias para que los proyectos derivados arranquen rápido y no fallen por configuración innecesaria.
