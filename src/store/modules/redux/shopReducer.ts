import { IProduct, IState } from "./types";
import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const initState = {
  items: [],
  addedItems: [],
  shipping: 0,
  total: 0,
  complete: false,
  error: "",
};

// const shippingCost = (price: number) => {
//   if (price <= 50) {
//     return 10;
//   }

//   return 20;
// };

const findItem = (items: any, id: number): IProduct => {
  return items.find((item: IProduct) => item.id === id);
};

function filterItem(items: any, id: number) {
  return items.filter((item: IProduct) => id !== item.id);
}

const shop = createReducer(initState, (builder) => {
  builder
    .addCase(fetchProducts, (state: IState, action) => {
      state.items = [];
    })
    .addCase(fetchProductsSuccess, (state: IState, action) => {
      const newItems = action.payload.items;
      state.items = newItems;
      state.error = "";
    })
    .addCase(addToCart, (state: IState, action) => {
      let addedItem: IProduct = findItem(state.items, action.payload.id);
      //check if the action id exists in the addedItems
      let existedItem = findItem(state.addedItems, action.payload.id);

      if (existedItem) {
        addedItem.quantity = addedItem.quantity! + 1;
        const newTotal = toTwoDecimalPlace(state.total + addedItem.price);

        state.addedItems.map((r: IProduct) => {
          if (r.id === addedItem.id) {
            r.quantity = r.quantity! + 1;
          }
        });
        state.total = newTotal;
      } else {
        addedItem.quantity! = 1;
        //calculating the total
        let newTotal = toTwoDecimalPlace(state.total + addedItem.price);

        state.addedItems = [...state.addedItems, addedItem];
        state.total = newTotal;
      }
    })
    .addCase(removeItem, (state: IState, action) => {
      let itemToRemove: IProduct = findItem(
        state.addedItems,
        action.payload.id
      );
      let newItems = filterItem(state.addedItems, action.payload.id);

      //calculating the total
      let newTotal = toTwoDecimalPlace(
        state.total - itemToRemove.price * itemToRemove.quantity!
      );

      state.total = newTotal;
      state.addedItems = newItems;
    })
    .addCase(addQuantity, (state: IState, action) => {
      let addedItem: IProduct = findItem(state.items, action.payload.id);
      addedItem.quantity! += 1;
      let newTotal = toTwoDecimalPlace(state.total + addedItem.price);

      state.addedItems.map((r: IProduct) => {
        if (r.id === addedItem.id) {
          r.quantity! += 1;
        }
      });
      state.total = newTotal;
    })
    .addCase(subtractQuantity, (state: IState, action) => {
      let addedItem: IProduct = findItem(state.items, action.payload.id);
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items: IProduct[] = filterItem(
          state.addedItems,
          action.payload.id
        );
        let newTotal = toTwoDecimalPlace(state.total - addedItem.price);

        state.addedItems = new_items;
        state.total = newTotal;
      } else {
        let newTotal = toTwoDecimalPlace(state.total - addedItem.price);
        state.addedItems.map((r: IProduct) => {
          if (r.id === addedItem.id) {
            r.quantity! -= 1;
          }
        });
        state.total = newTotal;
      }
    })
    .addCase(checkoutSuccess, (state: IState, action) => {
      const isComplete = action.payload.complete;

      state.complete = isComplete;
      state.error = "";
    })
    .addCase(shippingCostSuccess, (state: IState, action) => {
      const shippingCost = action.payload.shipping;
      let newTotal = toTwoDecimalPlace(
        state.total + shippingCost - state.shipping
      );

      state.total = newTotal;
      state.shipping = shippingCost;
      state.error = "";
    })
    .addCase(substractShipping, (state: IState, action) => {
      const shippingCost = 0;
      const newTotal = toTwoDecimalPlace(state.total - state.shipping);

      state.total = newTotal;
      state.shipping = shippingCost;
    })
    .addCase(changeCurrency, (state: IState, action) => {
      const { addedItems, items } = state;
      const currencyRate = parseFloat(action.payload.currency);

      let newTotal: number = 0;
      const newItems = addedItems.map((item: IProduct) => {
        const originalItem: IProduct = findItem(items, item.id);

        const newPrice = toTwoDecimalPlace(originalItem.price * currencyRate);
        newTotal = toTwoDecimalPlace(newTotal + newPrice);

        return {
          ...item,
          price: newPrice,
        };
      });

      state.addedItems = newItems;
      state.total = newTotal;
    })
    .addCase(resetShop, (state: IState, action) => {
      return initState;
    })
    .addCase(fetchProductsFailure, (state: IState, action) => {
      state.items = [];
      state.error = `fetchProductsFailure: ${action.payload.error}`;
    })
    .addCase(shippingCostFailure, (state: IState, action) => {
      state.error = `shippingCostFailure: ${action.payload.error}`;
    })
    .addCase(checkoutFailure, (state: IState, action) => {
      state.error = `checkoutFailure: ${action.payload.error}`;
    })
    // and provide a default case if no other handlers matched)
    .addDefaultCase((state, action) => {});
});

const toTwoDecimalPlace = (num: number): number =>
  Number((Math.round(num * 100) / 100).toFixed(2));

export default shop;
