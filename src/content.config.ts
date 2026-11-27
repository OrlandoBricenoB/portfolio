import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Posts live in src/content/blog/<lang>/<slug>.md. The slug is the filename.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Slug of the same post in the other language, for hreflang.
    translation: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
