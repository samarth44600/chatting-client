"use client";
import React from "react";
import CreateMessage from "./CreateMessage";
import styles from "./Chat.module.scss";
import ChatBox from "./ChatBox";
type Props = {};

const Chat = (props: Props) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatArea}>
        <ChatBox />
        <CreateMessage />
      </div>
    </div>
  );
};

export default Chat;
