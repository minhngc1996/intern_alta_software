import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Recruiment {
  id: string;
  image: string;
  title: string;
  type: string;
  location: string;
  status: string;
  description: string;
  field: string;
}

interface RecruimentSate {
  recruiment: Recruiment[];
  loading: boolean;
  error: string | null;
}
const initialState: RecruimentSate = {
  recruiment: [],
  loading: false,
  error: null,
};

export const fetchRecruiment = createAsyncThunk(
  "recruiment/fetchRecruiment",
  async () => {
    const querySnapshot = await getDocs(collection(db, "recruiment"));
    const recruiment: Recruiment[] = [];
    querySnapshot.forEach((doc) => {
      recruiment.push({ id: doc.id, ...doc.data() } as Recruiment);
    });
    return recruiment;
  }
);

const recruimentSlice = createSlice({
  name: "recruiment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecruiment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRecruiment.fulfilled, (state, action) => {
      state.loading = false;
      state.recruiment = action.payload;
    });
    builder.addCase(fetchRecruiment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch PostsPage";
    });
  },
});

export default recruimentSlice.reducer;
