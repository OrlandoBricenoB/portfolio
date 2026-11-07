const Polaroid = ({ children, rotate = 0, style, className = '', ...rest }) => (
  <div
    className={`polaroid ${className}`}
    style={{ '--r': `${rotate}deg`, ...style }}
    data-drop
    {...rest}
  >
    {children}
  </div>
)

export default Polaroid
