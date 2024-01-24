import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/products";

export const rootReducer = combineReducers({
  products: productReducer,
});