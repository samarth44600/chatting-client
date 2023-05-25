import React, { useState } from "react";
import styles from "./Chat.module.scss";
import { messages } from "@/utils/messages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/redux/slices/messageSlice";
import { socket } from "@/utils/socket";
type Props = {};

const CreateMessage = (props: Props) => {
  const [message, setMessage] = useState("");
  const data = {
    userId: 0,
    textMessage: message,
  };
  const dispatch = useDispatch();
  const { userName } = useSelector((state: any) => state.user);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("message sent");
    dispatch(addMessage(data));
    console.log("messages: ", messages);

    // socket
    socket.emit("message", {
      textMessage: message.trim(),
      id: socket.id,
      username: userName,
    });

    setMessage("");
  };
  return (
    <div className={styles.createMessage}>
      <form onSubmit={handleSendMessage} className={styles.form}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
          placeholder={"Write your message here..."}
          autoFocus
        />
        <button type="submit" className={styles.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;
