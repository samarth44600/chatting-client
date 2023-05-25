import { io } from "socket.io-client";

const isProduction = process.env.NEXT_APP_NODE_ENV === "production";
const url = isProduction ? "https://chatting-server.up.railway.app/" : "http://localhost:8000/";
export const socket = io(url, {
    autoConnect: false,
});
socket.on("connect", () => {
    console.log("Socket connected", socket.id);
});