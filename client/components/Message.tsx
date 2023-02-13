import React from "react";

interface Props {
  props: {
    room: number;
    author: string;
    message: string;
    time: number;
  };
  username: string;
}
const Message = ({ props, username }: Props) => {
  return (
    <div
      className={username === props.author ? "mine message" : "other message"}
    >
      <span className="author">{props.author}</span>
      <p className="dm">{props.message}</p>
      <span className="date">{props.time}</span>
    </div>
  );
};

export default Message;
