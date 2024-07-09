<template>
  <div >
    <nav :class="{ 'navbar': true, 'navbar-expand-lg': true, 'border': false, 'border-info': false, 'mt-3': true, 'sticky-top': isSticky ,}">
      <div class="container">
        <router-link class="navbar-brand navbarLogo" to="/"><img src="../assets/logo.png" alt="" width="100%"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse navbarCollapse" id="navbarNav">
          <ul class="navbar-nav navgap">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/politicscompo" class="nav-link">Politics</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/sportscompo" class="nav-link">Sports</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/buisnesscompo" class="nav-link">Buisness</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/climatecompo" class="nav-link">Climate</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false // Initially navbar is not sticky
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the user has scrolled beyond a certain point, then make the navbar sticky
      // console.log(window.screenY);
      this.isSticky = window.scrollY > 77; // Adjust 100 as needed based on your design
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.totalNav {
  transition: top 0.3s;
  /* Smooth transition when navbar becomes sticky */
}

.navbarLogo {
  padding-top: 7px;
  font-size: 30px;
}



.navbarCollapse {
  justify-content: right;
  
}
.navgap{
  gap: 28px;
}


.sticky-top {
  position: fixed;
  top: -16px;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  border: none;
}

@media (max-width: 980px) {
  .navbar-collapse {
    /* Styles for smaller screens */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbarCollapse[data-v-128f56e5] {
    gap: 9px;
  }

  .nav-item {
    margin-bottom: 0px;
    /* Add some spacing between nav items */
  }
  .navgap{
    gap: 1px;
  }

  

}
</style>