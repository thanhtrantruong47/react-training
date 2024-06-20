import { useState, useEffect } from "react";
import createConnection from "./createConnection";

const serverUrl = "https://localhost:1234";

interface RoomProps {
  roomId: string;
}

const Room = ({ roomId }: RoomProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (roomId !== "") {
      const options = {
        serverUrl: serverUrl,
        roomId: roomId,
      };
      const connection = createConnection(options);
      connection.connect();

      return () => connection.disconnect();
    }
    return () => {};
  }, [roomId]);

  return (
    <>
      {roomId !== "" ? (
        <>
          <h1>Welcome to the {roomId} room!</h1>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
        </>
      ) : (
        <>
          <h1>No room selected</h1>
          <p>Please select a room</p>
        </>
      )}
    </>
  );
};

export default Room;
