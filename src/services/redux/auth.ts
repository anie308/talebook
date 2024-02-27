import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  token: null,
  loading: false,
  error: null ,
};

export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async (_, { getState, dispatch }) => {
    const token = (getState() as any).auth.token;

    if (!token) {
      throw new Error("Token not found");
    }

    // Your token validation logic here (e.g., sending a request to the server)

    // Simulating token validation with SecureStore
    try {
      const storedToken = await SecureStore.getItemAsync("token");
      if (token === storedToken) {
        return token; // Token is valid
      } else {
        throw new Error("Token is invalid");
      }
    } catch (error) {
      throw new Error("Token is invalid");
    }
  }
);


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
  extraReducers: (builder) => {
    builder
      .addCase(checkToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(checkToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ;
        state.token = null;
      });
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
