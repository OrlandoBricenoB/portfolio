const EmptyStar = ({ size = '24', color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill={color} />
    </svg>
  )
}

const HalfStar = ({ size = '24', color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.125V15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill={color} />
    </svg>
  )
}

const FilledStar = ({ size = '24', color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill={color} />
    </svg>
  )
}

const Star = ({ type = 'empty', size, color = '#FFFFFF' }) => {
  const stars = {
    'empty': EmptyStar,
    'half': HalfStar,
    'filled': FilledStar
  }

  const StarComponent = stars[type] || EmptyStar
  return <StarComponent color={color} size={size} />
}

export default Star
