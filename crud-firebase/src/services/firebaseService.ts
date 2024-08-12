import { database } from "./firebaseConfig";
import { ref, push, set, onValue, update, remove } from "firebase/database";
import { User } from "../types/userTypes";

export const addUser = async (user: User) => {
  try {
    const usersRef = ref(database, "users");
    const newUserRef = push(usersRef);
    await set(newUserRef, user);
    console.log("User added successfully");
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};

export const getUsers = (callback: (data: { [key: string]: User }) => void) => {
  const usersRef = ref(database, "users");
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const updateUser = async (
  userId: string,
  updatedData: Partial<User>
) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    await update(userRef, updatedData);
    console.log("User updated successfully");
  } catch (e) {
    console.error("Error updating user: ", e);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    await remove(userRef);
    console.log("User deleted successfully");
  } catch (e) {
    console.error("Error deleting user: ", e);
  }
};
