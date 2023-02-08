<template>
  <div>
    <HomeBanner />
    <ProductSearch />
    <HomeProduct />
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeProduct from "../components/HomeProduct.vue";
import ProductSearch from "../components/ProductSearch.vue";

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    ProductSearch,
    HomeProduct,
  },
};
</script>
