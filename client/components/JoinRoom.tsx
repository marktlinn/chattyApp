import React from "react";
type Props = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  joinRoom: () => void;
  roomName: string;
};

const JoinRoom = ({ setUserName, setRoomName, joinRoom, roomName }: Props) => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-2 h-screen">
      <h3 className="p-2">Join Chat</h3>
      <input
        className="p-2 w-full max-w-[300px]"
        type="text"
        placeholder="What's your name?"
        onChange={e => {
          setUserName(e.target.value);
        }}
      />
      <select
        name="room"
        defaultValue={roomName}
        id="room"
        className="p-2 w-full max-w-[300px]"
        onChange={e => {
          setRoomName(e.target.value);
        }}
      >
        <option value="101">101</option>
        <option value="CodingParadiso">Coding Paradiso</option>
        <option value="CodingInferno">Coding Inferno</option>
      </select>
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default JoinRoom;
