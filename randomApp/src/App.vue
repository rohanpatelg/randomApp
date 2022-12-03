<script setup>

import {onMounted, ref} from 'vue';
import {socketConnection,emitHi,isConnected,history} from '../src/services/index.js'

const input = ref('');
let chat =ref(history);
const emitSomething = async()=>{
   emitHi(input.value);
}
onMounted(()=>
  socketConnection()
)
</script>

<template>
    <div class="w-full">
      <div class="flex flex-col w-full p-4 gap-4">
        <input type="text" class=" p-2 w-[360px] rounded-lg h-10 bg-gray-200 hover:appearance-none" v-model="input"/>
        <button class="w-40 bg-blue-200 h-10" @click="emitSomething">
          Click Me
        </button>
      </div>
      {{chat[chat.length-1]}}
    </div>
  
</template>

<style scoped>

</style>
