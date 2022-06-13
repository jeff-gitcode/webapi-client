import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CheckOut } from "./CheckOut";

export function Cart() {
  const { addedItems, complete } = useSelector((state: any) => state.shop);
  let cartItems = addedItems?.length ? (
    addedItems.map((item: any) => {
      return <CartItem item={item} />;
    })
  ) : (
    <p>Nothing.</p>
  );

  if (complete) {
    return <Navigate to="/thankyou" />;
  } else {
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection" key="collection">
            {cartItems}
          </ul>
        </div>
        <CheckOut />
      </div>
    );
  }
}
