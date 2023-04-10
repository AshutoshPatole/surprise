import React from "react";
import "./Ssh.css";

const SshDetails = ({ host, port, user }) => {
  return (
    <div className="ssh-details">
      <h4>SSH Details:</h4>
      <div className="ssh-detail">
        <span className="ssh-label">Host:</span>
        <span className="ssh-value">{host}</span>
      </div>
      <div className="ssh-detail">
        <span className="ssh-label">Port:</span>
        <span className="ssh-value">{port}</span>
      </div>
      <div className="ssh-detail">
        <span className="ssh-label">Username:</span>
        <span className="ssh-value">{user}</span>
      </div>
    </div>
  );
};

export default SshDetails;
