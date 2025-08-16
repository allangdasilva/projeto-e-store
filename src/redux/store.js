import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./root-reducer";

export const store = configureStore({ reducer: reducers });
