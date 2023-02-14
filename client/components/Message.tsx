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
  const hours = Number(String(props.time).split(":")[0]);
  const minutes = Number(String(props.time).split(":")[1]);
  return (
    <div
      className={
        username === props.author
          ? "mine message angle-left "
          : "other message angle-right"
      }
    >
      <span className="author">{props.author}</span>
      <p className="dm">{props.message}</p>
      <span className={username === props.author ? "date" : "dateOther"}>
        {`${hours < 10 ? `0${hours}` : hours} : ${
          minutes < 10 ? `0${minutes}` : minutes
        }`}
      </span>
    </div>
  );
};

export default Message;
