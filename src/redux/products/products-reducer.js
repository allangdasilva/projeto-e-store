import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      const { categoryId, data } = action.payload;
      state.loading = false;
      state.data[categoryId] = data;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchError, fetchStarted, fetchSuccess } = slice.actions;

export const homeProductsAsync = (productsCategory) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=4&categoryId=${productsCategory}`
    );
    const data = await response.json();
    return dispatch(fetchSuccess({ categoryId: productsCategory, data }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};
export const productsAsync = (productsCategory) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=8&categoryId=${productsCategory}`
    );
    const data = await response.json();
    return dispatch(fetchSuccess({ categoryId: productsCategory, data }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};

export default slice.reducer;
