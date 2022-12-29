import classNames from "classnames"
import Text from "../atoms/texts/Text"
import Multirating from "../molecules/rating/Multirating"
import Image from 'next/image'

const Recommendation = ({
  image,
  name,
  message,
  stars = 1
}) => {
  return (
    <div className={classNames('recommendation')}>
      <figure style={{ margin: 0, width: '128px' }}>
        <Image
          src={image}
          width={128}
          height={128}
          className={classNames('recommendation__image')}
          alt={false}
        />
      </figure>
      <div className={classNames('recommendation__content')}>
        <Text type='big_paragraph' style={{ margin: '0 0 0.25rem 0' }}>{name}</Text>
        <Multirating filled={stars} hoverLess  />
        <Text type='paragraph' style={{ margin: '1rem 0 0 0' }}>
          {message}
        </Text>
      </div>
    </div>
  )
}

export default Recommendation
