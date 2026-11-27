import { useEffect, useState } from 'react'
import Email from '../icons/Email.jsx'
import RichText from './RichText.jsx'

const PATH = {
  low: { price: 200, from: 225 },
  mid: { price: 328, from: 365 },
  vip: { price: 450, from: 500 },
}

const money = amount => `$${amount}`

const tierBase = 'w-full cursor-pointer rounded-[22px] border p-[1rem_1.05rem_1.15rem] text-left font-[inherit] text-inherit transition duration-200 hover:-translate-y-[3px]'

// Tier picker + price card. Copy and the per-tier mailto links arrive pre-built from the page.
const CoursesTierPicker = ({ tiers, mails, labels }) => {
  const [tier, setTier] = useState('mid')
  const offer = PATH[tier]
  const saved = offer.from - offer.price

  // The hero and final CTAs live outside this island: keep their mailto in sync with the tier.
  useEffect(() => {
    document.querySelectorAll('[data-reserve]').forEach(node => {
      node.setAttribute('href', mails[tier])
    })
  }, [tier, mails])

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-[.85rem] max-nav:grid-cols-1">
        {tiers.map(({ id, name, desc }) => (
          <button
            key={id}
            type="button"
            aria-pressed={tier === id}
            className={`${tierBase} ${tier === id ? 'border-white bg-blue-700' : 'border-white/10 bg-white/6 hover:border-blue-400'}`}
            onClick={() => setTier(id)}
          >
            <p className="mt-1.5 mb-[0.2rem] text-2xl leading-[1.3] font-black tracking-[-0.03em]">{name}</p>
            <p className="mt-[0.15rem] mb-[0.55rem] text-[2rem] leading-none font-black tracking-[-0.03em]">{money(PATH[id].price)}</p>
            <p className="m-0 text-white/62">
              {labels.from} <s className="text-white/85">{money(PATH[id].from)}</s>
            </p>
            <p className="m-0 leading-[1.45] text-white/76">{desc}</p>
          </button>
        ))}
      </div>

      <article className="mt-5 grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center gap-8 rounded-[22px] border border-transparent bg-blue-700 bg-[radial-gradient(500px_240px_at_100%_0%,rgba(255,255,255,0.18),transparent_60%)] p-[1.4rem_1.4rem_1.5rem] shadow-[0_30px_60px_rgba(0,81,255,0.3)] max-nav:grid-cols-1">
        <div>
          <p className="mb-2 inline-block -rotate-2 font-hand text-[24px] text-white/90 before:content-['→_']">{labels.fullLabel}</p>
          <h3 className="mt-1.5 mb-[0.45rem] text-xl leading-tight font-bold tracking-[-0.015em]">
            <RichText>{labels.title}</RichText>
          </h3>
          <p className="m-0 leading-[1.45] text-white/90">{labels.fullNote}</p>
        </div>
        <div>
          <p className="my-[0.2rem] text-[clamp(3rem,6vw,4.25rem)] leading-none font-black tracking-[-0.03em]">{money(offer.price)}</p>
          <p className="m-0 text-white/90">
            {labels.from} <s>{money(offer.from)}</s>
          </p>
          <span className="mt-[0.85rem] inline-block rounded-full bg-white px-[0.6rem] py-1 text-[0.85rem] font-bold text-blue-700">
            {labels.save} {money(saved)}
          </span>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="pill-link pill-link--white" href={mails[tier]} data-reserve>
              <Email size="24" color="#0051ff" />
              {labels.cta}
            </a>
          </div>
        </div>
      </article>
    </>
  )
}

export default CoursesTierPicker
