import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/redux/actions";
import { IProduct } from "../../store/modules/redux/types";
import ProductCard from "./ProductCard";

import "./ProductList.scss";

export default function ProductList() {
  const dispatch = useDispatch();

  const { items } = useSelector((state: any) => state.shop);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <h3 className="center">Products</h3>
      <div className="box" key="box">
        {items.map((item: IProduct) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
}
