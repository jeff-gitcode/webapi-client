import { createAction } from "@reduxjs/toolkit";
import { ActionsTypes, IProduct } from "./types";

//add cart action
export const fetchProducts = createAction(ActionsTypes.fetchProducts);
export const addToCart = createAction<{ id: number }>(ActionsTypes.addToCart);

export const fetchProductsSuccess = createAction<{ items: IProduct[] }>(
  ActionsTypes.fetchProductsSuccess
);

export const fetchProductsFailure = createAction<{ error: string }>(
  ActionsTypes.fetchProductsFailure
);

export const addShipping = createAction(ActionsTypes.addShipping);
export const substractShipping = createAction(ActionsTypes.substractShipping);

export const shippingCost = createAction(ActionsTypes.shippingCost);
export const shippingCostSuccess = createAction<{ shipping: number }>(
  ActionsTypes.shippingCostSuccess
);
export const shippingCostFailure = createAction<{ error: string }>(
  ActionsTypes.shippingCostFailure
);

export const changeCurrency = createAction<{ currency: string }>(
  ActionsTypes.changeCurrency
);
export const removeItem = createAction<{ id: number }>(ActionsTypes.removeItem);
export const addQuantity = createAction<{ id: number }>(
  ActionsTypes.addQuantity
);
export const subtractQuantity = createAction<{ id: number }>(
  ActionsTypes.subtractQuantity
);

export const checkout = createAction(ActionsTypes.checkout);
export const checkoutSuccess = createAction<{ complete: boolean }>(
  ActionsTypes.checkoutSuccess
);

export const checkoutFailure = createAction<{ error: string }>(
  ActionsTypes.checkoutFailure
);

export const resetShop = createAction(ActionsTypes.resetShop);
