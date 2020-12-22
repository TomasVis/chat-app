import React, { useReducer } from "react";
import ChatRoom from "./ChatRoom";
import Sidebar from "./Sidebar";
import { INITIAL_STATE, reducer } from "./localState";
import people from "./mockPeople";
import "./style.scss";

function Chat() {
  const [localState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div className="chat">
      <div className="chat-content"></div>

      <ChatRoom
        activeChatRoom={localState?.activeChatRoom}
        fakeMessages={localState?.fakeMessages}
        messages={localState?.messages}
        isRequestAnswer={localState?.isRequestAnswer}
        fakeMessagePossition={localState?.fakeMessagePossition}
        localState={localState}
        people={people}
        dispatch={dispatch}
      />

      <Sidebar
        fakeMessages={localState?.fakeMessages}
        activeChatRoom={localState?.activeChatRoom}
        dispatch={dispatch}
        people={people}
      />
    </div>
  );
}

export default Chat;
