import { FC, ReactElement, memo } from 'react'
import { Typography } from '~/ui'
import cn from 'classnames'
import styles from './ShoppingCartHeader.module.scss'

const headerItems = [
  'Наименование товара',
  'Кол-во',
  'Ед. изм.',
  'Цена',
  'Сумма',
  'Валюта',
]

const ShoppingCartHeader: FC = memo(({ ...props }): ReactElement => {
  return (
    <div className={cn(styles.root)} {...props}>
      {headerItems.map((item) => (
        <div className={cn(styles.item)} key={item}>
          <Typography variant="t3">{item}</Typography>
        </div>
      ))}
    </div>
  )
})

export default ShoppingCartHeader
