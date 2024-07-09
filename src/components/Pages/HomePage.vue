<template>
  <div class="container">
    <div class="content-text mt-5">
      <h2 class="text-center">News Live</h2>
      <h2>{{ name }}</h2>
      <p class="text-center">Total data <span class="badge text-bg-warning">{{ filteredNews.length }}</span></p>
    </div>
    <div class="row inputs">
      <div class="col-xl-6 col-md-6 col-sm-10 col-12">
        <input type="text" placeholder="Search..." class="form-control" v-model="search" />
      </div>
      <div class="col-xl-6 col-md-6 col-sm-10 col-12">
        <select class="form-control" v-model="country">
          <option>Select Country</option>
          <option value="1">😎 IND</option>
          <option value="2">😁 USA</option>
        </select>
      </div>
    </div>

    <div class="row mt-5 fullDetails">
      <div class="col-xl-4 col-sm-6 col-12" v-for="(item, index) in visibleNews" :key="index">
        <div v-if="!item">
          <h1>Loading...</h1>
        </div>
        <div class="card" v-else>
          <img :src="item.urlToImage" :alt="item.title" class="image" />
          <div class="card-body">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
            <a class="btn btn-primary" :href="item.url" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4" v-if="visibleNews.length <= filteredNews.length">
      <div class="col-12 text-center">
        <button class="btn btn-danger" @click="loadMore">Load More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      news: [],
      search: '',
      country: '',
      visibleCount: 6 // Initial number of visible news items
    };
  },
  computed: {
    filteredNews() {
      return this.news.filter(news => {
        return news.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    totalContent() {
      return this.filteredNews.filter(news => news.urlToImage);
    },
    visibleNews() {
      return this.totalContent.slice(0, this.visibleCount);
    }
  },
  methods: {
    loadMore() {
      this.visibleCount += 6;
    },
    fetchData() {
      fetch('/.netlify/functions/mydata/data')
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          this.news= data.articles ; 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
@import "@/assets/main.css";

.card .image {
  width: auto;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
}

.fullDetails {
  row-gap: 24px;
}

.card {
  margin-bottom: 20px;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
}

.card-body {
  position: relative;
  height: 323px;
}

.card-body a {
  position: absolute;
  bottom: 8px;
}

@media (max-width: 980px) {
  .inputs {
    gap: 20px;
  }
  .card-body {
    height: 327px;
  }
  .card-body a {
    bottom: 1px;
  }
}
</style>
