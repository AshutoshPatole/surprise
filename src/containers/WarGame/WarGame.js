import MyAppBar from "../../components/AppBar";
import { getUserDetails } from "../../utils/user_details";
import "./WarGame.css";
import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
const WarGame = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  const u = getUserDetails();
  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("http://localhost:8000/u/get-questions");
      const responseData = await response.json();
      console.log(responseData);
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
  return (
    <div>
      <MyAppBar></MyAppBar>
      <div className="levels">
        <div className="sidebar">
          <h2>Levels</h2>
          <ul>
            {data.map((level) => (
              <li key={level.level}>
                <p onClick={() => setIndex(level.level)}>War {level.level}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="levels-info">
          <div className="question">
            <p>{data[index].question} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarGame;
