import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user-signup-login/userSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default store;
