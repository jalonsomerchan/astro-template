# AGENTS.md

## Regla principal

Este repositorio es una plantilla base para crear proyectos con Astro. Cualquier agente IA que trabaje aquí debe conservar la plantilla reutilizable, ligera, traducible, modular, mantenible y preparada para GitHub Pages.

Las reglas de este archivo son obligatorias. Todo agente, asistente IA o automatización que modifique este repositorio debe leerlas, aplicarlas y comprobarlas antes de terminar cualquier tarea.

No basta con intentar seguir estas condiciones: si una solución las incumple, debe rehacerse hasta cumplirlas, salvo que el usuario pida explícitamente lo contrario en la tarea concreta.

Antes de modificar páginas, layouts, componentes, estilos, SEO, rutas, i18n, tests, documentación o despliegue, el agente debe consultar estas guías:

- `docs/design-system.md`
- `docs/template-usage.md`
- `docs/i18n-guide.md`
- `docs/github-pages.md`
- `docs/testing-guide.md`

## Prioridad

Estas instrucciones tienen prioridad sobre estilos antiguos del proyecto, patrones previos, preferencias implícitas o soluciones rápidas, salvo que el usuario indique expresamente lo contrario.

Si existe conflicto entre una tarea y estas reglas, el agente debe:

1. Cumplir la petición del usuario en la medida posible.
2. Mantener la plantilla reutilizable, pequeña, modular y traducible.
3. Explicar cualquier excepción relevante en el resumen final.

## Principios obligatorios

- Mobile first.
- Diseño profesional, limpio, moderno y vistoso.
- Light mode y dark mode en todos los componentes nuevos.
- No usar fuentes externas de Google Fonts, Adobe Fonts ni CDNs similares.
- Usar system fonts.
- Evitar dependencias innecesarias.
- Cuidar Core Web Vitals.
- HTML semántico.
- Buen SEO técnico.
- Accesibilidad mínima WCAG AA.
- Componentes reutilizables.
- Variables CSS globales para colores, radios, sombras, espaciados y transiciones.
- Mantener el soporte i18n de Astro.
- Mantener compatibilidad con GitHub Pages en subcarpeta.
- Mantener tests smoke simples y útiles.
- Mantener los ficheros lo más pequeños posible.
- Dividir el código por responsabilidad cuando un fichero crezca demasiado.
- Generar toda UI nueva preparada para todos los idiomas configurados.
- Seguir estándares de calidad, legibilidad, modularidad y mantenibilidad.

## Reglas obligatorias para agentes e IA

Todo agente IA debe aplicar estas reglas en cualquier cambio:

1. Respetar siempre este archivo y la documentación de `docs/`.
2. No generar soluciones monolíticas si pueden dividirse en componentes, helpers, constantes o módulos pequeños.
3. No añadir texto visible en un único idioma dentro de componentes, layouts o páginas reutilizables.
4. No dejar idiomas incompletos: toda clave nueva debe existir en todos los JSON de traducción configurados.
5. No añadir dependencias si la solución puede hacerse razonablemente con Astro, TypeScript, CSS, Tailwind o APIs nativas.
6. No romper GitHub Pages, rutas con `base`, i18n, SEO básico, accesibilidad ni tests existentes.
7. No ocultar errores eliminando tests: si un test falla por una razón legítima, debe corregirse el código o actualizarse el test de forma robusta.
8. No duplicar lógica entre idiomas, páginas o componentes si puede centralizarse.
9. No crear ficheros grandes por comodidad; preferir piezas pequeñas con nombres claros.
10. Documentar cualquier convención nueva que afecte al uso de la plantilla.

## Tamaño y modularidad de ficheros

Los ficheros deben mantenerse lo más pequeños posible sin sacrificar claridad.

Buenas prácticas obligatorias:

- Un fichero debe tener una responsabilidad principal.
- Extraer constantes compartidas a `src/config/`, `src/data/` o un módulo equivalente.
- Extraer helpers reutilizables a módulos propios.
- Extraer UI repetida a componentes de `src/components/`.
- Evitar duplicar bloques grandes de HTML, CSS o JavaScript.
- Evitar componentes con demasiada lógica interna.
- Mantener los estilos globales para tokens, resets y utilidades realmente globales.
- Mantener los estilos específicos cerca del componente cuando sea más claro.

Guía orientativa:

- Si un componente supera aproximadamente 200 líneas, valorar dividirlo.
- Si un helper mezcla varias responsabilidades, separarlo.
- Si una página contiene mucha UI repetible, mover esa UI a componentes.
- Si una lista de datos crece, moverla a un fichero de datos o configuración.

Estas cifras son orientativas, no una excusa para partir código sin sentido. La prioridad es claridad, reutilización y mantenimiento.

## Idiomas e i18n obligatorio

Toda funcionalidad nueva debe generarse con soporte para todos los idiomas configurados.

Reglas obligatorias:

- La fuente de verdad de idiomas está en `src/config/site.ts`.
- Las traducciones viven en `src/i18n/translations/*.json`.
- No hardcodear textos visibles en componentes reutilizables.
- Usar `useTranslations(locale)` para textos de UI.
- Mantener todas las claves alineadas entre idiomas.
- Si se añade un locale a `locales`, debe añadirse su JSON de traducción.
- Si se añade un JSON de traducción, debe añadirse el locale correspondiente a `locales`.
- Las rutas internas deben generarse con helpers localizados cuando aplique.
- La home del idioma por defecto debe seguir funcionando en `/`.
- Los idiomas secundarios deben seguir funcionando en `/{locale}/`.

Cuando se añada una clave nueva:

1. Añadirla al JSON del idioma por defecto.
2. Añadirla a todos los demás JSON configurados.
3. Usarla mediante helpers de i18n.
4. Ejecutar o mantener tests que comprueben que las claves están alineadas.

## Estándares de calidad

Todo cambio debe cumplir estos estándares:

- Código claro, simple y fácil de revisar.
- Nombres descriptivos para componentes, funciones, constantes y ficheros.
- TypeScript estricto cuando aplique.
- Sin lógica duplicada innecesaria.
- Sin código muerto, comentarios obsoletos ni pruebas desactivadas sin motivo.
- Sin hacks frágiles si existe una solución estable.
- Sin dependencias pesadas para tareas simples.
- Sin JavaScript de cliente si Astro/HTML/CSS lo resuelve bien.
- Accesibilidad básica: labels, textos alternativos, foco visible, contraste y estructura semántica.
- SEO básico: títulos, descripciones, canonical cuando aplique, Open Graph y marcado correcto en layouts.
- Rendimiento: evitar assets pesados, scripts innecesarios y bloqueos de render.

## Arquitectura actual

La plantilla usa:

- Astro 6.
- Tailwind CSS 4 mediante `@tailwindcss/vite`.
- MDX.
- `@astrojs/sitemap`.
- i18n nativo de Astro.
- Traducciones en JSON por idioma.
- GitHub Actions para CI y GitHub Pages.
- Tests básicos con `node:test`.

## Estructura importante

- `astro.config.mjs`: configuración de Astro, `site`, `base`, i18n e integraciones.
- `src/config/site.ts`: configuración central del sitio e idiomas.
- `src/i18n/ui.ts`: helpers de traducción y rutas localizadas.
- `src/i18n/translations/*.json`: textos traducibles.
- `src/layouts/BaseLayout.astro`: HTML base, SEO, Open Graph, header y footer.
- `src/components/`: componentes reutilizables.
- `src/pages/index.astro`: home del idioma por defecto.
- `src/pages/[locale]/index.astro`: home de idiomas no predeterminados.
- `src/pages/robots.txt.ts`: robots dinámico.
- `src/pages/manifest.webmanifest.ts`: manifest dinámico.
- `.github/workflows/ci.yml`: checks en pull requests.
- `.github/workflows/pages.yml`: despliegue en GitHub Pages.
- `tests/smoke.test.mjs`: comprobaciones básicas.

## Reglas para modificar el template

### No romper GitHub Pages

La web puede desplegarse en una subcarpeta como `/astro-template/`. No crear enlaces internos o assets con rutas absolutas duras tipo `/archivo.svg` si deben respetar `base`.

Usar helpers existentes cuando aplique:

- `getLocalizedPath('/', locale)` para URLs internas localizadas.
- `import.meta.env.BASE_URL` para assets y rutas que dependan del `base`.

### No romper i18n

No meter textos visibles directamente en componentes o páginas si son parte de la UI reutilizable. Añadir claves a los JSON de traducciones.

Cuando se añada una clave nueva:

1. Añadirla en `src/i18n/translations/es.json`.
2. Añadirla en todos los demás JSON de `src/i18n/translations/`.
3. Usarla con `useTranslations(locale)`.
4. Mantener las claves alineadas entre idiomas.

### No añadir dependencias sin necesidad

Esta es una plantilla. Evitar librerías nuevas salvo que la tarea lo requiera claramente. Preferir Astro, TypeScript, CSS, Tailwind y APIs del navegador.

### Mantener tests suaves

Los tests no deben validar detalles frágiles de diseño. Deben comprobar que la plantilla no explota y que los elementos base existen.

Cuando se añada infraestructura nueva, actualizar `tests/smoke.test.mjs` con comprobaciones mínimas y robustas.

Los tests de i18n no deben depender de una lista fija de idiomas si pueden leer la configuración real de `src/config/site.ts`.

### Mantener documentación actualizada

Si se cambia una convención importante, actualizar el documento correspondiente en `docs/` y, si afecta a agentes IA, también este archivo.

## Checklist antes de terminar una tarea

- ¿Se han aplicado las reglas de este `AGENTS.md`?
- ¿Sigue funcionando el idioma por defecto en `/`?
- ¿Siguen funcionando los idiomas secundarios como `/en/` y cualquier otro locale configurado?
- ¿Las rutas internas respetan GitHub Pages con subcarpeta?
- ¿Los textos nuevos están en todos los JSON de traducción?
- ¿Las claves de traducción siguen alineadas entre idiomas?
- ¿Los ficheros modificados siguen siendo pequeños y con una responsabilidad clara?
- ¿Se ha evitado duplicar lógica o UI?
- ¿El cambio respeta `docs/design-system.md`?
- ¿El código cumple estándares de calidad, accesibilidad, SEO y rendimiento?
- ¿Se mantiene `npm test` como comprobación básica?
- ¿Se actualizó la documentación si cambió una convención?

## Comandos útiles

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
npm run clean
```

## Qué evitar

- Convertir la plantilla en un proyecto demasiado específico.
- Añadir frameworks de UI pesados sin necesidad.
- Duplicar layouts por idioma si se puede resolver con traducciones.
- Usar rutas absolutas que fallen en GitHub Pages.
- Saltarse los JSON de traducción.
- Borrar tests smoke porque parezcan simples.
- Usar fuentes externas.
- Añadir JavaScript de cliente si no aporta valor real.
- Crear ficheros enormes con varias responsabilidades.
- Generar UI solo en un idioma.
- Ignorar este archivo por rapidez.
