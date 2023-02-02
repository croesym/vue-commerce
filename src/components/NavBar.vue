<template>
  <div>
    <div id="nav-bar">
      <router-link id="logo-url" to="/">
        <img :src="logo" alt="Vue-logo" />
      </router-link>
      <div id="user-panel">
        <router-link to="/cart">
          <img :src="cart" alt="Cart-logo" />
        </router-link>
        <router-link to="">
          <img :src="user" alt="User-logo" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["logo", "cart", "user"],
};
</script>

<style scoped>
#nav-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
#nav-bar img {
  height: 3rem;
}

#user-panel {
  display: flex;
  align-items: center;
}
#nav-bar #user-panel img {
  height: 1.5rem; /* ou outro tamanho desejado */
}
</style>
