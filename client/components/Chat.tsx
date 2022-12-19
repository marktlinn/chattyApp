import { useState, useEffect } from "react";
import Message from "./Message";
type Props = {
  socket: any;
  userName: String;
  roomName: String;
};

const Chat = ({ socket, userName, roomName }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [output, setOutput] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    socket.on("message_received", (data: object) => {
      console.log("data", data);
      setOutput((prev: {}[]) => [...prev, data]);
    });
  }, [socket]);

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
      if (currentUser === "") {
        setCurrentUser(String(messageContent.author));
      }
      setOutput((prev: {}[]) => [...prev, messageContent]);
      await socket.emit("send_message", messageContent);
    }
  };
  return (
    <main>
      <header>Chat</header>
      <br />
      <section className="outputSection">
        {output &&
          output.map((msg, i) => (
            <Message key={`key${i}`} props={msg} user={currentUser} />
          ))}
      </section>
      <section className="flex gap-1">
        <input
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
