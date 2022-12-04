import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from "http";
import { Server } from "socket.io";
import {User} from '../server/classes/user.js'

let users= [];
let namespaces =[];
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors:{
        origin:'*'
    }
 });


io.on("connection", (socket) => {
  // ...
  
  socket.on('message',(msg)=>{
    console.log("recieved msg");io.emit('gg',msg);
  });
  socket.on('disconnect',()=>{
    socket.disconnect();
      console.log("disconnected");
  });
  socket.on('createRoom',(url)=>{
    console.log("recieved create room");
    io.of(`/${url}`).on("connect", (socket) => {
      console.log("Room created");
  })
  
});
});



httpServer.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
 
app.get('/', (req, res) => {
  res.send('hello ')
  
});