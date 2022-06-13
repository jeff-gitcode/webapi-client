import { Provider } from "react-redux";
import { render as RTL } from "@testing-library/react";
import configMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configMockStore();
export const mockStoreData = [{}];
export const store = mockStore({
  stream: mockStoreData,
});

store.dispatch = jest.fn();

export const renderWithRouter = (comp: any) => {
  return RTL(<Provider store={store}>{comp}</Provider>, {
    wrapper: MemoryRouter,
  });
};

export * from "@testing-library/react";
export { renderWithRouter as render };
