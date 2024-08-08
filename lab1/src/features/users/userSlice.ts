// src/features/users/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, getUsers, updateUser, deleteUser } from "../../api/userApi";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await getUsers();
  return users;
});

export const addNewUser = createAsyncThunk(
  "users/addUser",
  async (user: Omit<User, "id">) => {
    const id = Date.now().toString(); // Generate a unique ID for new users
    await addUser({ id, ...user });
    return { id, ...user };
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (user: User) => {
    await updateUser(user.id, user);
    return user;
  }
);

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (id: string) => {
    await deleteUser(id);
    return id;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users.";
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
