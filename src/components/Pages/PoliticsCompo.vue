<template>
    <!-- <div>
        About us
    </div>
    <h1>{{ user.name }}</h1> -->
    <div class="container">
            
            <div class="row">
                <div class="col-lg-4 col-sm-12" v-for="(item, index) in Politicsdata" :key="index">
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


</template>

<script>
export default {
    props: ['user'],

    data(){
        return{
            Politicsdata:[],

        }
    },
async mounted(){
    try{
        let response=await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a285c7d6c6084dbd90549b2262d29620')
        if(!response){
            throw new Error('Failed ')
        }
        // console.log(await response.json());
        let data=await response.json();
       
        this.Politicsdata=data.articles;
        console.log(this.Politicsdata);

   
    }catch(Error){
        console.log(Error);

    }
}
}


</script>
