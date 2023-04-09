import MyAppBar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import { getUserDetails } from "../../utils/user_details";
import "./WarGame.css";
const WarGame = () => {
  const u = getUserDetails();
  return (
    <div>
      <MyAppBar></MyAppBar>
      <div className="levels">
        <Sidebar></Sidebar>

        <div className="levels-info">
          <h1>Hi, {u.userName}</h1>
        </div>
      </div>
    </div>
  );
};

export default WarGame;
