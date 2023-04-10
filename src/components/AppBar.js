import { getUserDetails } from "../utils/user_details";
import { Link } from "react-router-dom";
import coin from "../assets/coin.png";
import { useState, useEffect, React } from "react";
function MyAppBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserDetails()
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
        <Link
          to="/intro"
          style={{ margin: 100, color: "greenyellow", textDecoration: "none" }}
        >
          <h5>Information</h5>
        </Link>
        <Link
          to="/war"
          style={{ margin: 0, color: "greenyellow", textDecoration: "none" }}
        >
          <h5>WarGame</h5>
        </Link>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <img
            src={coin}
            style={{ width: "50px", height: "40px", marginRight: "5px" }}
            alt="coin"
          ></img>
          <p style={{ margin: 0, fontSize: "16px", color: "white" }}>
            {user.prize}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyAppBar;
