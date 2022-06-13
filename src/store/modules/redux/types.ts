export enum ActionsTypes {
  addToCart = "ADD_TO_CART",

  fetchProducts = "FETCH_PRODUCTS",
  fetchProductsSuccess = "FETCH_PRODUCTS_SUCCCESS",
  fetchProductsFailure = "FETCH_PRODUCTS_FAILURE",

  addShipping = "ADD_SHIPPING",
  substractShipping = "SUB_SHIPPING",

  shippingCost = "SHIPPINGCOST",
  shippingCostSuccess = "SHIPPINGCOST_SUCCESS",
  shippingCostFailure = "SHIPPINGCOST_FAILURE",

  changeCurrency = "CHANGE_CURRENCY",

  checkout = "CHECKOUT",
  checkoutSuccess = "CHECKOUT_SUCCESS",
  checkoutFailure = "CHECKOUT_FAILURE",

  resetShop = "RESET_SHOP",

  removeItem = "REMOVE_ITEM",

  subtractQuantity = "SUB_QUANTITY",
  addQuantity = "ADD_QUANTITY",
}

export interface ListResponse<T> {
  data: T[];
}

export interface ICheckOut {
  items: IProduct[];
  total: number;
}

export interface IShipping {
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  quantity?: number;
}

export interface IState {
  items: IProduct[];
  addedItems: IProduct[];
  shipping: number;
  total: number;
  complete: boolean;
  error: string;
}
