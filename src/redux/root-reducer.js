import { combineReducers } from "@reduxjs/toolkit";
import products from "./products/products-reducer";
import user from "./user/user-reducer";

export const reducers = combineReducers({ products, user });
