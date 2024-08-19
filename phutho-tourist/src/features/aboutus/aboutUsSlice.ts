import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";

interface AboutUsState {
  images: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AboutUsState = {
  images: [],
  status: "idle",
  error: null,
};

export const fetchAboutUsImages = createAsyncThunk(
  "aboutUs/fetchImages",
  async () => {
    const imagePaths = ["aboutus/aboutus1.png", "aboutus/aboutus2.png"];
    const urls = await Promise.all(
      imagePaths.map(async (path) => {
        const storageRef = ref(storage, path);
        const url = await getDownloadURL(storageRef);
        return url;
      })
    );
    return urls;
  }
);

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUsImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAboutUsImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
      })
      .addCase(fetchAboutUsImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch images";
      });
  },
});

export default aboutUsSlice.reducer;
