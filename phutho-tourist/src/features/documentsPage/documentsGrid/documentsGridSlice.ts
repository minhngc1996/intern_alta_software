// src/features/posts/postsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

interface DocumentsGrid {
  id: string;
  title: string;
  img: string;
  bg: string;
}

interface DocumentsGridState {
  documentsGrid: DocumentsGrid[];
  loading: boolean;
  error: string | null;
}

const initialState: DocumentsGridState = {
  documentsGrid: [],
  loading: false,
  error: null,
};

export const fetchDocumentsGrid = createAsyncThunk(
  "posts/fetchDocumentsGrid",
  async () => {
    const querySnapshot = await getDocs(collection(db, "documentsGrid"));
    const documentsGrid: DocumentsGrid[] = [];
    querySnapshot.forEach((doc) => {
      documentsGrid.push({ id: doc.id, ...doc.data() } as DocumentsGrid);
    });
    return documentsGrid;
  }
);

const DocumentsGrid = createSlice({
  name: "documentsGrid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentsGrid.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDocumentsGrid.fulfilled, (state, action) => {
      state.loading = false;
      state.documentsGrid = action.payload;
    });
    builder.addCase(fetchDocumentsGrid.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch documentsGrid";
    });
  },
});

export default DocumentsGrid.reducer;
