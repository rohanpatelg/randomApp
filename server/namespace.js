
let namespaces=new Map();
let cnt=0;
function createNamespace(url,io){
    let namespace = io.of(url);
    onConnectAndDisconnect(namespace,io);
    
}

function onConnectAndDisconnect(namespace,io){
    namespace.on('connect',(socket)=>{
        console.log(`${socket.id} is connected`)
        namespaces.set(namespace.name,[socket.id]);
        socket.on('createNamespace',(url)=>{
            createNamespace(url,io);
        });
        socket.on('joinNamespace',(url)=>{
            console.log(url);
            if(namespaces.has('/'+url)){
                console.log("existing Room joined");
                namespaces.get('/'+url).push(socket.id);
            }
            else{
                console.log("Room does not exist");
            }
        })
        socket.on('disconnect',()=>{
                    console.log(`${socket.id} is disconnected`);
                   
                    
        })
    });
    
}

    

export {namespaces,createNamespace,onConnectAndDisconnect};