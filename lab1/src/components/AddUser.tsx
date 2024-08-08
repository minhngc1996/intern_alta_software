// src/components/AddUser.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addNewUser } from "../features/users/userSlice";
import './AddUser.css'; // Import file CSS

const AddUser: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addNewUser({ name, email, age: Number(age) }));
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div className="add-user-container">
      <h2 className="title">Add User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
