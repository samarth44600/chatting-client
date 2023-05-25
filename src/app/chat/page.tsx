"use client";
import Chat from "@/components/Chat/Chat";
import { socket } from "@/utils/socket";
import React, { useEffect, useState } from "react";

type Props = {};

const Message = (props: Props) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket.on("userName", (data: { useName: string }) => {
      setUserName(data.useName);
    });

    return () => {
      socket.off("useName");
    };
  }, []);

  console.log("userName", userName);

  return <Chat />;
};

export default Message;
