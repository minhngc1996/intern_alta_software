import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
export const store = configureStore({ //Tạo ra store và quản lý bởi reducer
  reducer: {
    counter: counterReducer,
  },
});

// Lấy type của root state và dispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
