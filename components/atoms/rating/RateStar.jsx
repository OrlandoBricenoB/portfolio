import { useState } from 'react'
import Star from '../../atoms/icons/Star'
import styles from '../../../styles/atoms/rating/rateStar.module.css'

const RateStar = ({ size, color = '#21c2e1', onClick }) => {
  const [state, setState] = useState('empty')

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

  return (
    <div
      className={styles.rate_star}
      onClick={handleClick}
      style={{ display: 'inline-flex', height: '100%', cursor: 'pointer' }}
    >
      <Star
        type={state}
        size={size}
        color={state === 'filled' ? '#E1B721' : color}
      />
    </div>
  )
}

export default RateStar