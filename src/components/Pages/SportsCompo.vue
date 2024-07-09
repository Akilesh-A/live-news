<template>
   <div>
      <SportsNavbar></SportsNavbar>
      <router-view></router-view>
   </div>
</template>
<script>
import SportsNavbar from '../SportsNavbar.vue';

export default {
   components: {
      SportsNavbar
   }
}
</script>