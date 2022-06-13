import { all, call, put, select, takeLatest } from "redux-saga/effects";

import {
  checkoutFailure,
  checkoutSuccess,
  shippingCostFailure,
  shippingCostSuccess,
} from "./actions";
import productApi from "../../../services/productApi";
import { ActionsTypes, ICheckOut, IShipping } from "./types";

function* shippingCost() {
  const total: number = yield select((state: any) => {
    return state.shop.total;
  });

  const payload: IShipping = {
    total: total,
  };

  try {
    const shippingCost: number = yield call(productApi.shippingCost, payload);

    if (shippingCost) {
      yield put(shippingCostSuccess({ shipping: shippingCost }));
    } else {
      yield put(shippingCostFailure({ error: "error" }));
    }
  } catch (error) {
    yield put(shippingCostFailure({ error: (error as Error).message }));
  }
}

function* checkOut() {
  const payload: ICheckOut = yield select((state: any) => {
    return {
      items: state.shop.addedItems,
      total: state.shop.total,
    };
  });

  try {
    const isComplete: boolean = yield call(productApi.checkOut, payload);

    if (isComplete) {
      yield put(checkoutSuccess({ complete: isComplete }));
    } else {
      yield put(checkoutFailure({ error: "error" }));
    }
  } catch (error) {
    yield put(checkoutFailure({ error: (error as Error).message }));
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.shippingCost, shippingCost),
    takeLatest(ActionsTypes.checkout, checkOut),
  ]);
}
