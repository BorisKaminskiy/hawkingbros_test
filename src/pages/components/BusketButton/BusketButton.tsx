import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  memo,
} from 'react'
import { useGetBusketSummaryQuery } from '~/store/api/shoppingCartApi'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import { ShopIcon } from '~/assets/icons'
import { ButtonSpiner, Typography } from '~/ui'
import cn from 'classnames'
import styles from './BusketButton.module.scss'

interface IBusketButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name?: string
}

const BusketButton: FC<IBusketButtonProps> = memo(
  ({ ...props }): ReactElement => {
    const { data } = useGetBusketSummaryQuery()
    const navigate = useNavigate()
    const location = useLocation()
    const onClick = () => {
      navigate('/shoppingcart')
    }

    return (
      <div className={cn(styles.container)}>
        {data ? (
          <div className={cn(styles.button_container)}>
            <div className={cn(styles.quantity)}>
              <Typography variant="t0">{data.TotalProducts}</Typography>
            </div>
            <button
              onClick={onClick}
              className={cn(
                styles.button,
                location.pathname === '/shoppingcart' && styles.button_active,
              )}
              {...props}
            >
              <ShopIcon />
            </button>
          </div>
        ) : (
          <ButtonSpiner />
        )}
      </div>
    )
  },
)

export default BusketButton
