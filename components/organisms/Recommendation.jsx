import classNames from "classnames"
import Text from "../atoms/texts/Text"
import Multirating from "../molecules/rating/Multirating"

const Recommendation = ({
  image,
  name,
  message,
  stars = 1
}) => {
  return (
    <div className={classNames('recommendation')}>
      <figure style={{ margin: 0, width: '128px' }}>
        <img src={image} className={classNames('recommendation__image')} />
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
