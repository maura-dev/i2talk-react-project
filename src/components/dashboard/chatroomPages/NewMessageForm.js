import React from "react";
import TextInput from '../dashboardComponents/textArea';

const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,
}) => {
  return (
    <div className="chat-form">
      <form id="pmessageForm">
        <TextInput
          id="pmsg-input"
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Type message here"
          className="textScrollbar"
          rows="1"
          onKeyPress={handleStartTyping}
          onKeyUp={handleStopTyping}
          autoCapitalize= "sentences"
          autoComplete="on"
        />
        <button
          type="submit"
          onClick={handleSendMessage}
          className="pmsg-btn"
        >
          <i className="far fa-paper-plane"></i>
        </button>
        {/* <button className="pmsg-btn"><i className="far fa-clock"></i></button> */}
      </form>

    </div>
    
  );
};

export default NewMessageForm;