import React from "react";
import * as redux from "react-redux";
import { fireEvent, screen } from "@testing-library/react";

import { CartItem } from "./CartItem";
import { removeItem } from "../../store/modules/redux/actions";
import { IProduct } from "../../store/modules/redux/types";
import { render } from "../test-utils";

// const mockDispatch = jest.fn();

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

describe("Header", () => {
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

    render(<CartItem item={product} />);

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

    render(<CartItem item={product} />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(removeItem({ id: 1 }));
  });
});
