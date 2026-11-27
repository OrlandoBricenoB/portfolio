import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getPosts, postSlug } from '../i18n/blog'
import { localizePath, useTranslations } from '../i18n/utils'

export async function GET(context: APIContext) {
  const t = useTranslations('en')
  const posts = await getPosts('en')
  return rss({
    title: 'Orlando Briceño',
    description: t('blog--meta-description'),
    site: context.site!,
    customData: '<language>en</language>',
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: localizePath(`/blog/${postSlug(post)}`, 'en'),
    })),
  })
}
