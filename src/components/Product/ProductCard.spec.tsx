import * as redux from "react-redux";
import { fireEvent, screen } from "@testing-library/react";

import ProductCard from "./ProductCard";
import { addToCart } from "../../store/modules/redux/actions";
import { IProduct } from "../../store/modules/redux/types";
import { render } from "../test-utils";

describe("ProductCard", () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
  });

  it("should render properly", () => {
    const product: IProduct = {
      id: 1,
      title: "test",
      price: 20.9,
    };

    render(<ProductCard item={product} />);

    expect(screen.getByText("test", { exact: false })).toBeInTheDocument();
  });

  it("should handle clicks", async () => {
    const product: IProduct = {
      id: 1,
      title: "test",
      price: 20.9,
    };

    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    render(<ProductCard item={product} />);
    const btn = screen.getByRole("link");
    fireEvent.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({ id: 1 }));
  });
});
