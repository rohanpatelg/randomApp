import axios from 'axios';
import { io} from 'socket.io-client';


let socket;
let isConnected = false;
let history=[];
const get = async ()=>{
    let res= await axios.get("http://localhost:3000"); 
    return res.data;
}

const socketConnection =  ()=>{
     socket =  io("http://localhost:3000");
     socket.on('connect',()=>{
            isConnected=true;
            console.log('client connected')
            socket.on('gg',(msg)=>{
                history.push(msg);
                console.log(history[history.length-1]);
            });
        })
}

const emitHi = (input) =>{
    socket.emit('message',input);
    console.log("emitted")
}


export {get,socketConnection,emitHi,isConnected,history}