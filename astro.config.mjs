// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import fs from 'node:fs';
import path from 'node:path';

const blogDirectory = path.resolve('src/content/blog');
const translations = new Map();
for (const filename of fs.readdirSync(blogDirectory).filter((name) => /\.mdx?$/.test(name))) {
  const slug = filename.replace(/\.mdx?$/, '');
  const frontmatter = fs.readFileSync(path.join(blogDirectory, filename), 'utf8').split('---', 3)[1] || '';
  const lang = frontmatter.match(/^lang:\s*["']?([^\s"']+)/m)?.[1];
  const translation = frontmatter.match(/^translation:\s*["']?([^\s"']+)/m)?.[1];
  const published = frontmatter.match(/^date:\s*["']?([^\s"']+)/m)?.[1];
  const updated = frontmatter.match(/^updated:\s*["']?([^\s"']+)/m)?.[1];
  if (lang) translations.set(slug, { lang, translation, lastmod: updated || published });
}

const staticTranslations = new Map([
  ['/commencer/', '/en/start-here/'],
  ['/sujets/', '/en/topics/'],
  ['/partenariats/', '/en/partnerships/'],
  ['/sujets/apple-et-outils/', '/en/topics/apple-and-tools/'],
  ['/sujets/auto-hebergement-et-infrastructure/', '/en/topics/self-hosting-and-infrastructure/'],
  ['/sujets/ia-appliquee/', '/en/topics/applied-ai/'],
  ['/sujets/vie-privee-et-securite/', '/en/topics/privacy-and-security/'],
  ['/sujets/developpement-et-architecture/', '/en/topics/development-and-architecture/'],
]);
const staticTranslationByPath = new Map();
for (const [frPath, enPath] of staticTranslations) {
  staticTranslationByPath.set(frPath, { frPath, enPath });
  staticTranslationByPath.set(enPath, { frPath, enPath });
}

const projectDirectory = path.resolve('src/content/projects');
const projectTranslations = new Map();
if (fs.existsSync(projectDirectory)) {
  for (const filename of fs.readdirSync(projectDirectory).filter((name) => /\.mdx?$/.test(name))) {
    const slug = filename.replace(/\.mdx?$/, '');
    const frontmatter = fs.readFileSync(path.join(projectDirectory, filename), 'utf8').split('---', 3)[1] || '';
    const lang = frontmatter.match(/^lang:\s*["']?([^\s"']+)/m)?.[1];
    const translation = frontmatter.match(/^translation:\s*["']?([^\s"']+)/m)?.[1];
    if (lang) projectTranslations.set(slug, { lang, translation });
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.digitaldream.work',
  build: { format: 'directory' },
  integrations: [
    mdx({
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { class: 'heading-anchor' },
        content: { type: 'text', value: '#' },
      }]],
    }),
    pagefind(),
    sitemap({
      filter: (page) => new URL(page).pathname !== '/random/',
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const staticPair = staticTranslationByPath.get(pathname);
        if (staticPair) {
          item.links = [
            { lang: 'fr-FR', url: `https://blog.digitaldream.work${staticPair.frPath}` },
            { lang: 'en-US', url: `https://blog.digitaldream.work${staticPair.enPath}` },
            { lang: 'x-default', url: `https://blog.digitaldream.work${staticPair.frPath}` },
          ];
          return item;
        }
        const projectMatch = pathname.match(/^\/(?:en\/)?projects\/([^/]+)\/?$/);
        const projectEntry = projectMatch ? projectTranslations.get(projectMatch[1]) : undefined;
        if (projectEntry?.translation) {
          const counterpart = projectTranslations.get(projectEntry.translation);
          if (counterpart) {
            const urls = {
              [projectEntry.lang]: item.url,
              [counterpart.lang]: `https://blog.digitaldream.work/${counterpart.lang === 'en' ? 'en/' : ''}projects/${projectEntry.translation}/`,
            };
            item.links = [
              { lang: 'fr-FR', url: urls.fr },
              { lang: 'en-US', url: urls.en },
              { lang: 'x-default', url: urls.fr },
            ];
            return item;
          }
        }
        const match = pathname.match(/^\/blog\/([^/]+)\/?$/);
        const entry = match ? translations.get(match[1]) : undefined;
        if (entry?.lastmod) item.lastmod = new Date(entry.lastmod);
        if (!entry) return item;
        if (!entry.translation) return item;
        const counterpart = translations.get(entry.translation);
        if (!counterpart) return item;
        const urls = {
          [entry.lang]: item.url,
          [counterpart.lang]: `https://blog.digitaldream.work/blog/${entry.translation}/`,
        };
        item.links = [
          { lang: 'fr-FR', url: urls.fr },
          { lang: 'en-US', url: urls.en },
          { lang: 'x-default', url: urls.fr },
        ];
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});
