import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/banner/bannerSlice";
import aboutUsReducer from "../features/aboutus/aboutUsSlice";
import introduceReducer from "../features/aboutus/introduceSlice";
import postsReducer from "../features/homeposts/postsSlice";
import servicesHomeReducer from "../features/servicesHome/servicesHomeSlice";
import postsPageReducer from "../features/postspage/postsPageSlice";
import { thunk } from "redux-thunk";
export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    aboutUs: aboutUsReducer,
    introduce: introduceReducer,
    post: postsReducer,
    serviceHome: servicesHomeReducer,
    postsPage: postsPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
