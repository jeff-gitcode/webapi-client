import reducer from "./shopReducer";
import { ActionsTypes } from "./types";
import {
  addQuantity,
  addToCart,
  changeCurrency,
  checkoutFailure,
  checkoutSuccess,
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
  removeItem,
  resetShop,
  shippingCostFailure,
  shippingCostSuccess,
  substractShipping,
  subtractQuantity,
} from "./actions";

describe("reducers/fetch products", () => {
  const emptyAction = { type: "", payload: {} };
  let currentState: any = null;

  beforeAll(() => {
    currentState = reducer(undefined, emptyAction);
  });

  afterAll(() => {
    currentState = null;
  });

  it("should return the initial state", () => {
    expect(reducer(currentState, emptyAction)).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.resetShop}`, () => {
    currentState = reducer(currentState, resetShop());
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.fetchProducts}`, () => {
    currentState = reducer(currentState, fetchProducts());
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.fetchProductsSuccess}`, () => {
    const payload = {
      items: [
        {
          id: 1,
          title: "Casaco maneiro",
          price: 290.9,
          quantity: 0,
        },
      ],
    };

    currentState = reducer(currentState, fetchProductsSuccess(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.addToCart}`, () => {
    const payload = { id: 1 };

    currentState = reducer(currentState, addToCart(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.addQuantity}`, () => {
    const payload = { id: 1 };

    currentState = reducer(currentState, addQuantity(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.subtractQuantity}`, () => {
    const payload = { id: 1 };

    currentState = reducer(currentState, subtractQuantity(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.shippingCostSuccess}`, () => {
    const payload = { shipping: 10 };

    currentState = reducer(currentState, shippingCostSuccess(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.changeCurrency}`, () => {
    const payload = { currency: "2" };

    currentState = reducer(currentState, changeCurrency(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.substractShipping}`, () => {
    currentState = reducer(currentState, substractShipping());
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.removeItem}`, () => {
    const payload = { id: 1 };

    currentState = reducer(currentState, removeItem(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.checkoutSuccess}`, () => {
    const payload = { complete: true };

    currentState = reducer(currentState, checkoutSuccess(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.fetchProductsFailure}`, () => {
    const payload = { error: "error" };

    currentState = reducer(currentState, fetchProductsFailure(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.shippingCostFailure}`, () => {
    const payload = { error: "error" };

    currentState = reducer(currentState, shippingCostFailure(payload));
    expect(currentState).toMatchSnapshot();
  });

  it(`should handle ${ActionsTypes.checkoutFailure}`, () => {
    const payload = { error: "error" };

    currentState = reducer(currentState, checkoutFailure(payload));
    expect(currentState).toMatchSnapshot();
  });
});
