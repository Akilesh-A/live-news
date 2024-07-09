import { createApp } from 'vue'
import App from './App.vue';
import {createRouter,createWebHistory} from  "vue-router";
import HomePage from './components/Pages/HomePage.vue'
import PoliticsCompo from './components/Pages/PoliticsCompo.vue';
import SportsCompo  from './components/Pages/SportsCompo.vue';
import BuisnessCompo from './components/Pages/BuisnessCompo.vue';
import ClimateCompo from './components/Pages/ClimateCompo.vue';

import HomeSports from './components/Sports/HomeSports.vue';
import CricketCompo from './components/Sports/CricketCompo.vue';
import FootballCompo from './components/Sports/FootballCompo.vue';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';







const routes=[
    {
        path:'/',
        component:HomePage,
       
    },
    {
        path:'/politicscompo',
        component:PoliticsCompo,
    },
    {
        path:'/sportscompo',
        component:SportsCompo,
        props: {
            name: "I'm Akilesh message from parent component to child component (props)           MAIN.JS"
        },
        children: [
           
            {
                path:'',
                component:HomeSports,
            },
             {
                path: '/cricketcompo', 
                component: CricketCompo,
            },
           {
            path:'/footballcompo',
            component:FootballCompo,
           }
          
            
          ]
    },
    {
        path:'/buisnesscompo',
        component:BuisnessCompo,
    },
    {
        path:'/climatecompo',
        component:ClimateCompo,
        props:{
            climate:"i ma climate props from main .js "
        }
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:routes,
})

const app=createApp(App);
app.use(router);
app.mount('#app')
