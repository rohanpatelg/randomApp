<script setup>

import {onMounted, onUpdated, ref, watch} from 'vue';
import {socket} from '../src/services/index.js'

const input = ref('');
let chat =ref();
let history=[];
async function emitSomething(){
  socket.emit('message',input.value)
}
onMounted(async ()=>{
  socket.on('gg',(msg)=>{
    console.log("Got gg");
    history.push(msg);
    console.log(history)
    chat.value=msg;
  })
})


</script>

<template>
    <div class="w-full">
      <div class="flex flex-col w-full p-4 gap-4">
        <input type="text" class=" p-2 w-[360px] rounded-lg h-10 bg-gray-200 hover:appearance-none" v-model="input"  />
        <button class="w-40 bg-blue-200 h-10" @click.prevent="emitSomething">
          Click Me
        </button>
      </div>
      <div v-if="chat?.length">
        {{chat}}
      </div>
    </div>
  
</template>

<style scoped>

</style>
