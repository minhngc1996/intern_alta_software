import React, { useState } from "react";
import "./AddUserComponent.css";
import { User } from "../types/userTypes";
import { addUser } from "../services/firebaseService";

const AddUserComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age > 0 && email) {
      const newUser: User = { name, age, email };
      addUser(newUser);
      setName("");
      setAge(0);
      setEmail("");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="user-form-wrapper">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="user-form-group">
          <label htmlFor="name" className="user-form-label">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="user-form-input"
            required
          />
        </div>
        <div className="user-form-group">
          <label htmlFor="age" className="user-form-label">Age:</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="user-form-input"
            required
          />
        </div>
        <div className="user-form-group">
          <label htmlFor="email" className="user-form-label">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="user-form-input"
            required
          />
        </div>
        <button type="submit" className="user-form-button">Add User</button>
      </form>
    </div>
  );
};

export default AddUserComponent;
