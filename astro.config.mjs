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
  if (lang && translation) translations.set(slug, { lang, translation });
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
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      serialize(item) {
        const match = new URL(item.url).pathname.match(/^\/blog\/([^/]+)\/?$/);
        const entry = match ? translations.get(match[1]) : undefined;
        if (!entry) return item;
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
