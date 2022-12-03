<script setup>

import {onMounted, onUpdated, ref, watch} from 'vue';
import {socketConnection,emitHi,isConnected} from '../src/services/index.js'
socketConnection();
const input = ref('');
let chat =ref([]);
async function emitSomething(){
  console.log('HI')
   chat.value=await emitHi(input.value);
   input.value='';
   console.log("no")
}

</script>

<template>
    <div class="w-full">
      <div class="flex flex-col w-full p-4 gap-4">
        <input type="text" class=" p-2 w-[360px] rounded-lg h-10 bg-gray-200 hover:appearance-none" v-model="input"  />
        <button class="w-40 bg-blue-200 h-10" @click.prevent="emitSomething">
          Click Me
        </button>
      </div>
      <div v-if="chat.length">
        {{chat[chat.length-1]}}
      </div>
    </div>
  
</template>

<style scoped>

</style>
