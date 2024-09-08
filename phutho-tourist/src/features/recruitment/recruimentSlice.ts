import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Định nghĩa interface cho Recruiment
interface Recruiment {
  id: string;
  image: string;
  title: string;
  type: string;
  location: string;
  status: string;
  description: string;
  field: string;
  quantity: number;
  company: string;
  address: string;
  workingDays: string;
  workingTimes: string;
  benefits: string;
  requirements: string;
  ageRequirement: string;
  educationLevel: string;
  applicationInstructions: string;
  jobDescription: string;
}

// Định nghĩa state cho Recruiment bao gồm cả selectedRecruiment
interface RecruimentState {
  recruiment: Recruiment[];
  selectedRecruiment: Recruiment | null; // Tuyển dụng được chọn
  loading: boolean;
  error: string | null;
}

// Khởi tạo giá trị initial state
const initialState: RecruimentState = {
  recruiment: [],
  selectedRecruiment: null, // Khởi tạo là null
  loading: false,
  error: null,
};

// Async thunk để fetch tất cả các bài đăng tuyển dụng
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

// Async thunk để fetch chi tiết của một bài đăng tuyển dụng
export const fetchRecruimentDetail = createAsyncThunk(
  "recruiment/fetchRecruimentDetail",
  async (id: string) => {
    const docRef = doc(db, "recruiment", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Recruiment;
    } else {
      throw new Error("Recruiment not found");
    }
  }
);

// Tạo slice cho Recruiment
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
      state.error = action.error.message || "Failed to fetch recruiments";
    });

    builder.addCase(fetchRecruimentDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRecruimentDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedRecruiment = action.payload; // Cập nhật selectedRecruiment
    });
    builder.addCase(fetchRecruimentDetail.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Failed to fetch recruiment details";
    });
  },
});

export default recruimentSlice.reducer;
