import React from 'react';
import AddUserComponent from '../components/AddUserComponent';

const AddUserPage: React.FC = () => {
  return (
    <div className="content">
      <h2 style={{textAlign:'center'}}>Add a New User</h2>
      <AddUserComponent />
    </div>
  );
};

export default AddUserPage;
