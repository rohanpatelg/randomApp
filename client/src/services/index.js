import axios from "axios";
import { io } from "socket.io-client";

let socket;
let isConnected = false;
let history = [];
const get = async () => {
  let res = await axios.get("http://localhost:3000");
  return res.data;
};

const socketConnection = () => {
  socket = io("http://localhost:3000");
  console.log("1st");
  socket.on("connect", () => {
    isConnected = true;
    console.log("client connected");
  });
};

async function emitHi(input){
  return new Promise(async (resolve, reject) => {
    console.log("emitting");
    await socket.emit("message", input);
    await socket.once("gg", (msg) => {
      console.log("inside client's gg");
      history.push(msg);
      console.log("history", history);
      resolve(history)
    });
    
  });
};

export { get, socketConnection, emitHi, isConnected };
