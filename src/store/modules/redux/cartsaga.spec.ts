import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import cartsaga from "./cartsaga";
import { ActionsTypes } from "./types";
import productApi from "../../../services/productApi";

describe("cartsaga", () => {
  const state = {
    shop: {
      addedItems: [
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
      ],
      total: 100,
    },
  };

  it("should return shipping cost when post shipping request success", () => {
    return expectSaga(cartsaga)
      .withState(state)
      .provide([[call(productApi.shippingCost, { total: 100 }), 20]])

      .put({
        type: ActionsTypes.shippingCostSuccess,
        payload: { shipping: 20 },
      })
      .dispatch({ type: ActionsTypes.shippingCost })
      .run();
  });

  it("should return error when post shipping request faile", () => {
    return expectSaga(cartsaga)
      .withState(state)
      .provide([[call(productApi.shippingCost, { total: 100 }), null]])
      .put({
        type: ActionsTypes.shippingCostFailure,
        payload: { error: "error" },
      })
      .dispatch({ type: ActionsTypes.shippingCost })
      .run();
  });

  it("should return true when post checkOut request success", () => {
    return expectSaga(cartsaga)
      .withState(state)
      .provide([
        [
          call(productApi.checkOut, {
            items: state.shop.addedItems,
            total: state.shop.total,
          }),
          true,
        ],
      ])

      .put({
        type: ActionsTypes.checkoutSuccess,
        payload: { complete: true },
      })
      .dispatch({ type: ActionsTypes.checkout })
      .run();
  });

  it("should return error when post checkOut request faile", () => {
    return expectSaga(cartsaga)
      .withState(state)
      .provide([
        [
          call(productApi.checkOut, {
            items: state.shop.addedItems,
            total: state.shop.total,
          }),
          null,
        ],
      ])
      .put({
        type: ActionsTypes.checkoutFailure,
        payload: { error: "error" },
      })
      .dispatch({ type: ActionsTypes.checkout })
      .run();
  });
});
