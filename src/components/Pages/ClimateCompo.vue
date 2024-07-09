<template>



  <div class="container">
    {{ climate }}
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6 col-sm-12 col-12 text-center">
        <input type="text" class="form-control" placeholder="Search your city..." v-model="cityName"
          @keypress="fetchweather">
        
      </div>
    </div>
  </div>


  <div class="parent">
    <div v-if="typeof weather.main !== 'undefined'" class="climate-holder">
      <h2>{{ weather.name }}</h2>
      <p class="temp">{{weather.main.temp}}  <sup>.</sup>C</p>
      <p>{{"LONG : "+weather.coord.lon }}</p>
      <p>{{"LAT : "+weather.coord.lat }}</p>
      <p>{{"COUNTRY : "+weather.sys.country }}</p>
      <p>{{ weather.description }}</p>
    </div>
  </div>


</template>

<script>
export default {
  props: ['climate'],
  data() {
    return {
      
      
      cityName: '',
      api_key: 'ff9e86f4cfd6112d466e1111feb3ac98',
      urlBase: 'https://api.openweathermap.org/data/2.5/',
      weather: {}
    }
  },
  methods: {
    fetchweather(e) {
      if (e.key == "Enter") {
        fetch(`${this.urlBase}weather?q=${this.cityName}&units=metric&APPID=${this.api_key}`).then(res => {
          return res.json();
        }).then((result) => {
          this.weather = result;
          this.cityName='';
         

          console.log(this.weather);
          console.log(this.weather.main.temp)
        })
      } else {
        console.log('not fetched');
      }
    }
  }
}
</script>

<style>
.parent {
  background: linear-gradient(rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.2)), url('/src/assets/pexels-photo-234272.webp');
  background-position: center;

  height: 100vh;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  overflow-y: hidden;
  backdrop-filter: blur(5px);

}

.parent {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.climate-holder {
  text-align: center;
  padding-top: 61px;
  margin-left: 37px;

}
.climate-holder h2{
  padding-bottom: 10px
}
.climate-holder p{
  font-size: 30px;
}
.climate-holder .temp{
  color: red;
  text-align: center;
}

.temp {
  border: 1px solid black;
  text-align: center;
  margin-right: 10px;
  padding: 15px;
  width: 149px;
  border-radius: 20px;
  background-color: ghostwhite;
  font-size: 16px;
  border-color: #ddd;
  border-width: 2px;
  transition: all 2s ease;
  box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);
  margin-left: 33px;

}


.temp:hover {
  transform: scale(1.1);
  box-shadow: 10px 9px 6px rgba(254, 38, 38, 0.1);
}
</style>