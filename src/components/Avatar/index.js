import React, { useEffect, useState } from "react";
import "./style.scss";

function Avatar({ name, imageUrl, onClick, activeChatRoom, id, connected }) {
  const [wasClicked, setWasClicked] = useState();
  useEffect(() => {
    if (activeChatRoom && id && activeChatRoom === id) {
      setWasClicked(true);
    }
  }, [activeChatRoom, id]);
  return (
    <button className="avatar" onClick={onClick}>
      {!wasClicked && !connected && (
        <span className="avatar-dot avatar-dot--grey" />
      )}
      {wasClicked && !connected && (
        <span className="avatar-dot avatar-dot--orange" />
      )}
      {connected && <span className="avatar-dot avatar-dot--green" />}
      <img className="avatar-photo" name={name} src={imageUrl} alt="user" />
      <span className="avatar-name"> {name}</span>
    </button>
  );
}

export default Avatar;
