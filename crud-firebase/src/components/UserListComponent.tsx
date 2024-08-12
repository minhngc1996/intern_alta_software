import React, { useEffect, useState } from "react";
import "./UserComponents.css";
import { getUsers } from "../services/firebaseService";
import { User } from "../types/userTypes";
import UpdateUserComponent from "./UpdateUserComponent";
import DeleteUserComponent from "./DeleteUserComponent";

const UserListComponent: React.FC = () => {
  const [users, setUsers] = useState<{ [key: string]: User }>({});
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  useEffect(() => {
    getUsers((data) => {
      setUsers(data || {});
    });
  }, []);

  const handleUpdateClick = (userId: string) => {
    setEditingUserId(userId);
  };

  const handleCloseUpdate = () => {
    setEditingUserId(null);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User Management</h2>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((userId) => (
            <tr key={userId} className="user-list-row">
              <td>{users[userId].name}</td>
              <td>{users[userId].age}</td>
              <td>{users[userId].email}</td>
              <td className="user-actions">
                <button
                  className="user-action-button update-button"
                  onClick={() => handleUpdateClick(userId)}
                >
                  Update
                </button>
                <DeleteUserComponent userId={userId} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUserId && (
        <div className="update-modal">
          <div className="update-modal-content">
            <button className="close-button" onClick={handleCloseUpdate}>
              &times;
            </button>
            <UpdateUserComponent userId={editingUserId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserListComponent;
