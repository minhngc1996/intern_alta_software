import React from "react";
import "./UserComponents.css";
import { deleteUser } from "../services/firebaseService";

interface DeleteUserProps {
  userId: string;
}

const DeleteUserComponent: React.FC<DeleteUserProps> = ({ userId }) => {
  const handleDelete = () => {
    deleteUser(userId);
  };

  return <button className="delete-button" onClick={handleDelete}>Delete User</button>;
};

export default DeleteUserComponent;
