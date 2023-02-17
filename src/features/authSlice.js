import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	isAuthenticated: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
		},

		logout: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

// selectors
export const selectUser = (state) => state.auth.user;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
