import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import productSaga from "./productsaga";
import { ActionsTypes } from "./types";
import productApi from "../../../services/productApi";

describe("productSaga", () => {
  const products = [
    {
      id: 1,
      title: "Casaco maneiro",
      price: 290.9,
    },
    {
      id: 2,
      title: "Óculos barato",
      price: 20.9,
    },
    {
      id: 3,
      title: "Tênis da moda",
      price: 500.0,
    },
  ];

  beforeEach(() => {});

  it("should return products when fetch produts success", () => {
    return expectSaga(productSaga)
      .provide([[call(productApi.getAll), products]])
      .put({
        type: ActionsTypes.fetchProductsSuccess,
        payload: { items: products },
      })
      .dispatch({ type: ActionsTypes.fetchProducts })
      .run();
  });

  it("should return error when fetch produts fail", () => {
    return expectSaga(productSaga)
      .provide([[call(productApi.getAll), null]])
      .put({
        type: ActionsTypes.fetchProductsFailure,
        payload: { error: "error" },
      })
      .dispatch({ type: ActionsTypes.fetchProducts })
      .run();
  });
});
