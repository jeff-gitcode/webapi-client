import * as redux from "react-redux";
import { fireEvent, screen } from "@testing-library/react";
import { IProduct } from "../store/modules/redux/types";
import { Navbar } from "./Navbar";
import { render } from "./test-utils";
import ProductCard from "./Product/ProductCard";

describe("Navbar", () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
  });

  it("should render properly", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "My cart" })).toBeInTheDocument();
  });

  xit("should handle clicks", async () => {
    const product: IProduct = {
      id: 1,
      title: "test",
      price: 20.9,
    };

    const handleClick = jest.fn();

    render(<ProductCard item={product} />);
    const btn = screen.getByRole("link");
    fireEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
