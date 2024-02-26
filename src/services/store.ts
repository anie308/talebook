import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api';
import authReducer from './redux/auth'
// import vaultReducer from './redux/vaultSlice'

 export const store = configureStore({
  reducer: {
    auth: authReducer,
    // vault: vaultReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})