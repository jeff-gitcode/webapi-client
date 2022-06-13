import { combineReducers } from "redux";
import shop from "./redux/shopReducer";

export default combineReducers({
  shop: shop,
});
