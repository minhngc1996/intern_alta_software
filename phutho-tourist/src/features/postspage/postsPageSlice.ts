import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface PostsPage {
  id: string;
  image: string;
  title: string;
  description: string;
  admin: string;
  date: string;
  views: string;
  tags: string[];
}

interface PostsPageState {
  postsPage: PostsPage[];
  loading: boolean;
  error: string | null;
}
const initialState: PostsPageState = {
  postsPage: [],
  loading: false,
  error: null,
};

export const fetchPostsPage = createAsyncThunk(
  "postsPage/fetchPostsPage",
  async () => {
    const querySnapshot = await getDocs(collection(db, "postsPage"));
    const postsPage: PostsPage[] = [];
    querySnapshot.forEach((doc) => {
      postsPage.push({ id: doc.id, ...doc.data() } as PostsPage);
    });
    return postsPage;
  }
);

const postsPageSlice = createSlice({
  name: "postsPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsPage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPostsPage.fulfilled, (state, action) => {
      state.loading = false;
      state.postsPage = action.payload;
    });
    builder.addCase(fetchPostsPage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch PostsPage";
    });
  },
});

export default postsPageSlice.reducer;
