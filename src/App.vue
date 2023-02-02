<template>
  <NavBar
    :logo="VueLogo_src"
    :alt="app_name"
    :cart="Cart_src"
    :user="User_src"
  />
  <router-view />
  <VueFooter />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import VueFooter from "./components/VueFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    VueFooter,
  },
  data() {
    return {
      VueLogo_src: "./img/VueLogo.png",
      Cart_src: "./img/Cart.png",
      User_src: "./img/User.png",
      app_name: "Vue Commerce",
    };
  },
};
</script>
<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container {
  margin: 0;
  padding: 0;
}
</style>
