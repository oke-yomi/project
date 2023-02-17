import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./src/features/basketSlice";
import restaurantReducer from "./src/features/restaurantSlice";
import authReducer from "./src/features/authSlice";

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		restaurant: restaurantReducer,
		auth: authReducer,
	},
});
