import React from "react";
import { getUserDetails } from "../utils/user_details";
import { Link } from "react-router-dom";
import Login from "../containers/Login/Login";

function MyAppBar() {
  const u = getUserDetails();
  return (
    <div style={{ backgroundColor: "#333", height: "64px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          padding: "0 16px",
        }}
      >
        <h3 style={{ margin: 0, color: "greenyellow" }}>PHack</h3>
        <Link to="/information">
          <h5 style={{ margin: 100, color: "greenyellow" }}>Information</h5>
        </Link>
        <Link to="/war">
          <h5 style={{ margin: 0, color: "greenyellow" }}>WarGame</h5>
        </Link>
      </div>
    </div>
  );
}

export default MyAppBar;
