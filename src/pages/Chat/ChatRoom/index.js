import React, { useEffect } from "react";
import ChatInput from "../ChatInput";
import ChatWindow from "../ChatWindow";
import { ACTION_TYPES } from "../localState";

import useFetchMessages from "../../../hooks/useFetchMessages";
import "./style.scss";

function ChatRoom({
  dispatch,
  messages,
  activeChatRoom,
  fakeMessages,
  isRequestAnswer,
  fakeMessagePossition,
  people,
}) {
  const { data, error, fetch } = useFetchMessages(people, activeChatRoom);
  const savedFakeMessages = fakeMessages?.find(
    ({ chatRoom }) => chatRoom === activeChatRoom
  )?.messages;
  const position = fakeMessagePossition[activeChatRoom] || 0;
  useEffect(() => {
    if (data) {
      dispatch({
        type: ACTION_TYPES.SAVE_FAKE_MESSAGES,
        payload: {
          chatRoom: activeChatRoom,
          messages: JSON.parse(JSON.stringify(data)),
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  useEffect(() => {
    if (!savedFakeMessages && activeChatRoom) {
      fetch();
    }
  }, [activeChatRoom, fetch, savedFakeMessages]);
  useEffect(() => {
    if (isRequestAnswer) {
      setTimeout(() => {
        if (savedFakeMessages?.[position]) {
          dispatch({
            type: ACTION_TYPES.ADD_NEW_MESSAGE,
            payload: {
              message: savedFakeMessages?.[position],
              chatRoomId: activeChatRoom,
              sender: "remote",
            },
          });
        }
      }, 2000);
    }
  }, [activeChatRoom, dispatch, isRequestAnswer, position, savedFakeMessages]);

  useEffect(() => {
    if (isRequestAnswer) {
      const object = {};
      object[activeChatRoom] = position + 1;
      dispatch({
        type: ACTION_TYPES.SET_FAKE_MESSAGE_POSITION,
        payload: object,
      });
      dispatch({
        type: ACTION_TYPES.SET_IS_REQUESTING_ANSWER,
        payload: false,
      });
    }
  }, [activeChatRoom, dispatch, isRequestAnswer, position]);
  return (
    <div className="chat-room">
      {error && <span>{error.message}</span>}
      <ChatWindow messages={messages} activeChatRoom={activeChatRoom} />
      <ChatInput dispatch={dispatch} activeChatRoom={activeChatRoom} />
    </div>
  );
}

export default ChatRoom;
