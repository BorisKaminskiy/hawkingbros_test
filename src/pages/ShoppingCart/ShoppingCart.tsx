import { FC, ReactElement } from 'react'
import {
  ShoppingCartTitle,
  ShoppingCartDiscount,
  ShoppingCartDelete,
  ShoppingCartItemsContainer,
} from './components'
import cn from 'classnames'
import styles from './ShoppingCart.module.scss'

const ShoppingCart: FC = ({ ...props }): ReactElement => {
  return (
    <div className={cn(styles.root)} {...props}>
      <div className={cn(styles.controls)}>
        <ShoppingCartTitle />
        <ShoppingCartDiscount />
        <ShoppingCartDelete />
      </div>
      <ShoppingCartItemsContainer />
    </div>
  )
}

export default ShoppingCart
