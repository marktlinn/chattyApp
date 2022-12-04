import { useState } from "react";

type Props = {
  socket: any;
  userName: String;
  roomName: String;
};

const Chat = ({ socket, userName, roomName }: Props) => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = async () => {
    if (message.length > 1) {
      const messageContent = {
        room: roomName,
        author: userName,
        message: message,
        time: `${new Date(Date.now()).getHours()} : ${new Date(
          Date.now()
        ).getMinutes()}`,
      };
      await socket.emit("send_message", messageContent);
    }
  };
  return (
    <main className="">
      <header>Chat</header>
      <section></section>
      <section>
        <input
          className="py-2"
          type="text"
          placeholder="Type here..."
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </section>
    </main>
  );
};

export default Chat;
