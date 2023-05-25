import React from "react";
import styles from "./Chat.module.scss";
type Props = { textMessage?: string };

const InfoMessage = ({ textMessage }: Props) => {
  return (
    <div className={styles.infoMessageDiv}>
      <div className={styles.infoMessage}>
        <span className={styles.infoText}>{textMessage}</span>
      </div>
    </div>
  );
};

export default InfoMessage;
