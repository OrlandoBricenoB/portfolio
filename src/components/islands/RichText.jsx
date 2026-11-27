import { Fragment } from 'react'

/*
  Renders a translated string and turns <hl>word</hl> into a highlighted chip.
  Strings without tags are returned untouched.
*/
const RichText = ({ children, variant = '' }) => {
  if (typeof children !== 'string' || !children.includes('<hl>')) return <>{children}</>

  const parts = children.split(/(<hl>.*?<\/hl>)/g).filter(Boolean)

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^<hl>(.*?)<\/hl>$/)
        if (!match) return <Fragment key={index}>{part}</Fragment>
        return (
          <span key={index} className={`hl hl--wipe ${variant}`} data-hl>
            {match[1]}
          </span>
        )
      })}
    </>
  )
}

export default RichText
