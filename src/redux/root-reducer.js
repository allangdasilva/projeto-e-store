import { combineReducers } from "@reduxjs/toolkit";
import products from "./products/products-reducer";

export const reducers = combineReducers({ products });
