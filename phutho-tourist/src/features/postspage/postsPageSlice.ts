import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Định nghĩa giao diện cho một bài viết
interface PostsPage {
  id: string;
  image: string;
  title: string;
  description: string;
  admin: string;
  date: string;
  views: string;
  tags: string[];
  content: string;
  imagePostDetail: string;
}

// Định nghĩa trạng thái cho slice
interface PostsPageState {
  postsPage: PostsPage[];
  postDetail: PostsPage | null;
  loading: boolean;
  error: string | null;
}

// Khởi tạo trạng thái ban đầu
const initialState: PostsPageState = {
  postsPage: [],
  postDetail: null,
  loading: false,
  error: null,
};

// Tạo async thunk để lấy danh sách bài viết
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

// Tạo async thunk để lấy chi tiết một bài viết
export const fetchPostDetail = createAsyncThunk(
  "postsPage/fetchPostDetail",
  async (id: string) => {
    const postRef = doc(db, "postsPage", id);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      console.log("Fetched post detail from Firebase:", postSnap.data());
      return { id: postSnap.id, ...postSnap.data() } as PostsPage;
    } else {
      throw new Error("Post not found");
    }
  }
);

// Tạo slice để quản lý trạng thái của bài viết
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
    builder.addCase(fetchPostDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.postDetail = action.payload;
    });
    builder.addCase(fetchPostDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch PostDetail";
    });
  },
});

export default postsPageSlice.reducer;
