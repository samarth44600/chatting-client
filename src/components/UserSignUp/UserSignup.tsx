"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import styles from "./UserSignupPage.module.scss";
import { useRouter } from "next/navigation";
import { socket } from "@/utils/socket";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

type Props = {};

const UserSignup = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setusername] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.connect();
    socket.on("connect", () => {
      console.log("Socket connected", socket.id);
      socket.emit("set-userName", { userName: userName });
    });
    dispatch(setUser({ userName: userName, userId: socket.id }));
    console.log("Socket id:", socket.id);
    router.push("/chat");
    setusername("");
  };

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Socket connected on client side");
    });

    return () => {
      socket.off("connection", () => {
        console.log("server disconnected on client side");
      });
    };
  }, []);

  return (
    <div className={styles.userSignupPage}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            className={styles.input}
            onChange={(e) => setusername(e.target.value)}
            value={userName}
            autoFocus
          />
          <button
            type="submit"
            disabled={!userName ? true : false}
            className={`${styles.submitBtn} ${
              !userName && styles.submitBtnDisabled
            }`}
          >
            Enter Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
