import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const load = lang => JSON.parse(readFileSync(`src/i18n/locales/${lang}.json`, 'utf8'))
const en = load('en')
const es = load('es')
let failed = false
const fail = msg => { failed = true; console.error(msg) }

for (const key of Object.keys(en)) if (!(key in es)) fail(`missing in es: ${key}`)
for (const key of Object.keys(es)) if (!(key in en)) fail(`missing in en: ${key}`)

const walk = dir => readdirSync(dir).flatMap(name => {
  const path = join(dir, name)
  if (name.endsWith('-old')) return []
  return statSync(path).isDirectory() ? walk(path) : [path]
})

for (const file of walk('src').filter(f => /\.(astro|jsx|tsx|ts)$/.test(f))) {
  const text = readFileSync(file, 'utf8')
  for (const [, key] of text.matchAll(/\bt\(\s*['"]([\w-]+)['"]\s*\)/g)) {
    if (!(key in en)) fail(`${file}: unknown key ${key}`)
  }
}

if (failed) process.exit(1)
console.log('i18n OK')
