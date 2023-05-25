import { io } from "socket.io-client";

const url = "http://localhost:8000/";

export const socket = io(url, {
    autoConnect: false,
});
// socket.on("connect", () => {
//     console.log("Socket connected", socket.id);
// });