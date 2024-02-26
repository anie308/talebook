import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      SecureStore.setItemAsync("token", action.payload.toString()) // Make sure to convert payload to a string
        .then(() => {
          console.log(
            "User token set and stored in SecureStore:",
            action.payload
          );
        })
        .catch((error) => {
          console.error("Error setting user token:", error);
        });
    },
    removeToken: (state) => {
      state.token = null;
      SecureStore.deleteItemAsync("token")
        .then(() => {
          console.log("User token removed from SecureStore");
        })
        .catch((error) => {
          console.error("Error removing user token:", error);
        });
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
