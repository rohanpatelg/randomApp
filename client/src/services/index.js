import axios from "axios";
import { io } from "socket.io-client";


// const gglsiten = async()=>{
//     return new Promise((resolve,reject)=>{
//         socket.on("gg", (msg) => {   
//             console.log("KK")
//             history.push(msg);
//             resolve(history);
//           });
//     })
// }

        let socket = io("http://localhost:3000");
        console.log("1st");
        

// Async emit 
// async function emitHi(input){
//   return new Promise(async (resolve, reject) => {
//     socket.emit("message", input);
//     const h=await gglsiten()
//     resolve(h);
    
//   });
// };


export { socket };
