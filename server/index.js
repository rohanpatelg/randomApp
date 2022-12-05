import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from "http";
import { Server } from "socket.io";
import {User} from '../server/classes/user.js'
import { createNamespace,onConnectAndDisconnect,namespaces} from './namespace.js';

let users= [];

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors:{
        origin:'*'
    }
 });

createNamespace('/',io);



httpServer.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
 
app.get('/', (req, res) => {
  res.send('hello ')
  
});