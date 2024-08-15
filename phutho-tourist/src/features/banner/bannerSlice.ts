import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBannerData } from "./bannerThunks";

interface BannerState {
  bannerVideoUrl: string | null;
  imageUrls: string[];
  selectedImageIndex: number;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BannerState = {
  bannerVideoUrl: null,
  imageUrls: [],
  selectedImageIndex: 0,
  status: "idle",
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setSelectedImageIndex: (state, action: PayloadAction<number>) => {
      state.selectedImageIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.bannerVideoUrl = action.payload.bannerVideoUrl;
        state.imageUrls = action.payload.imageUrls;
        state.status = "succeeded";
      })
      .addCase(fetchBannerData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSelectedImageIndex } = bannerSlice.actions;

export default bannerSlice.reducer;
