<template>
  <div class="mainContainer">
    <HomeBanner />
    <ProductSearch />
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
// import HomeProduct from "../components/HomeProduct.vue";
import ProductSearch from "../components/ProductSearch.vue";

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    // HomeProduct,
    ProductSearch,
  },
};
</script>
