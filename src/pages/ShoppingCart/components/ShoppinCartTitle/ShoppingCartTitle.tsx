import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { useAppSelector } from '~/store/store'
import { selectors } from '~/store/selectors'
import { useGetBusketSummaryQuery } from '~/store/api/shoppingCartApi'
import { Typography } from '~/ui'
import cn from 'classnames'
import styles from './ShoppingCartTitle.module.scss'

interface IShoppingCartTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const ShoppingCartTitle: FC<IShoppingCartTitleProps> = ({
  ...props
}): ReactElement => {
  const personName = useAppSelector(selectors.getUserName)
  const { data } = useGetBusketSummaryQuery()

  return (
    <div className={cn(styles.root)} {...props}>
      <Typography variant="t2">
        Здравствуйте {personName}, Ваши товары в корзине:
      </Typography>
      {data?.TotalProducts ? (
        <Typography variant="t2">{data.TotalProducts} шт.</Typography>
      ) : (
        ''
      )}
      {data?.Total ? (
        <Typography variant="t2">{data.Total} руб.</Typography>
      ) : (
        ''
      )}
      {data?.Discount ? (
        <Typography variant="t2">скидка {data.Discount} руб.</Typography>
      ) : (
        ''
      )}
    </div>
  )
}

export default ShoppingCartTitle
