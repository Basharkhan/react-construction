import React, { useContext } from "react";
import { AuthContext } from "../backend/context/Auth";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="card shadow border-0">
      <div className="card-body p-4 sidebar">
        <h4>Sidebar</h4>
        <ul>
          <li>
            <a href="/admin/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/admin/services">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <button onClick={logout} className="btn blog-btn mt-4">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
