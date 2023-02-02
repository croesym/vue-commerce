<template>
  <div id="products-search-container">
    <div id="products-search">
      <input type="text" placeholder="Busque aqui" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsSearch",
};
</script>
<style scoped>
#products-search-container {
  margin: 16px;
}

#products-search {
  padding: 16px;
  width: 100%;
}

#products-search input {
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem 0 0 0.25rem;
  padding: 1rem 1rem;
  font-size: 1.25rem;
}
</style>
