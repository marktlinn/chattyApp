import React from "react";

interface Props {
  props: {
    room: number;
    author: string;
    message: string;
    time: number;
  };
  user: string;
}
const Message = ({ props, user }: Props) => {
  const username = props.author === user ? "me" : "other";
  console.log(username);
  return (
    <div className={`${username === "me" ? "mine message" : "other message"}`}>
      <span className="author">{props.author}</span>
      <p className="dm">{props.message}</p>
      <span className="date">{props.time}</span>
    </div>
  );
};

export default Message;
