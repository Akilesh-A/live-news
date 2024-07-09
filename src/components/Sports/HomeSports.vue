<template>
    <div>

        <div class="container">
            <!-- <div>
                <button @click="onclick"> Click</button>
            </div> -->
            <div class="row">
                <div class="col-lg-4 col-sm-12" v-for="(item, index) in cricketNews" :key="index">
                    <div class="card">
                        <img :src="item.urlToImage" class="card-img-top image" alt="...">

                        <div class="card-body">
                            <h5 class="mt-2 mb-3"> {{ item.title }}</h5>
                            <p> {{ item.description }}</p>
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
            date:''
            
        }
    },
    mounted() {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=+${date}+&sortBy=publishedAt&apiKey=a285c7d6c6084dbd90549b2262d29620')
            .then(response => response.json())
            .then(data => {
                console.log(data.articles);
                this.cricketNews = data.articles;
                

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        window.onload = () => {
            // console.log(this.newDate());
            let year= new Date().getFullYear();
            let month=new Date().getMonth()+1;
            let day=new Date().getDate();
            // console.log(new Date().getMonth()+1);
            let finalDate=`${year}-${month}-${day}`
            this.date=finalDate;
            // console.log(this.date);
            

         
        };
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
