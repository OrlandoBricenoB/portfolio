const Upload = ({ size = '24', color = '#8E92C2' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M58.6666 106.667H34.6666C26.5778 106.667 19.6675 103.867 13.936 98.2668C8.20087 92.6668 5.33331 85.8224 5.33331 77.7335C5.33331 70.8002 7.4222 64.6224 11.6 59.2002C15.7778 53.7779 21.2444 50.3113 28 48.8002C30.2222 40.6224 34.6666 34.0002 41.3333 28.9335C48 23.8668 55.5555 21.3335 64 21.3335C74.4 21.3335 83.2213 24.9548 90.464 32.1975C97.7102 39.4437 101.333 48.2668 101.333 58.6668C107.467 59.3779 112.556 62.0215 116.603 66.5975C120.645 71.1771 122.667 76.5335 122.667 82.6668C122.667 89.3335 120.334 95.0011 115.669 99.6695C111.001 104.334 105.333 106.667 98.6666 106.667H69.3333V68.5335L77.8667 76.8002L85.3333 69.3335L64 48.0002L42.6666 69.3335L50.1333 76.8002L58.6666 68.5335V106.667Z" fill={color}/>
    </svg>
  )
}

export default Upload
