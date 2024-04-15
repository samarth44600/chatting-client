import { io } from "socket.io-client";

const isProduction = process.env.NODE_ENV === "production";

const url = isProduction ? "https://chatapi.samarth.com.np/" : "http://localhost:8008/";
export const socket = io(url, {
    autoConnect: false,
});
socket.on("connect", () => {
    console.log("Socket connected", socket.id);
});