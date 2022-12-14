export interface Cart {
  cartId: string
  userId: string
  products: Product[]
  discountCode?: string
  shippingCost: ShippingMethod
  sharingCartId?: string
  sharingLinkTTL?: Date
  leftLinkUsages?: number
}

export interface Product {
  productId: string
  quantity: number
  price: number
}

export enum DiscountCodeType {
  PERCENT = 'PERCENT',
  AMOUNT = 'AMOUNT'
}

export enum ShippingMethod {
  COURIER = 15.99,
  POST = 11.99,
  PARCEL_LOCKER = 9.99,
  LETTER = 7.99,
  CASH_ON_DELIVERY = 21.99,
  PICKUP_IN_PERSON = 0
}

export interface QuantityBody {
  newQuantity: number
}

export interface ShippingBody {
  shippingMethod: ShippingMethod
}

export interface DiscountCodeBody {
  code: string
}
