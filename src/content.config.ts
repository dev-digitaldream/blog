import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    updateNote: z.string().optional(),
    draft: z.boolean().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    cover: z.string().optional(),
    sticker: z.enum(['best-of-the-best', 'none']).optional(),
    stickerRotation: z.number().min(-180).max(180).optional(),
    stickerScale: z.number().min(0.5).max(1.5).optional(),
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
    cover: z.string().optional(),
    sticker: z.enum(['best-of-the-best', 'none']).optional(),
    stickerRotation: z.number().min(-180).max(180).optional(),
    stickerScale: z.number().min(0.5).max(1.5).optional(),
    translation: z.string().optional(),
    applicationCategory: z.string().optional(),
    operatingSystem: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    lang: z.enum(['fr', 'en']).default('fr'),
  }),
});

export const collections = { blog, projects };
