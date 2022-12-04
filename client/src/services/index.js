import axios from "axios";
import { io } from "socket.io-client";

// This map will hold all the sockets corresponding to each namespaces
let connections = new Map();

// This function will create a new Namespace
function createConnection(ns,url){
        if(!connections.has(url)){
                let socket = io(`http://localhost:3000${url}`);
                console.log('new namespace has been created')
                connections.set(url,socket);
        }
        return;
}



export { connections,createConnection};
