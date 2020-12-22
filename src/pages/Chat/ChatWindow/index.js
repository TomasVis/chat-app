import React, { useEffect, useRef } from "react";
import "./style.scss";

function ChatWindow({ messages, activeChatRoom }) {
  const newMessageRef = useRef();

  useEffect(() => {
    if (messages && newMessageRef.current) {
      newMessageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="chat-window">
      {messages && (
        <>
          {messages
            .filter(({ chatRoomId }) => chatRoomId === activeChatRoom)
            .map(({ message, sender }, index) => (
              <div
                className={`chat-window-message-${sender}`}
                key={message + index}
              >
                <span ref={newMessageRef} className="fade-in">
                  {" "}
                  {message}
                </span>
              </div>
            ))
            .reverse()}
        </>
      )}
    </div>
  );
}

export default ChatWindow;
