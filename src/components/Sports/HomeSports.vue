<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12" v-for="(item, index) in cricketNews" :key="index">
            <div class="card">
              <img :src="item.urlToImage" class="card-img-top image" alt="...">
              <div class="card-body">
                <h5 class="mt-2 mb-3">{{ item.title }}</h5>
                <p>{{ item.description }}</p>
                <a :href="item.url" target="_blank">{{ item.source.name }}</a>
              </div>
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
        cricketNews: []
      };
    },
  
    mounted() {
      const url = 'https://newsapi.org/v2/everything?q=cricket&apiKey=a285c7d6c6084dbd90549b2262d29620';
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data.articles);
          this.cricketNews = data.articles; // Store articles in data property
          // Further processing of data if needed
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Log error if fetch fails
        });
    }
  };
  </script>
  
  <style scoped>
  .image {
    width: 300px;
    height: 200px;
  }
  
  .card {
    margin-bottom: 20px;
    height: 90%;
  }
  
  .card-body {
    position: relative;
    height: 290px;
  }
  
  .card-body a {
    position: absolute;
    bottom: 8px;
    left: 5px;
  }
  </style>
  