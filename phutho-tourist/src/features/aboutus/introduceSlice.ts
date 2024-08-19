import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

interface IntroduceState {
  images: { header: string | null; middle: string | null };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IntroduceState = {
  images: { header: null, middle: null },
  status: "idle",
  error: null,
};

export const fetchIntroduceImages = createAsyncThunk(
  "introduce/fetchIntroduceImages",
  async () => {
    const listRef = ref(storage, "introduce/"); // Thay đổi đường dẫn theo cấu trúc thư mục của bạn
    const result = await listAll(listRef);
    const urls = await Promise.all(
      result.items.map((itemRef) => getDownloadURL(itemRef))
    );
    return urls;
  }
);

const introduceSlice = createSlice({
  name: "introduce",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntroduceImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIntroduceImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Giả sử bạn có 2 hình ảnh và sắp xếp chúng cho header và middle
        state.images = {
          header: action.payload[0] || null,
          middle: action.payload[1] || null,
        };
      })
      .addCase(fetchIntroduceImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch images";
      });
  },
});

export default introduceSlice.reducer;
