import * as redux from "react-redux";
import { screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { render } from "../test-utils";

describe("Cart", () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);

    const items = [
      {
        id: 1,
        title: "test",
        price: 20.9,
      },
    ];

    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue({ addedItems: items });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render properly", () => {
    render(<Cart />);

    expect(screen.getByText("test", { exact: false })).toBeInTheDocument();
  });

  it("should return nothing when no item", () => {
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue({ addedItems: [] });

    render(<Cart />);

    expect(screen.getByText("nothing", { exact: false })).toBeInTheDocument();
  });
});
