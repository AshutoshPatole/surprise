import React from "react";
import { getUserDetails } from "../utils/user_details";
import { Link } from "react-router-dom";
import coin from "../assets/coin.png";

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
        <Link to="/intro">
          <h5 style={{ margin: 100, color: "greenyellow" }}>Information</h5>
        </Link>
        <Link to="/war">
          <h5 style={{ margin: 0, color: "greenyellow" }}>WarGame</h5>
        </Link>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          {" "}
          <img
            src={coin}
            style={{ width: "50px", height: "40px", marginRight: "5px" }}
            alt="coin"
          ></img>
          <p style={{ margin: 0, fontSize: "16px", color: "white" }}>
            {u.prize}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyAppBar;
