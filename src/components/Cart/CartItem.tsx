import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../store/modules/redux/actions";
import { IProduct } from "../../store/modules/redux/types";

type CartItemProps = {
  item: IProduct;
};

export function CartItem(props: CartItemProps) {
  const { item } = props;
  const dispatch = useDispatch();

  //to remove the item completely
  const handleRemove = (id: any) => {
    dispatch(removeItem({ id }));
  };
  //to add the quantity
  const handleAddQuantity = (id: number) => {
    dispatch(addQuantity({ id }));
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (id: number) => {
    dispatch(subtractQuantity({ id }));
  };

  return (
    <li className="collection-item avatar" key={item.id}>
      <div className="item-desc">
        <span className="title">{item.title}</span>
        <p>
          <b>Price: ${item.price}</b>
        </p>
        <p>
          <b>Quantity: {item.quantity}</b>
        </p>
        <div className="add-remove">
          <Link to="/cart" key="addcart">
            <i
              className="material-icons"
              onClick={() => {
                handleAddQuantity(item.id);
              }}
            >
              arrow_drop_up
            </i>
          </Link>
          <Link to="/cart" key="subcart">
            <i
              className="material-icons"
              onClick={() => {
                handleSubtractQuantity(item.id);
              }}
            >
              arrow_drop_down
            </i>
          </Link>
        </div>
        <button
          className="waves-effect waves-light btn pink remove"
          onClick={() => {
            handleRemove(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
