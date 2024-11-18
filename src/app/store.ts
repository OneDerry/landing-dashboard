import { configureStore } from "@reduxjs/toolkit";
import { postUserApiSlice } from "../api/post";

console.log(postUserApiSlice.reducer);

export const store = configureStore({
  reducer: {
    [postUserApiSlice.reducerPath]: postUserApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postUserApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
