import { useEffect, useState } from 'react'
import Star from '../../atoms/icons/Star'
import styles from '../../../styles/atoms/rating/rateStar.module.css'

const RateStar = ({
  size,
  color = '#21c2e1',
  state: fixedState = '',
  keepColor = false,
  onClick,
  ...rest
}) => {
  const [state, setState] = useState('empty')

  useEffect(() => {
    if (fixedState) setState(fixedState)
  }, [fixedState])

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setState(prev => {
        console.log({ prev })
        return prev !== 'filled' ? 'filled' : 'empty'
      })
    }
  }

  const getColor = () => {
    if (keepColor) return color
    return state === 'filled' ? '#E1B721' : color
  }

  return (
    <div
      className={styles.rate_star}
      onClick={handleClick}
      style={{ display: 'inline-flex', height: '100%', cursor: 'pointer' }}
      {...rest}
    >
      <Star
        type={state}
        size={size}
        color={getColor()}
      />
    </div>
  )
}

export default RateStar