import type { APIContext } from 'astro';
import { buildBlogFeed } from '../../lib/blog-feed';

export async function GET(context: APIContext) {
  return buildBlogFeed(context, 'en');
}
