import * as redux from "react-redux";
import { fireEvent, screen } from "@testing-library/react";

import { CheckOut } from "./CheckOut";
import { shippingCost, checkout } from "../../store/modules/redux/actions";
import { render } from "../test-utils";

describe("CheckOut", () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    const items = {
      addedItems: [
        {
          id: 1,
          title: "test",
          price: 20.9,
        },
      ],
      total: 30.9,
      shipping: 10,
    };

    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue({ ...items });
  });

  it("should render properly", () => {
    render(<CheckOut />);

    expect(screen.getByText("30.9", { exact: false })).toBeInTheDocument();
  });

  it("should handle shippingCost clicks", async () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    render(<CheckOut />);
    const btn = screen.getByRole("checkbox");
    fireEvent.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(shippingCost());
  });

  it("should handle checkout clicks", async () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    render(<CheckOut />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(checkout());
  });
});
