import { useState, useEffect, useRef } from "react";
import Message from "./Message";
type Props = {
  socket: any;
  userName: string;
  roomName: string;
};

const Chat = ({ socket, userName, roomName }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [output, setOutput] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState("");
  const inputBox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket.on("message_received", (data: object) => {
      setOutput((prev: {}[]) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    if (inputBox.current) {
      inputBox.current.value = "";
    }
  };
  return (
    <main>
      <header>
        Room <strong>{roomName && roomName}</strong>
      </header>
      <br />
      <section className="outputSection">
        {output &&
          output.map((msg, i) => (
            <Message key={`key${i}`} props={msg} username={userName} />
          ))}
      </section>
      <form
        className="flex gap-1"
        onSubmit={e => {
          sendMessage(e);
        }}
      >
        <input
          type="text"
          placeholder="Type here..."
          onChange={e => {
            setMessage(e.target.value);
          }}
          ref={inputBox}
        />
        <button>Send</button>
      </form>
    </main>
  );
};

export default Chat;
