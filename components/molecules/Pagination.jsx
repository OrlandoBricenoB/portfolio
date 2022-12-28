import classNames from 'classnames'
import ChevronLeft from '../atoms/icons/ChevronLeft'
import ChevronRight from '../atoms/icons/ChevronRight'

const Pagination = ({ disabledLeft, disabledRight }) => {
  return (
    <div className={classNames('pagination')}>
      <div className={classNames('pagination__arrow', { 'pagination__arrow--disabled': disabledLeft })}>
        <ChevronLeft color='#21c2e1' />
      </div>
      <div className={classNames('pagination__arrow', { 'pagination__arrow--disabled': disabledRight })}>
        <ChevronRight color='#21c2e1' />
      </div>
    </div>
  )
}

export default Pagination
