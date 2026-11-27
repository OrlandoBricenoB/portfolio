import { useEffect, useState } from 'react'

// Typewriter that cycles through the translated discipline names
const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(words[0] || '')

  const key = words.join('|')

  useEffect(() => {
    setIndex(0)
    setText(words[0] || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    if (!words.length) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const target = words[index % words.length]
    let timer

    if (text === target) {
      // fully typed: hold, then move to the next word
      timer = setTimeout(() => setIndex(index + 1), 1700)
    } else if (target.startsWith(text)) {
      timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 70)
    } else {
      timer = setTimeout(() => setText(text.slice(0, -1)), 35)
    }

    return () => clearTimeout(timer)
  }, [text, index, key])

  return <span className='rot'>{text || '\u00A0'}</span>
}

export default RotatingWord
