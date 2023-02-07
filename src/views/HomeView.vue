<template>
  <div class="mainContainer">
    <HomeBanner />
    <ProductSearch />
    <!-- Teste para visualização da página com conteúdo -->
    <ProductSearch />
    <ProductSearch />
    <ProductSearch />
    <ProductSearch />
    <ProductSearch />
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
