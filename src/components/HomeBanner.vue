<template>
  <div id="homeBanner">
    <h1>Vue Ecommerce Template para Estudos</h1>
    <h2>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h2>
  </div>
</template>
<script>
export default {
  name: "HomeBanner",
};
</script>
<style scoped>
#homeBanner {
  width: 100%;
  height: 23.75rem;
  margin: 0;
  padding: 144px;
  background-color: rgb(81, 186, 252);
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  text-align: start;
  box-sizing: border-box;
}
h1 {
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  #homeBanner {
    height: auto;
    padding: 72px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
