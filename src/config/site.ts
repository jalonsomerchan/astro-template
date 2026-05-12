export const siteConfig = {
  name: 'Astro Template',
  description: 'Plantilla base para crear proyectos con Astro.',
  url: import.meta.env.ASTRO_SITE ?? 'https://jalonsomerchan.github.io',
  base: import.meta.env.ASTRO_BASE ?? '/',
  author: 'Jorge Alonso',
  locale: 'es_ES',
  lang: 'es',
};

export type SiteConfig = typeof siteConfig;
