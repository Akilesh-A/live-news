<template>
   <div>
      <!-- Sports live
       {{ name }} -->
   </div>
   <div class="row mb-3 NavContainer">
      <div class="items">
         <ul class="links">
            <li>
               <router-link to="/homesports" class="nav-link">Home</router-link>
            </li>
            <li>
               <router-link to="/cricketcompo" class="nav-link">Cricket</router-link>
            </li>

            <li>
               <router-link to="/footballcompo" class="nav-link">Football</router-link>
            </li>


         </ul>

      </div>

   </div>
</template>

<style>
.NavContainer {
   background-color: yellow;
   padding-top: 10px;
   width: 100%;
   height: 42px;
}

.items {
   display: flex;

   text-align: center;
   justify-content: center;


}

.links {
   display: flex;
   gap: 10px;


}

.links li {
   border-right: 1px solid black;
   text-decoration: none;
   list-style: none;
   padding-right: 10px;
}

.links li .nav-link {
   font-size: 16px;
   position: relative;
}
.links li .nav-link::after{
   content: "";
   position: absolute;
   bottom: -3px;
   left: 0; 
   width: 0px;
   height: 2px;
   transition: all 0.5s linear;

}
.links li .nav-link:hover::after{
   width: 100%;
    background-color: rgb(13, 13, 13);
  
}

</style>