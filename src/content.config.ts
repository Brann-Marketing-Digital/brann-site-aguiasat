import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      readingTime: z.number().int().positive(),
      image: image().optional(),
      imageAlt: z.string().default(''),
      tags: z.array(z.string()).default([]),
      /** Slug antigo do post, usado para gerar os redirecionamentos. */
      legacySlug: z.string().optional(),
    }),
});

export const collections = { blog };
