import { combineReducers } from "@reduxjs/toolkit";
import products from "./products/products";
import products_filtered from "./products/products-filtered-reducer";
import login from "./user/login-reducer";
import sign_up from "./user/sign-up-reducer";
import cart from "./cart/cart-reducer";

export const reducers = combineReducers({
  products,
  products_filtered,
  login,
  sign_up,
  cart,
});
