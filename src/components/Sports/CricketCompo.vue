<template>
    <div>
        <h1>{{ name }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-12" v-for="(item, index) in cricketNews" :key="index">
                    <div class="card">
                        <img :src="item.urlToImage" class="card-img-top image" alt="...">

                        <div class="card-body">
                            <p class="mt-2 mb-3"> {{ item.title }}</p>  
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
            name: 'crickt',
            cricketNews: [],

        }
    },
    mounted() {
        const apiKey='a285c7d6c6084dbd90549b2262d29620'
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.articles);
                this.cricketNews=data.articles
              
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {

    },
    computed: {

    }
}

</script>

<style>
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
