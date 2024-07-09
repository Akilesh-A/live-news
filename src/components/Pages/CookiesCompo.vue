<template>
  <div>
    <div v-if="!consentGiven" class="cookie-overlay"></div>
    <div v-if="!consentGiven" class="cookie-consent">
      <p>This website uses cookies to enhance your experience. By using our website, you consent to our use of cookies.</p>
      <button @click="acceptConsent">Accept</button>
    </div>
    <!-- Your page content goes here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      consentGiven: false
    };
  },
  methods: {
    acceptConsent() {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 365); // 365 days from now
      document.cookie = `Consent=true;expires=${expiryDate.toUTCString()};path=/`;
      
      this.consentGiven = true;
    },
    checkConsent() {
      const consentCookie = this.getCookie('Consent');
      console.log(consentCookie + " consent ");
      if (consentCookie === 'true') {
        this.consentGiven = true;
      }
    },
    getCookie(name) {
      console.log(name+"sdhidibvivb");
      console.log(document.cookie);
      const cookies = document.cookie.split(';');
      console.log(cookies);
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        console.log(cookie);
        if (cookie[0] === name) {
          return cookie[1];
        }
      }
      return '';
    }
  },
  mounted() {
    this.checkConsent();
  }
};
</script>

<style scoped>
.cookie-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 9999; /* Ensure the overlay is on top of other elements */
}

.cookie-consent {
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  z-index: 10000; /* Ensure the consent popup is on top of the overlay */
}

.cookie-consent button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
