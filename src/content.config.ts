import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    cover: z.string().optional(),
    lang: z.enum(['fr', 'en']).default('fr'),
    translation: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    lang: z.enum(['fr', 'en']).default('fr'),
  }),
});

export const collections = { blog, projects };
