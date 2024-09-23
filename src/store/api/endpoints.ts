// export const mainUrl = import.meta.env.VITE_BASE_URL
export const mainUrl = 'http://localhost:8080/api'

export const endpoints = {
  admin: {
    getAuth: (productsValue: number) =>
      mainUrl + `/Admin/create/?value=${productsValue}`,
  },
  shoppingCart: {
    getHeader: () => mainUrl + `/ShoppingCart/header`,
    getBusketSummary: () => mainUrl + `/ShoppingCart/baskedsummary`,
    getShoppingCart: () => mainUrl + `/ShoppingCart/products`,
    changeQuantity: () => mainUrl + `/ShoppingCart/changequantity`,
    deleteShoppingCartItem: () => mainUrl + `/ShoppingCart/product`,
    deleteAllItems: () => mainUrl + `/ShoppingCart/products`,
    discount: () => mainUrl + `/ShoppingCart/discount`,
  },
}
