import MyAppBar from "../../components/AppBar";
import "./WarGame.css";
import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import SshDetails from "../../components/connection/Ssh";
import Dialog from "../../components/Dialog";
import { getUserDetails } from "../../utils/user_details";

const WarGame = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("http://localhost:8000/u/get-questions");
      const responseData = await response.json();
      setData(responseData);
    }
    fetchQuestions();
  }, []);

  if (data === null) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  const sshData = {
    host: "localhost",
    port: 22,
    user: "bandit" + index,
  };

  const tips = {
    id: data[index]._id,
  };
  return (
    <div>
      <MyAppBar></MyAppBar>
      <div className="levels">
        <div className="sidebar">
          <h2>Levels</h2>
          <ul>
            {data.map((level) => (
              <li key={level.level}>
                <p
                  onClick={() => {
                    setIndex(level.level);
                  }}
                >
                  War {level.level}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="levels-info">
          <div className="connection-info">
            <SshDetails {...sshData}></SshDetails>
            <div className="tip">
              {/* <button>Tip</button> */}
              <Dialog {...tips}></Dialog>
            </div>
          </div>
          <div className="question">
            <p>{data[index].question} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarGame;
