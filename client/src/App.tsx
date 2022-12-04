import { useState } from "react";
import io from "socket.io-client";
import Chat from "../components/Chat";
const socket = io.connect("http://localhost:3000");
function App() {
  const [userName, setUserName] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");

  const joinRoom = () => {
    if (userName.length > 1 && roomName.length > 1) {
      socket.emit("join_room", roomName);
    }
  };
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-2 h-screen">
      <h3 className="p-2">Join Chat</h3>
      <input
        className="p-2"
        type="text"
        placeholder="What's your name?"
        onChange={e => {
          setUserName(e.target.value);
        }}
      />
      <input
        className="p-2"
        type="text"
        placeholder="The name of the room..."
        onChange={e => {
          setRoomName(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>

      <Chat socket={socket} userName={userName} roomName={roomName} />
    </div>
  );
}

export default App;
