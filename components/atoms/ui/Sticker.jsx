const Sticker = ({ children, variant = '', rotate = 0, abs = false, style, className = '', ...rest }) => (
  <span
    className={`sticker ${variant ? 'sticker--' + variant : ''} ${abs ? 'sticker--abs' : ''} ${className}`}
    style={{ '--r': `${rotate}deg`, ...style }}
    data-pop
    {...rest}
  >
    {children}
  </span>
)

export default Sticker
