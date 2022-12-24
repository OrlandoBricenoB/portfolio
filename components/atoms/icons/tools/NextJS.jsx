const NextJS = ({ size = '32', color = '#ffffff' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_66_199)">
        <path d="M24.1499 2.71925C13.5662 -3.50381 0.117798 4.09688 0.000735945 16.3676C-0.113514 28.3499 12.5672 36.0892 23.127 30.8153L11.5975 13.8523V24.3521C11.5975 25.5154 9.3713 25.5154 9.3713 24.3521V10.2763C9.3713 9.35282 11.0868 9.27701 11.5729 10.0798L24.7144 29.9108C34.5862 23.5522 34.4529 8.77725 24.1499 2.71925ZM22.6652 22.5904L20.4319 19.1794V9.84113C20.4319 8.97038 22.6651 8.97038 22.6651 9.84113V22.5904H22.6652Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_66_199">
          <rect width={size} height={size} fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default NextJS
