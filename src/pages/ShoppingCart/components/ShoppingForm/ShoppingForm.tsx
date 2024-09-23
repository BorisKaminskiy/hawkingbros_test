import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  useState,
} from 'react'
import { useAppSelector, useAppDispatch } from '~/store/store'
import {
  useChangeQuantityMutation,
  useDeleteShoppingItemMutation,
} from '~/store/api/shoppingCartApi'
import { setShoppingForm } from '~/store/slices/shoppingForm'
import { selectors } from '~/store/selectors'
import { CloseIcon } from '~/assets/icons'
import { Counter } from '~/components'
import { imageConverter } from '~/utils/imageConverter'
import cn from 'classnames'
import styles from './ShoppingForm.module.scss'
import { Button, Typography } from '~/ui'

interface IShoppingFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isModal?: boolean
  onModalClose?: () => void
}

const ShoppingForm: FC<IShoppingFormProps> = ({
  isModal,
  onModalClose,
  ...props
}): ReactElement => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectors.getShoppingForm)
  const userId = useAppSelector(selectors.getUserId)
  const [changeQuantity] = useChangeQuantityMutation()
  const [deleteShoppingItem] = useDeleteShoppingItemMutation()
  const [value, setValue] = useState<number>(data?.Quantity || 0)

  const onSaveChangeClick = async () => {
    if (data?.Id && value !== data.Quantity && value > 0) {
      await changeQuantity({
        ProductId: data?.Id,
        UserGuid: userId,
        Value: value,
      })
        .unwrap()
        .then((response) => response.Name)
        .then((data) => data === 'Success' && onClose())
    }
  }

  const onDeleteClick = async () => {
    if (data?.Id) {
      await deleteShoppingItem({
        ProductId: data?.Id,
        UserGuid: userId,
      })
        .unwrap()
        .then((response) => {
          return response.Name
        })
        .then((data) => data === 'Success' && onClose())
    }
  }

  const onClose = () => {
    dispatch(setShoppingForm(null))
    if (onModalClose) {
      onModalClose()
    }
  }

  const onQuantityChange = (value: number) => {
    setValue(value)
  }

  return (
    <div className={cn(styles.root)} {...props}>
      {isModal && (
        <button onClick={onClose} className={cn(styles.close)}>
          <CloseIcon />
        </button>
      )}
      <div className={cn(styles.info)}>
        {data && <Typography variant="t2">{data.Name}</Typography>}
        {data && <Typography variant="t2">{data.Description}</Typography>}
        {data && (
          <Typography variant="t2">
            Цена: {data.DiscountedPrice ? data.DiscountedPrice : data.Price}{' '}
            руб.
          </Typography>
        )}
        {data && data.Images && (
          <div className={cn(styles.info_images)}>
            {data.Images.map((item, index) => (
              <img
                src={imageConverter(item.Image)}
                alt={item.FileName}
                key={index}
              />
            ))}
          </div>
        )}
      </div>

      <Counter val={value} onValueChange={onQuantityChange} />
      <div className={cn(styles.buttons)}>
        <Button onClick={onSaveChangeClick} variant="primary">
          Сохранить изменения
        </Button>
        <Button onClick={onDeleteClick} variant="warning">
          Удалить товар из корзины
        </Button>
      </div>
    </div>
  )
}

export default ShoppingForm
