import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const levels = [
  { level: 0, name: "Bandit Level 0", link: "/war/0" },
  { level: 1, name: "Bandit Level 1", link: "/war/1" },
  { level: 2, name: "Bandit Level 2", link: "/war/2" },
  { level: 3, name: "Bandit Level 3", link: "/war/3" },
  // add more levels here
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Levels</h2>
      <ul>
        {levels.map((level) => (
          <li key={level.level}>
            <Link to={level.link}>{level.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
