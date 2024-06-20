// https://react.dev/reference/react/useEffect#removing-unnecessary-object-dependencies

import { useState, useEffect } from "react";

const serverUrl = "https://localhost:1234";

interface RoomProps {
  roomId: string;
}

interface createConnectionProps {
  serverUrl: string;
  roomId: string;
}

const Room = ({ roomId }: RoomProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
};

const ChatRoom = () => {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <Room roomId={roomId} />
    </>
  );
};

const createConnection = ({ serverUrl, roomId }: createConnectionProps) => {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
};

export default ChatRoom;
