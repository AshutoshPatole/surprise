import { Routes, Route } from "react-router-dom";
import Intro from "../containers/Introduction/Intro";
import Login from "../containers/Login/Login";
import WarGame from "../containers/WarGame/WarGame";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/war" element={<WarGame />} />
    </Routes>
  );
};

export default AppRoutes;
