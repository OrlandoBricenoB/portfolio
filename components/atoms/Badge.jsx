import Text from "./texts/Text"
import styles from '../../styles/atoms/badge.module.css'

const Badge = ({
  children,
  style = {},
  Icon,
  withHover = false,
  ...rest
}) => {
  return (
    <div
      style={{ ...style, backgroundColor: style.backgroundColor || '#292C51' }}
      className={`${styles.badge} ${withHover && styles['badge--hover']}`}
      {...rest}
    >
      {Icon && <Icon />}
      <Text type='small_paragraph'>{children}</Text>
    </div>
  )
}

export default Badge
