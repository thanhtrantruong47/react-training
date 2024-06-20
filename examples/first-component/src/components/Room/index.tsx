import { useState, useEffect } from "react";
import createConnection from "./createConnection";

const serverUrl = "https://localhost:1234";

interface RoomProps {
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

export default Room;
