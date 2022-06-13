import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { fetchProductsFailure, fetchProductsSuccess } from "./actions";
import { ActionsTypes, IProduct, ListResponse } from "./types";
import productApi from "../../../services/productApi";

function* fetchProducts() {
  try {
    const items: IProduct[] = yield call(productApi.getAll);

    if (items) {
      yield put(fetchProductsSuccess({ items: items }));
    } else {
      yield put(fetchProductsFailure({ error: "error" }));
    }
  } catch (error) {
    yield put(fetchProductsFailure({ error: (error as Error).message }));
  }
}

export default function* root() {
  yield all([takeLatest(ActionsTypes.fetchProducts, fetchProducts)]);
}
