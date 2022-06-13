import * as redux from "react-redux";
import { screen } from "@testing-library/react";

import ProductList from "./ProductList";
import { render } from "../test-utils";

describe("ProductList", () => {
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
    useSelectorSpy.mockReturnValue({ items: items });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render properly", () => {
    render(<ProductList />);

    expect(screen.getByText("test", { exact: false })).toBeInTheDocument();
  });
});
