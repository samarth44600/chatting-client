import React from "react";
import styles from "./Chat.module.scss";

type Props = { textMessage?: string };

const SentMessage = ({ textMessage }: Props) => {
  return (
    <div className={styles.sentMessageDiv}>
      <div className={styles.sentMessage}>
        <span className={styles.sentText}>
          {textMessage} 
        </span>
      </div>
    </div>
  );
};

export default SentMessage;
