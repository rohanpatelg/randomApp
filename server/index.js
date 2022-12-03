import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from "http";
import { Server } from "socket.io";
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
    console.log("recieved msg");io.emit('gg',msg);});
});
// app.use(cors({
//     origin:'*'
// }))
httpServer.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
 
app.get('/', (req, res) => {
  res.send('hello ')
  
});

