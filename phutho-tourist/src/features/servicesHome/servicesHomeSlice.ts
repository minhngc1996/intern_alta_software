import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface ServiceHome {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface ServicesState {
  servicesHome: ServiceHome[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  servicesHome: [],
  loading: false,
  error: null,
};

export const fecthServicesHome = createAsyncThunk(
  "services/fecthServicesHome",
  async () => {
    const querySnapshot = await getDocs(collection(db, "servicesHome"));
    const servicesHome: ServiceHome[] = [];
    querySnapshot.forEach((doc) => {
      servicesHome.push({ id: doc.id, ...doc.data() } as ServiceHome);
    });
    return servicesHome;
  }
);

const servicesHomeSlice = createSlice({
  name: "servicesHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthServicesHome.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fecthServicesHome.fulfilled, (state, action) => {
      state.loading = false;
      state.servicesHome = action.payload;
    });
    builder.addCase(fecthServicesHome.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fecth servicesHome";
    });
  },
});

export default servicesHomeSlice.reducer;
