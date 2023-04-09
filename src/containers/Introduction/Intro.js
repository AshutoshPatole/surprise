import MyAppBar from "../../components/AppBar";
import { getUserDetails } from "../../utils/user_details";
import "./Intro.css";
const Intro = () => {
  const u = getUserDetails();
  return (
    <div>
      <MyAppBar></MyAppBar>
      <div className="info">
        <h1>Hi, {u.userName}</h1>
        <p>
          Welcome to our new challenge website where your problem-solving skills
          will be put to the test! The premise is simple: solve a series of
          challenges and win amazing prizes!
        </p>
        <p>
          To make the challenges more exciting and challenging, we've added a
          unique twist. Please note that the initial prize money for the
          challenges is displayed at the top of the page. Each challenge has a
          hidden clue that can help you solve the puzzle, but it comes at a cost
          <b>
            . Every time you use the clue button, the prize money will be
            reduced by 500!
          </b>
          So, be careful and use your best judgment when deciding whether or not
          to use the clue button.
        </p>
        <p>
          The details for the host to connect to are provided at the WarGame
          page. Once you've successfully connected to the host, you'll be able
          to access all the files and resources stored on the server.
        </p>
        <p>
          Please note that after completing each level of the challenge, you
          will need to log out and then log back in using a different username.
          This is necessary to ensure that the system resources are efficiently
          used.
        </p>
      </div>
    </div>
  );
};

export default Intro;
