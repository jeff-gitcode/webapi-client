import * as redux from "react-redux";
import { fireEvent, screen } from "@testing-library/react";

import { ChangeCurrency } from "./ChangeCurrency";
import { changeCurrency } from "../../store/modules/redux/actions";
import { render } from "../test-utils";

describe("ChangeCurrency", () => {
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
    render(<ChangeCurrency />);

    expect(
      screen.getByText("Choose your country", { exact: false })
    ).toBeInTheDocument();
  });

  it("should handle shippingCost clicks", async () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    render(<ChangeCurrency />);
    const select = screen.getByTestId("select");
    fireEvent.change(select, { target: { value: 1 } });

    expect(mockDispatch).toHaveBeenCalledWith(
      changeCurrency({ currency: "1" })
    );
  });
});
