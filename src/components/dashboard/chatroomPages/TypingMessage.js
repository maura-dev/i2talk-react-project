import React from "react";
import TypingAnimation from "./TypingAnimation";


const TypingMessage = ({ user }) => {
  return (
    <div className="message-item">
      <div className="message-avatar-container">
        <p>{user.username}</p>
        {console.log(`${user.username} is typing`)}
      </div>
      <TypingAnimation></TypingAnimation>
    </div>
  );
};

export default TypingMessage;