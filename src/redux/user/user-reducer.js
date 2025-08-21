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
    logout(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError, logout } = slice.actions;

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
    if (!response.ok) throw new Error("Login Failed");
    const data = await response.json();
    return dispatch(fetchSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
  }
};

export const validateToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    dispatch(fetchStarted());
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Invalid Token");

    const data = await response.json();
    dispatch(fetchSuccess({ ...data, access_token: token }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchError(error.message));
    }
    localStorage.removeItem("token");
  }
};

export default slice.reducer;
