interface createConnectionProps {
  serverUrl: string;
  roomId: string;
}

const createConnection = ({ serverUrl, roomId }: createConnectionProps) => {
  // A real implementation would actually connect to the server
  const connectMessage =
    '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "...";
  const disconnectMessage =
    '❌ Disconnected from "' + roomId + '" room at ' + serverUrl;

  return {
    connect: () => console.log(connectMessage),
    disconnect: () => console.log(disconnectMessage),
  };
};

export default createConnection;
