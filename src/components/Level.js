import React from "react";

const Level = ({ levelData }) => {
  const { id, question, answer } = levelData;

  return (
    <div>
      <h1>Bandit Level {id}</h1>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default Level;
