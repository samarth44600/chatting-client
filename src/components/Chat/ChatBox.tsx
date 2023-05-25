/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import styles from "./Chat.module.scss";

import { useSelector } from "react-redux";
import { socket } from "@/utils/socket";
import InfoMessage from "./InfoMessage";
type Props = {};

const ChatBox = (props: Props) => {
  // const { message } = useSelector((state: any) => state.message);
  const [messages, setMessages] = useState<
    {
      textMessage: string;
      userId: string;
      userName: string;
      selfMessage: boolean;
      infoMessage: boolean;
    }[]
  >([]);
  const scrollRef = React.useRef<HTMLElement>(null);
  const scrollBottom = () => {
    scrollRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  // for user message
  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    scrollBottom();

    return () => {
      socket.off("message");
    };
  }, []);

  //for info message
  useEffect(() => {
    socket.on("infoMessage", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    scrollBottom();

    return () => {
      socket.off("infoMessage");
    };
  }, []);

  console.log("messages", messages);

  return (
    <div className={styles.chatBox}>
      {messages.map(
        (
          data: {
            textMessage: string;
            userId: string;
            userName: string;
            selfMessage: boolean;
            infoMessage: boolean;
          },
          index: number
        ) =>
          data.infoMessage ? (
            <InfoMessage key={index} textMessage={data.textMessage} />
          ) : data.selfMessage ? (
            <SentMessage textMessage={data.textMessage} key={index} />
          ) : (
            <ReceivedMessage textMessage={data.textMessage} key={index} />
          )
      )}
      <span ref={scrollRef}></span>
    </div>
  );
};

export default ChatBox;
