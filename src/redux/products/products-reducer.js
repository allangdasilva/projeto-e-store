import { createSlice } from "@reduxjs/toolkit";

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
      const { categoryId, data, offSet } = action.payload;
      state.loading = false;

      if (offSet > 0 && state.data[categoryId]) {
        state.data[categoryId] = [...state.data[categoryId], ...data];
      } else {
        state.data[categoryId] = data;
      }
      state.hasMore = data.length >= 4;
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
    if (!response.ok) {
      const dataError = await response.json();
      throw new Error(dataError?.message);
    }

    const data = await response.json();
    return dispatch(fetchSuccess({ categoryId: productsCategory, data }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};
export const productsAsync =
  (productsCategory, itemsOffset) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${itemsOffset}&limit=4&categoryId=${productsCategory}`
      );
      if (!response.ok) {
        const dataError = await response.json();
        throw new Error(dataError?.message);
      }

      const data = await response.json();
      return dispatch(
        fetchSuccess({
          categoryId: productsCategory,
          data,
          offSet: itemsOffset,
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchError(error.message));
      }
    }
  };

export default slice.reducer;
