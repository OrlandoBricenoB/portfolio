const StackOverflow = ({ size = '32', color = '#FFFFFF' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.86 20.2V14.82H19.65V22H3.5V14.82H5.3V20.2H17.86ZM7.27 14.32L7.64 12.56L16.43 14.41L16.06 16.17L7.27 14.32ZM8.43 10.11L9.19 8.5L17.33 12.28L16.57 13.9L8.43 10.11ZM10.69 6.12L11.84 4.74L18.74 10.5L17.59 11.87L10.69 6.12ZM15.14 1.87L20.5 9.08L19.06 10.15L13.7 2.94L15.14 1.87ZM7.09 18.41V16.61H16.07V18.41H7.09Z" fill={color} />
    </svg>
  )
}

export default StackOverflow
