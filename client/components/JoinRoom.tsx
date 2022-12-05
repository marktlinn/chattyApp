import React from "react";
type Props = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  joinRoom: () => void;
};

const JoinRoom = ({ setUserName, setRoomName, joinRoom }: Props) => {
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
    </div>
  );
};

export default JoinRoom;
