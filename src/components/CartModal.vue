<template>
  <div class="cartModal">
    <div class="cartModalBackground"></div>
    <div class="cartModalWrapper">
      <div class="cartModalHeader">
        <p class="headerText">Resumo</p>
        <button aria-label="close" class="delete">X</button>
      </div>
      <section></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartModal",
};
</script>

<style>
.cartModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cartModalBackground {
  position: fixed;
  widows: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  background-color: rgb(81 81 81 / 0.8);
}

.cartModalWrapper {
  border-radius: 1rem;
  width: 24rem;
  z-index: 20;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.cartModalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(237 234 235 / var(--tw-bg-opacity));
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.headerText {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.delete {
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  border: none;
}
</style>
