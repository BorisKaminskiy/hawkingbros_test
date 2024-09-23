import { useState, useEffect } from 'react'
import { useGetShoppingCartQuery } from '~/store/api/shoppingCartApi'
import { IShoppingCart, IShortValues } from '~/types/shoppingCart'

interface IFullValues {
  [id: string]: IShoppingCart
}

const normalizeData = (data: IShoppingCart[] | undefined) => {
  if (!data) return { shortValues: null, fullValues: null }

  return data.reduce(
    (acc, item) => {
      acc.fullValues[String(item.Id)] = item
      acc.shortValues.push({
        iiD: item.Id,
        Name: item.Name,
        Quantity: item.Quantity,
        Unit: item.Unit,
        Price: item.Price,
        DiscountedPrice: item.DiscountedPrice || undefined,
        image: item.Images[1],
      })

      return acc
    },
    { shortValues: [] as IShortValues[], fullValues: {} as IFullValues },
  )
}

export const useShoppingCartNormalizeData = () => {
  const { data, isFetching } = useGetShoppingCartQuery()
  const [values, setValues] = useState(
    data ? normalizeData(data) : { shortValues: null, fullValues: null },
  )

  useEffect(() => {
    setValues(normalizeData(data))
  }, [data])

  return { values, isFetching }
}
