import MyAppBar from "../../components/AppBar";
import styles from "./Intro.css";
const Intro = () => {
  const user = JSON.parse(sessionStorage.getItem("u"));
  console.log(user);

  return (
    <div>
      <MyAppBar></MyAppBar>
      <h1> Hello world</h1>
    </div>
  );
};

export default Intro;
