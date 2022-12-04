<script setup>
import { onMounted } from 'vue';
import { connections } from '../services/index.js';


onMounted(()=>{
   console.log(connections.get('/'));
})
</script>



<template>

    <div>Hello</div>
</template>