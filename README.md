# Orlando Briceño — portfolio

Astro 5 + Tailwind CSS v4, with React islands for the interactive parts. Bilingual: English at `/`, Spanish under `/es`.

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm preview
pnpm check:i18n   # en/es keys match and every t('...') key exists
```

- Translations live in `src/i18n/locales/{en,es}.json`; use `useTranslations(lang)` from `src/i18n/utils.ts`.
- Pages in `src/pages` are thin wrappers around `src/views/*`, which take a `lang` prop.
- Interactive pieces are React islands in `src/components/islands`; scroll animations are in `src/scripts/site-motion.ts`.
