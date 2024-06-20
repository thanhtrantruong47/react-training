// https://react.dev/reference/react/useEffect#removing-unnecessary-object-dependencies

import { useState } from "react";
import Room from "../Room";

const ChatRoom = () => {
  const [roomId, setRoomId] = useState("");

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
          <option value=""></option>
        </select>
      </label>
      <hr />
      <Room roomId={roomId} />
    </>
  );
};

export default ChatRoom;
