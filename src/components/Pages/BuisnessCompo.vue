<template>
    <div>
      <div>
        Business
      </div>
      <h1>{{ about.position }}</h1>
  
      <div v-for="(article, index) in businessNews" :key="index">
        <img :src="article.urlToImage" alt="" width="100%">
        <h4 style="text-align: center;">{{ article.title }}</h4>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['about'], 
  
    data() {
      return {
        businessNews: [] 
      };
    },
  
    mounted() {  
      const apiKey = 'a285c7d6c6084dbd90549b2262d29620';
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.businessNews = data.articles; 
          console.log(this.businessNews);  
        })
        .catch(error => {
          console.error('Error fetching data:', error); 
        });
    }
  };
  </script>
  