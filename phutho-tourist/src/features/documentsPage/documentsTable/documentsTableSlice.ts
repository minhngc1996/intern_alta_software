// src/features/posts/postsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

interface documentsTable {
  id: string;
  name: string;
  url: string;
  date: string;
}

interface DocumentsTableState {
  documentsTable: documentsTable[];
  loading: boolean;
  error: string | null;
}

const initialState: DocumentsTableState = {
  documentsTable: [],
  loading: false,
  error: null,
};

export const fetchDocumentsTable = createAsyncThunk(
  "posts/fetchDocumentsTable",
  async () => {
    const querySnapshot = await getDocs(collection(db, "documentsTable"));
    const documentsTable: documentsTable[] = [];
    querySnapshot.forEach((doc) => {
      documentsTable.push({ id: doc.id, ...doc.data() } as documentsTable);
    });
    return documentsTable;
  }
);

const DocumentsTable = createSlice({
  name: "documentsTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentsTable.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDocumentsTable.fulfilled, (state, action) => {
      state.loading = false;
      state.documentsTable = action.payload;
    });
    builder.addCase(fetchDocumentsTable.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch documentsGrid";
    });
  },
});

export default DocumentsTable.reducer;
