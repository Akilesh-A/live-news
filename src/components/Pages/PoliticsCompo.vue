<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12" v-for="(article, index) in articles" :key="index">
          <div class="card">
            <img :src="article.urlToImage" class="card-img-top image" alt="...">
            <div class="card-body">
              <h5 class="mt-2 mb-3">{{ article.title }}</h5>
              <p>{{ article.description }}</p>
              <a :href="article.url" target="_blank">{{ article.source.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: []
      };
    },
  
    mounted() {
      const apiKey = 'a285c7d6c6084dbd90549b2262d29620';
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${apiKey}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.articles = data.articles; // Store articles in data property
          console.log(this.articles); // Log articles to console
          // Further processing of data if needed
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Log error if fetch fails
        });
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  