import React, { useState } from "react";
import "./UserComponents.css";
import { updateUser } from "../services/firebaseService";
import { User } from "../types/userTypes";

interface UpdateUserProps {
  userId: string;
}

const UpdateUserComponent: React.FC<UpdateUserProps> = ({ userId }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData: Partial<User> = { name, age, email };
    updateUser(userId, updatedData);
    setName("");
    setAge(0);
    setEmail("");
  };

  return (
    <div className="user-form">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Update Age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <input
          type="email"
          placeholder="Update Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;
