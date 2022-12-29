import Text from "./texts/Text"
import styles from '../../styles/atoms/badge.module.css'

const Badge = ({
  children,
  style = {},
  Icon = null,
  paragraphType = 'small_paragraph',
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
      <Text type={paragraphType} style={{ margin: 0, marginLeft: Icon ? '.25rem' : '0' }}>{children}</Text>
    </div>
  )
}

export default Badge
