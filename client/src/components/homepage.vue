<script setup>
import {onMounted, ref} from 'vue';
import {connections,createConnection} from '../services/index';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';

const route=useRoute();
const router=useRouter();
const input = ref('');
let url=ref('');
let chats =ref([]);

// This will send msg to server (chat service)
async function emitSomething(){
  connections.get('/').emit('message',input.value)
}

// generate random string that will be used as a new url:(Room id)
let randomString = (len)=>Math.random().toString(36).substring(2,len+2);

// This function will create Namespace with url generated
function createNamespace(){
  url.value = randomString(5);
  console.log(url);
  console.log(route.fullPath,"route");
  connections.get(route.fullPath).emit('createRoom',url.value);
  createConnection('','/'+url.value);
  console.log("created");
}

// Join the created namespace
function joinNamespace(){
  router.push(`/rooms/${url.value}`);

}

onMounted(async ()=>{
  // On mounting the component create a connection with namespace
  createConnection('',route.fullPath);
  let socket = connections.get(route.fullPath);

  // create a listner forchat service
  socket.on('gg',(msg)=>{
    console.log("Got gg");
    chats.value.push(msg);
    const node = document?.createElement('p');
    const text = document?.createTextNode(`${msg}`);
    node.appendChild(text);
    document.querySelector('#parent-chat').appendChild(node);
    input.value=null;
  })
});

// Before leaving to the new route destroy the socket corresponding to current route
onBeforeRouteLeave(()=>{
  console.log(connections.get('/'),route.fullPath);
  connections.get('/').close();
  connections.delete('/');
})


</script>

<template>
    <div class="w-full p-10">
      <div class="flex flex-col w-full p-4 gap-4">
        <input type="text" class=" p-2 w-[360px] rounded-lg h-10 bg-gray-200 hover:appearance-none" v-model="input"  />
        <button class="w-40 bg-blue-200 h-10" @click.prevent="emitSomething">
          Click Me
        </button>
      </div>
      <!-- chat section-->
      <div id="parent-chat" class="h-[500px] w-[70%] rounded-lg p-6 bg-red-200">
      </div>
      
      <!-- create random string for url-->
      <div class="w-full h-10 mt-2">
        <button v-if="!url.length" class="w-[200px] rounded bg-green-400" @click="createNamespace()" >
        Create a room    
      </button>
      <button v-else @click="joinNamespace">
        Join room
      </button>
      </div>
    </div>
  
</template>

<style scoped>

</style>
