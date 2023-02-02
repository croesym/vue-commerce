<template>
  <div id="home-banner">
    <h1>Vue Ecommerce template para estudos.</h1>
    <h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
      consequuntur accusantium molestias atque totam.
    </h2>
  </div>
</template>
<script>
export default {
  name: "HomeBanner",
};
</script>
<style scoped>
#home-banner {
  width: 100%;
  /* Font & Text */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  text-align: start;
  text-indent: 0px;
  text-transform: none;
  vertical-align: baseline;
  white-space: normal;
  word-spacing: 0px;

  /* Color & Background */
  background-attachment: scroll;
  background-color: rgb(81, 186, 252);
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  color: #ffffff;
  /* Box */
  height: 23.75rem;
  margin: 0;
  padding: 144px;
  max-height: none;
  min-height: 0px;
  max-width: none;
  min-width: 0px;
  box-sizing: border-box;
}

h1 {
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  #home-banner {
    height: auto;
    padding: 72px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
