import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { useDeleteAllShoppingItemsMutation } from '~/store/api/shoppingCartApi'
import { Button } from '~/ui'

interface IShoppingCartDeleteProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name?: string
}

const ShoppingCartDelete: FC<IShoppingCartDeleteProps> = ({
  ...props
}): ReactElement => {
  const [deleteAllShoppinhItems] = useDeleteAllShoppingItemsMutation()

  const onDeleteClick = async () => {
    await deleteAllShoppinhItems()
      .unwrap()
      .then((response) => {
        return response.Name
      })
  }

  return (
    <Button onClick={onDeleteClick} variant="warning" {...props}>
      Удалить все товары из корзины
    </Button>
  )
}

export default ShoppingCartDelete
