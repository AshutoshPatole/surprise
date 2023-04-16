import MyAppBar from "../../components/AppBar";
import "./WarGame.css";
import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import SshDetails from "../../components/connection/Ssh";
import Dialog from "../../components/Dialog";
import { getUserDetails } from "../../utils/user_details";
import { reducePrize } from "../../utils/reduce";

const WarGame = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const [timeAway, setTimeAway] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("http://localhost:8000/u/get-questions");
      const responseData = await response.json();
      setData(responseData);
    }
    fetchQuestions();

    let startTime = performance.now();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startTime = performance.now();
      } else {
        const endTime = performance.now();
        setTimeAway((timeAway) => timeAway + (endTime - startTime));
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  const secondsAway = Math.round(timeAway / 1000);
  reducePrize({ time: secondsAway * 10 });
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
            {data.map((level, i) => (
              <li key={level.level}>
                <p
                  className={i + 1 === index ? "selected" : ""}
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
            <p>Time away from page: {secondsAway} seconds</p>
            <p>{data[index].question} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarGame;
