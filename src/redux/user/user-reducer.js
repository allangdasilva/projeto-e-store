import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: localStorage.getItem("token")
      ? { access_token: localStorage.getItem("token") }
      : null,
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
      localStorage.setItem("token", action.payload.access_token);
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const userAsync = (email, password) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    return dispatch(fetchSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};

export default slice.reducer;
