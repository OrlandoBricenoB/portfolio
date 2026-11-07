const Note = ({ children, arrow = '↓', arrowAfter = false, className = '', ...rest }) => (
  <span className={`note ${className}`} {...rest}>
    {!arrowAfter && arrow && <span className='ar'>{arrow} </span>}
    {children}
    {arrowAfter && arrow && <span className='ar'> {arrow}</span>}
  </span>
)

export default Note
