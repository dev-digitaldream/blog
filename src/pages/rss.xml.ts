import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }: any) => !data.draft);

  return rss({
    title: 'DigitalDream — Blog',
    description:
      "Notes de terrain sur le code, l'auto-hébergement, l'open-source et la culture maker.",
    site: context.site!,
    items: blog
      .sort((a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post: any) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        categories: post.data.tags ?? (post.data.category ? [post.data.category] : []),
        link: `/blog/${post.id}/`,
        customData: post.data.lang ? `<language>${post.data.lang}</language>` : '',
      })),
    customData: `<language>fr-FR</language><copyright>© ${new Date().getFullYear()} DigitalDream</copyright>`,
    stylesheet: '/rss-style.xsl',
  });
}
