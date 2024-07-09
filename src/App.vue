<template>
 
    <TheNavigation />

    <router-view :user="user" :about="about" :name="name"></router-view>
    
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CookiesCompo></CookiesCompo>
 
<FooterView></FooterView>

</template>

<script>

// import HomePage from './components/HomePage.vue';
import TheNavigation from './components/TheNavigation.vue';
import CookiesCompo from '../src/components/Pages/CookiesCompo.vue'

import FooterView from './components/FooterView.vue';

export default {
  data(){
    return{
      user: {
        name: "John Doe",
        age: 30
      },
        about:{
        position:'Buisness man',
      }
    }

  },
  name: 'App',
  components: {
    TheNavigation,CookiesCompo,FooterView
    
   
  }
}
</script>

<style>

</style>
