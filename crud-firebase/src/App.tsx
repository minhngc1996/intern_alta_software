import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, UsersPage } from "./pages";
import Navbar from "./components/Navbar";
import AddUserPage from "./pages/AddUserPage";
import ListUserPage from "./pages/ListUserPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/list-user" element={<ListUserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
