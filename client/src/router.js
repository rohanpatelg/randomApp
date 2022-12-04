import {createRouter,createWebHistory} from 'vue-router';
import Homepage from './components/homepage.vue';
import Game from './components/game.vue';
export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {   path:'/',
            component:Homepage,

        },
        {
            path:'/rooms/:id',
            component:Game
        }
    ]
})