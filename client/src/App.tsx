import { useState } from "react";
import * as io from "socket.io-client";
import Chat from "../components/Chat";
import JoinRoom from "../components/JoinRoom";

import { Routes, Route, useNavigate } from "react-router-dom";
const socket = io.connect("http://localhost:3000");
function App() {
  const [userName, setUserName] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const Navigate = useNavigate();
  const joinRoom = () => {
    if (userName.length > 1 && roomName.length > 1) {
      socket.emit("join_room", roomName);
      console.log(roomName);
      Navigate(`/room${roomName}`);
    }
  };
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-2 h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <JoinRoom
              setUserName={setUserName}
              setRoomName={setRoomName}
              joinRoom={joinRoom}
            />
          }
        />
        <Route
          path={`/room${roomName}`}
          element={
            <Chat socket={socket} userName={userName} roomName={roomName} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
