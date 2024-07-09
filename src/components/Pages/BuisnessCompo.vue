<template>
<div>
    Buisness
</div>
<h1>{{ about.position }}</h1>

<div v-for="(index,items) in buisnessnews" :key="items">
    <img :src="index.urlToImage" alt="" width="100%">
    <h4 style="text-align: center;">{{ index.title }}</h4>

</div>
</template>
<script>
export default{
    props:['about'],

    data(){
        return{
            buisnessnews:[]

        };
    },
    async mounted(){
      let respo=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a285c7d6c6084dbd90549b2262d29620')
      
     
      if(respo.status!==200){
        console.error('bad request from  server');
      }
      let data=await respo.json()
      
      this.buisnessnews =data.articles;
      console.log(this.buisnessnews);


    }


    
}

</script>