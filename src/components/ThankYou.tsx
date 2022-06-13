import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetShop } from "../store/modules/redux/actions";

export function ThankYou() {
  const dispatch = useDispatch();

  const handleShop = () => {
    dispatch(resetShop());
  };

  return (
    <div className="container">
      <h2>Thank You</h2>
      <div className="row">
        <div className="grid-example col s12">
          <span className="flow-text">Checkout Success !</span>
        </div>
      </div>
      <div className="row">
        <div className="grid-example col s12">
          <ul className="collection-item">
            <li>
              <Link to="/" onClick={() => handleShop()}>
                Back to Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
