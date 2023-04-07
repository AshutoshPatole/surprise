import { Routes, Route } from "react-router-dom";
import Intro from "../containers/Introduction/Intro";
import Login from "../containers/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/intro" element={<Intro />} />
    </Routes>
  );
};

export default AppRoutes;
