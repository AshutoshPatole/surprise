import MyAppBar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import { getUserDetails } from "../../utils/user_details";
const WarGame = () => {
  const u = getUserDetails();
  return (
    <div>
      <Sidebar></Sidebar>

      <MyAppBar></MyAppBar>
      <div className="info">
        <h1>Hi, {u.userName}</h1>
      </div>
    </div>
  );
};

export default WarGame;