import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import type { APIContext } from 'astro';

export async function buildBlogFeed(context: APIContext, lang: 'fr' | 'en') {
  const blog = await getCollection('blog', ({ data }: any) => !data.draft && data.lang === lang);
  const isEnglish = lang === 'en';
  const items = blog
    .sort((a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post: any) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      content: marked.parse(post.body ?? '') as string,
      categories: post.data.tags ?? (post.data.category ? [post.data.category] : []),
      link: `/blog/${post.id}/`,
    }));

  return rss({
    title: isEnglish ? 'DigitalDream · The notebook' : 'DigitalDream · Le carnet',
    description: isEnglish
      ? 'Field notes on code, self-hosting, open source and maker culture.'
      : "Notes de terrain sur le code, l'auto-hébergement, l'open source et la culture maker.",
    site: context.site!,
    items,
    customData: `<language>${isEnglish ? 'en-US' : 'fr-FR'}</language><copyright>© ${new Date().getFullYear()} DigitalDream</copyright>`,
    stylesheet: '/rss-style.xsl',
  });
}
