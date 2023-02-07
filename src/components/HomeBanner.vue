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
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  text-align: start;
  text-indent: 0;
  text-transform: none;
  vertical-align: baseline;
  white-space: normal;
  word-spacing: 0;
  background-attachment: scroll;
  background-color: rgb(81, 186, 252);
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  color: #ffffff;
  height: 23.75rem;
  margin: 0;
  padding: 144px;
  max-height: none;
  min-height: 0;
  max-width: none;
  min-width: 0;
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
