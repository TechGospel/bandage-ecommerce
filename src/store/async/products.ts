import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAllProducts, IProduct } from "../../types";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (params: { skip?: number; limit?: number } = {}) => {
    const { data } = await axios.get(`https://dummyjson.com/products`, {
      params,
    });
    return data as IAllProducts;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id: string) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data as IProduct;
  }
);