import {
  ICheckOut,
  IProduct,
  IShipping,
  ListResponse,
} from "../store/modules/redux/types";
import axiosClient from "./axiosClient";

const productApi = {
  getAll(): Promise<ListResponse<IProduct>> {
    const url = "/products";
    return axiosClient.get(url);
  },

  shippingCost(data: IShipping): Promise<number> {
    const url = "/shipping";
    return axiosClient.post(url, data);
  },

  checkOut(data: ICheckOut): Promise<boolean> {
    const url = "/checkout";
    return axiosClient.post(url, data);
  },
};

export default productApi;
