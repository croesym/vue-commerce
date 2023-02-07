<template>
  <div>
    <div class="footerContainer">
      <footer>
        <div id="socialMedia">
          <a href=""> <img :src="logo" alt="Vue-logo" /> </a>
          <div></div>
          <div id="mediaLinks">
            <a href="">
              <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"
            /></a>
            <a href="">
              <font-awesome-icon icon="fa-brands fa-github" size="2x"
            /></a>
            <a href="">
              <font-awesome-icon icon="fa-brands fa-twitter" size="2x"
            /></a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueFooter",
  props: ["github", "logo", "linkedin"],
};
</script>
<style scoped>
.footerContainer {
  background-color: #b9e2fc;
  font-weight: 600;
  width: 100%;
}
#socialMedia {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}

#socialMedia img {
  height: 3rem;
}

#mediaLinks {
  display: flex;
  align-items: center;
}
#mediaLinks a {
  padding-left: 0.5rem;
  padding-right: 1rem;
}
</style>
