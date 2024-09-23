export interface IShoppingCartImage {
  FileName: string
  FileExtension: string
  Image: string
}

export interface IShoppingCart {
  Id: number
  Name: string
  Description: string
  Quantity: number
  Unit: string
  Currency: string
  Price: number
  DiscountedPrice?: number
  Images: IShoppingCartImage[]
}

export interface IShortValues
  extends Omit<IShoppingCart, 'Description' | 'Images' | 'Currency' | 'Id'> {
  iiD: number
  image: IShoppingCartImage
}

export interface IShoppingCartItemChange {
  ProductId: number
  UserGuid: string
  Value: number
}

export interface IShoppingCartDiscount {
  DiscountName: string
  UsedGuid: string
}

export interface IShoppingCartItemDelete
  extends Omit<IShoppingCartItemChange, 'Value'> {
  name?: string
}

export interface IShoppingCartResponse {
  Description: string
  Name: 'Success' | 'False'
}
