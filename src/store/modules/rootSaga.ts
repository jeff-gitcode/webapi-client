import { all, fork } from "redux-saga/effects";

import product from "./redux/productsaga";
import cart from "./redux/cartsaga";

export default function* rootSaga() {
  yield all([fork(product), fork(cart)]);
}
