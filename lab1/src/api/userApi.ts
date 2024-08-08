// src/api/userApi.ts
import { ref, set, get, update, remove, child } from "firebase/database";
import { database } from "../firebase";

const usersRef = ref(database, "users");

export const addUser = async (user: {
  id: string;
  name: string;
  email: string;
  age: number;
}) => {
  await set(ref(database, `users/${user.id}`), user);
};

export const getUsers = async () => {
  const snapshot = await get(usersRef);
  const data = snapshot.val();
  const users: { id: string; name: string; email: string; age: number }[] = [];
  for (const id in data) {
    users.push({ id, ...data[id] });
  }
  return users;
};

export const updateUser = async (
  id: string,
  user: { name: string; email: string; age: number }
) => {
  await update(ref(database, `users/${id}`), user);
};

export const deleteUser = async (id: string) => {
  await remove(ref(database, `users/${id}`));
};
