import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { marked } from 'marked';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }: any) => !data.draft);

  const items = await Promise.all(
    blog
      .sort((a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(async (post: any) => {
        const body = post.body ?? '';
        const content = marked.parse(body);
        return {
          title: post.data.title,
          pubDate: post.data.date,
          description: post.data.description,
          content: content as string,
          categories: post.data.tags ?? (post.data.category ? [post.data.category] : []),
          link: `/blog/${post.id}/`,
          customData: post.data.lang ? `<language>${post.data.lang}</language>` : '',
        };
      })
  );

  return rss({
    title: 'DigitalDream · Blog',
    description:
      "Notes de terrain sur le code, l'auto-hébergement, l'open-source et la culture maker.",
    site: context.site!,
    items,
    customData: `<language>fr-FR</language><copyright>© ${new Date().getFullYear()} DigitalDream</copyright>`,
    stylesheet: '/rss-style.xsl',
  });
}