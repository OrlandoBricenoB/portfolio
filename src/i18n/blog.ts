import { getCollection, type CollectionEntry } from 'astro:content'
import type { Lang } from './config'

export type Post = CollectionEntry<'blog'>

export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/')

export const getPosts = async (lang: Lang): Promise<Post[]> =>
  (await getCollection('blog', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

export const readingMinutes = (body = '') =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220))

export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang === 'es' ? 'es' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
