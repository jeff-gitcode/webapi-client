import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  shippingCost,
  substractShipping,
  checkout,
} from "../../store/modules/redux/actions";

import { ChangeCurrency } from "./ChangeCurrency";

export function CheckOut() {
  const dispatch = useDispatch();
  const checkboxRef: any = useRef();

  const { addedItems, total, shipping } = useSelector(
    (state: any) => state.shop
  );

  useEffect(() => {
    if (checkboxRef.current && checkboxRef.current.checked) {
      dispatch(shippingCost());
    }
  }, [total]);

  const handleChecked = (e: any) => {
    if (e.target.checked) {
      dispatch(shippingCost());
    } else {
      dispatch(substractShipping());
    }
  };

  const handleCheckOut = (e: any) => {
    dispatch(checkout());
  };

  if (!addedItems || addedItems.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <ChangeCurrency />
        </li>
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={checkboxRef} onChange={handleChecked} />
            <span>Shipping(${shipping})</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: ${total} </b>
        </li>
      </div>
      <div className="checkout">
        <button
          className="waves-effect waves-light btn"
          onClick={handleCheckOut}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
