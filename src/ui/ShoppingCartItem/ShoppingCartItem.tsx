import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { IShortValues, IShoppingCartImage } from '~/types/shoppingCart'
import { imageConverter } from '~/utils/imageConverter'
import cn from 'classnames'
import styles from './ShoppingCartItem.module.scss'

export interface IShoppingCartItemProps
  extends IShortValues,
    DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  image: IShoppingCartImage
  onCardClick: () => void
}

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({
  Name,
  Quantity,
  Unit,
  Price,
  DiscountedPrice,
  image,
  onCardClick,
}): ReactElement => {
  const img = image && image.Image ? imageConverter(image.Image) : undefined
  const summ = DiscountedPrice
    ? (Number(DiscountedPrice) * Number(Quantity)).toFixed(2)
    : (Number(Price) * Number(Quantity)).toFixed(2)

  return (
    <li className={cn(styles.root)} onClick={onCardClick}>
      <div className={cn(styles.name)}>
        {img ? (
          <div>
            <img width={'40px'} src={img} alt={image.FileName} />
          </div>
        ) : (
          <span></span>
        )}
        <span>{Name}</span>
      </div>
      <div className={cn(styles.quantity)}>{Quantity}</div>
      <div className={cn(styles.quantity)}>{Unit}</div>
      <div className={cn(styles.quantity)}>
        {DiscountedPrice ? DiscountedPrice : Price}
      </div>
      <div className={cn(styles.quantity)}>{summ}</div>
      <div className={cn(styles.quantity)}>руб.</div>
    </li>
  )
}

export default ShoppingCartItem
