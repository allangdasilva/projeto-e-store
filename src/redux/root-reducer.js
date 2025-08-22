import { combineReducers } from "@reduxjs/toolkit";
import products from "./products/products-reducer";
import login from "./user/login-reducer";
import sign_up from "./user/sign-up-reducer";
import cart from "./cart/cart-reducer";

export const reducers = combineReducers({ products, login, sign_up, cart });
