import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { useShoppingCartNormalizeData } from '~/hooks/useShoppingCartNormalizeData'
import { useAppDispatch } from '~/store/store'
import { setModal } from '~/store/slices/modal'
import { setShoppingForm } from '~/store/slices/shoppingForm'
import { ShoppingCartItem, Spiner, ShoppingCartHeader } from '~/ui'
import cn from 'classnames'
import styles from './ShoppingCartItemsContainer.module.scss'

interface IShoppingCartItemsContainerProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  name?: string
}

const ShoppingCartItemsContainer: FC<IShoppingCartItemsContainerProps> = ({
  ...props
}): ReactElement => {
  const { values, isFetching } = useShoppingCartNormalizeData()
  const dispatch = useAppDispatch()
  const onShoppingCartItemClick = (id: number) => () => {
    if (values.fullValues) {
      dispatch(setShoppingForm(values.fullValues[String(id)]))
      dispatch(setModal('shoppingForm'))
    }
  }

  return (
    <ul className={cn(styles.root)} {...props}>
      {isFetching && isFetching && <Spiner />}
      <ShoppingCartHeader />
      {values.shortValues &&
        values.shortValues.map((item) => (
          <ShoppingCartItem
            {...item}
            onCardClick={onShoppingCartItemClick(item.iiD)}
            key={item.iiD}
          />
        ))}
    </ul>
  )
}

export default ShoppingCartItemsContainer
