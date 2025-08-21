import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sign_up",
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
    resetState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});
export const { resetState } = slice.actions;
const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const signUpAsync =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          password,
          avatar: "https://picsum.photos/800",
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message);
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
