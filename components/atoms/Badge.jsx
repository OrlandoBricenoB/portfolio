import Text from "./texts/Text"
import styles from '../../styles/atoms/badge.module.css'

const Badge = ({
  children,
  style = {},
  Icon = null,
  withHover = false,
  ...rest
}) => {
  return (
    <div
      style={{ ...style, backgroundColor: style.backgroundColor || '#292C51' }}
      className={`${styles.badge} ${withHover && styles['badge--hover']}`}
      {...rest}
    >
      {Icon}
      <Text type='small_paragraph' style={{ margin: 0 }}>{children}</Text>
    </div>
  )
}

export default Badge
