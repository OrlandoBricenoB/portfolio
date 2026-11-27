// Renders the blog cover illustrations (SVG) to src/assets/blog/<slug>.webp at 1200x630.
import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

const frame = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <radialGradient id="g" cx="85%" cy="-10%" r="75%"><stop offset="0" stop-color="#0051ff" stop-opacity=".55"/><stop offset="1" stop-color="#0051ff" stop-opacity="0"/></radialGradient>
  <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#83c4ff"/><stop offset="1" stop-color="#0662ff"/></linearGradient>
</defs>
<rect width="1200" height="630" fill="#050528"/><rect width="1200" height="630" fill="url(#g)"/>
<g stroke="#83c4ff" stroke-opacity=".08">${Array.from({ length: 13 }, (_, i) => `<path d="M${i * 100} 0V630"/>`).join('')}${Array.from({ length: 7 }, (_, i) => `<path d="M0 ${i * 105}H1200"/>`).join('')}</g>
${inner}</svg>`

const covers = {
  // Concentric circles: TAM > SAM > SOM
  'market-validation': `
    <circle cx="600" cy="330" r="250" fill="#0051ff" fill-opacity=".18" stroke="#83c4ff" stroke-width="3"/>
    <circle cx="600" cy="400" r="160" fill="#0662ff" fill-opacity=".35" stroke="#83c4ff" stroke-width="3"/>
    <circle cx="600" cy="465" r="75" fill="#ffd34d" stroke="#fff" stroke-width="3"/>
    <g font-family="Arial,sans-serif" font-weight="800" font-size="34" fill="#fff" text-anchor="middle">
      <text x="600" y="150">TAM</text><text x="600" y="290">SAM</text><text x="600" y="476" fill="#050528">SOM</text></g>`,
  // Rising MRR bars with trend line
  'saas-metrics': `
    ${[90, 130, 170, 230, 290, 370, 460].map((h, i) => `<rect x="${230 + i * 100}" y="${540 - h}" width="64" height="${h}" rx="10" fill="url(#b)"/>`).join('')}
    <path d="M262 440 L362 400 L462 360 L562 300 L662 240 L762 160 L862 90" fill="none" stroke="#ffd34d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="862" cy="90" r="13" fill="#ffd34d"/>
    <text x="230" y="590" font-family="Arial,sans-serif" font-weight="800" font-size="30" fill="#83c4ff">MRR · ARR · NRR</text>`,
  // Runway: cash line falling toward zero with a plane-like marker
  'startup-finance': `
    <path d="M150 520H1050M150 520V90" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none"/>
    <path d="M150 140 C400 150 700 300 930 520" fill="none" stroke="#83c4ff" stroke-width="8" stroke-linecap="round"/>
    <path d="M150 140 C400 150 700 300 930 520 V520 H150Z" fill="#0662ff" fill-opacity=".25"/>
    <circle cx="930" cy="520" r="16" fill="#ffd34d"/>
    <path d="M930 520V90" stroke="#ffd34d" stroke-width="3" stroke-dasharray="10 10"/>
    <g font-family="Arial,sans-serif" font-weight="800" fill="#fff"><text x="150" y="590" font-size="30" fill="#83c4ff">CASH</text><text x="760" y="80" font-size="40" fill="#ffd34d">RUNWAY</text></g>`,
  // Three paths up: bootstrapped, studio, VC
  'funding-models': `
    <g fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M170 520 C350 500 550 430 1030 380" stroke="#83c4ff"/>
      <path d="M170 520 C320 480 450 330 1030 230" stroke="#0662ff"/>
      <path d="M170 520 C250 470 330 250 1030 90" stroke="#ffd34d"/></g>
    <circle cx="170" cy="520" r="18" fill="#fff"/>
    <g font-family="Arial,sans-serif" font-weight="800" font-size="30"><text x="1048" y="392" font-size="26" fill="#83c4ff">Bootstrap</text><text x="1048" y="242" font-size="26" fill="#5aa0ff">Studio</text><text x="1048" y="102" font-size="26" fill="#ffd34d">VC</text></g>`,
  // Cap table pie + document
  'cap-table-and-term-sheets': `
    <circle cx="420" cy="315" r="200" fill="#0662ff"/>
    <path d="M420 315 L420 115 A200 200 0 0 1 593 415Z" fill="#ffd34d"/>
    <path d="M420 315 L593 415 A200 200 0 0 1 345 508Z" fill="#83c4ff"/>
    <circle cx="420" cy="315" r="70" fill="#050528"/>
    <rect x="720" y="120" width="320" height="400" rx="22" fill="#fff"/>
    <g fill="#050528" fill-opacity=".85"><rect x="755" y="165" width="170" height="20" rx="8"/><rect x="755" y="215" width="250" height="12" rx="6" fill-opacity=".25"/><rect x="755" y="245" width="230" height="12" rx="6" fill-opacity=".25"/><rect x="755" y="275" width="250" height="12" rx="6" fill-opacity=".25"/></g>
    <path d="M760 440 C800 380 820 480 860 430 S930 420 960 440" fill="none" stroke="#0051ff" stroke-width="5" stroke-linecap="round"/>`,
}

for (const [slug, inner] of Object.entries(covers)) {
  await sharp(Buffer.from(frame(inner))).webp({ quality: 88 }).toFile(`src/assets/blog/${slug}.webp`)
  console.log('wrote', slug)
}
