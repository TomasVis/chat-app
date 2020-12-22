import React, { useState } from "react";
import { ACTION_TYPES } from "../localState";
import "./style.scss";

function ChatInput({ dispatch, activeChatRoom }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const sendMessage = () => {
    if (value) {
      dispatch({
        type: ACTION_TYPES.ADD_NEW_MESSAGE,
        payload: { message: value, chatRoomId: activeChatRoom, sender: "user" },
      });
    }

    dispatch({
      type: ACTION_TYPES.SET_IS_REQUESTING_ANSWER,
      payload: true,
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
      setValue("");
    }
  };

  return (
    <div className="chat-input">
      <input
        className="chat-input-textfield"
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <button
        className="chat-input-button"
        onClick={() => {
          sendMessage();
          setValue("");
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
