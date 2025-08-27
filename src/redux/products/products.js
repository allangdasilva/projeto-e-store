import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: " products",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const productsAsync = () => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    if (!response.ok) {
      const dataError = await response.json();
      throw new Error(dataError?.message);
    }
    const data = await response.json();
    return dispatch(fetchSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};

export default slice.reducer;
