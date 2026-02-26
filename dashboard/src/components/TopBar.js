import React from "react";
import axios from "axios";

import Menu from "./Menu";

const TopBar = ({ user }) => {
  const handleLogout = () => {
    axios
      .get("https://mern-trading-platform-j9bk.onrender.com/logout", { withCredentials: true })
      .finally(() => window.location.reload());
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div className="user-info" style={{ marginRight: '20px' }}>
        {user && (
          <>
            <span style={{ marginRight: '8px' }}>Hi, {user}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
