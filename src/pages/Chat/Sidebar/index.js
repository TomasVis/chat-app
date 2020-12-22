import React from "react";
import Avatar from "../../../components/Avatar";
import { ACTION_TYPES } from "../localState";
import "./style.scss";
function Sidebar({ people, dispatch, activeChatRoom, fakeMessages }) {
  return (
    <div className="sidebar">
      {people && (
        <>
          {people.map(({ name, id, imageUrl }, index) => (
            <Avatar
              connected={fakeMessages?.find(({ chatRoom }) => chatRoom === id)}
              id={id}
              activeChatRoom={activeChatRoom}
              key={name + index}
              onClick={() => {
                dispatch({
                  type: ACTION_TYPES.CHANGE_ACTIVE_ROOM,
                  payload: id,
                });
              }}
              name={name}
              imageUrl={imageUrl}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Sidebar;
