import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  useState,
} from 'react'
import { useAppSelector } from '~/store/store'
import { selectors } from '~/store/selectors'
import { useSetDiscountMutation } from '~/store/api/shoppingCartApi'
import { useDeleteDiscountMutation } from '~/store/api/shoppingCartApi'
import { Button, Spiner } from '~/ui'

interface IShoppongCartDiscountProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name?: string
}

const ShoppingCartDiscount: FC<IShoppongCartDiscountProps> = ({
  ...props
}): ReactElement => {
  const userId = useAppSelector(selectors.getUserId)
  const secretDiscountString = 'hawkingbros'
  const [setDiscount, { isLoading: isDiscountLoading }] =
    useSetDiscountMutation()
  const [deleteDiscount, { isLoading: isDeleteDiscountLoading }] =
    useDeleteDiscountMutation()
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false)

  const onDiscountSetClick = async () => {
    await setDiscount({
      DiscountName: secretDiscountString,
      UsedGuid: userId,
    })
      .unwrap()
      .then((response) => {
        return response.Name
      })
  }

  const onDiscountDeleteClick = async () => {
    await deleteDiscount()
      .unwrap()
      .then((response) => {
        return response.Name
      })
  }

  const onButtonClick = async () => {
    if (isDiscounted) {
      await onDiscountDeleteClick()
      setIsDiscounted(false)
    } else {
      await onDiscountSetClick()
      setIsDiscounted(true)
    }
  }

  return (
    <>
      {(isDiscountLoading || isDeleteDiscountLoading) && <Spiner />}
      <Button onClick={onButtonClick} variant="primary" {...props}>
        {isDiscounted ? 'Отменить скидку' : 'Применить скидку'}
      </Button>
    </>
  )
}

export default ShoppingCartDiscount
