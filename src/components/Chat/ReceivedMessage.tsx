import React from "react";
import styles from "./Chat.module.scss";

type Props = { textMessage?: string };

const ReceivedMessage = ({ textMessage }: Props) => {
  return (
    <div className={styles.receivedMessageDiv}>
      <div className={styles.receivedMessage}>
        <span className={styles.receivedText}>
          {textMessage} 
        </span>
      </div>
    </div>
  );
};

export default ReceivedMessage;
