import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/modules/redux/actions";
import { IProduct } from "../../store/modules/redux/types";

type ProductCardProps = {
  item: IProduct;
};

export default function ProductCard(props: ProductCardProps) {
  const dispatch = useDispatch();
  const handleClick = (id: number) => {
    dispatch(addToCart({ id }));
  };

  const { item } = props;
  return (
    <div className="card" key={item.id}>
      <div>
        <span className="card-title">{item.title}</span>
        <Link
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            handleClick(item.id);
          }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>

      <div className="card-content">
        <p>
          <b>Price: ${item.price}</b>
        </p>
      </div>
    </div>
  );
}
