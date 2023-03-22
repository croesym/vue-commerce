<template>
  <div id="mainContainer">
    <div id="productGrid">
      <div
        class="cardRounded shadow shadow-colored ring-shadow"
        v-for="product in products"
        :key="product.Id"
      >
        <div class="imgRound">
          <a href="">
            <img
              src="/img/Product.jpg"
              alt="Espaço para Imagem do produto"
              class="imgRound"
            />
          </a>
        </div>
        <div class="textWrap">
          <div class="itemFlex">
            <div class="itemContent">
              <a href="">
                <Span class="textL">{{ product.nome }}</Span>
              </a>
            </div>
            <button tittle="Adicionar aos Favoritos" class="button textL">
              <font-awesome-icon icon="fab-thin fa-heart" size="1x" />
            </button>
          </div>
          <div class="itemData">
            <p class="textBase">
              {{ product.descricao }}
            </p>
            <div class="itemFlex">
              <div class="flexCenter">
                <template v-for="i in parseInt(product.nota)" :key="i">
                  <font-awesome-icon icon="fa-solid fa-star" />
                </template>
                <template v-for="i in 5 - parseInt(product.nota)" :key="i">
                  <font-awesome-icon icon="fa-regular fa-star" />
                </template>
                <p class="textL marginLeft-2">
                  {{ product.avaliacoes }} Reviews
                </p>
              </div>
              <p class="textM">
                <strong> R${{ product.preco }}</strong>
              </p>
            </div>
            <div class="dataFlex">
              <select name="" id="" class="quantitySelect">
                <option value="1">1</option>
              </select>
              <button class="addCart">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProduct",
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/croesym/vue-commerce/master/db/products.json"
    )
      .then((response) => response.json())
      .then((data) => (this.products = data.products.product));
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}

img {
  max-width: 100%;
  height: auto;
}
img,
svg {
  display: block;
  vertical-align: middle;
}
#mainContainer {
  margin: 1.25rem;
}
#productGrid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 1rem;
}
.cardRounded {
  border-radius: 1rem;
  overflow: hidden;
}
.shadow {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
.shadow-colored {
  box-shadow: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
}
.ring-shadow {
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #000),
    var(--tw-ring-shadow, 0 0 #000), 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
.imgRound {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.textWrap {
  padding: 1rem;
}
.itemFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.textL {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.textM {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.25rem;
}
.button {
  background-color: transparent;
  border: none;
}

button {
  cursor: pointer;
}
.textBase {
  font-size: 1rem;
  line-height: 1.5rem;
}
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.marginLeft-2 {
  margin-left: 0.5rem;
}
.dataFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
}
.quantitySelect {
  padding: 0.5rem;
  border-width: 2px;
  border-radius: 1rem;
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  margin: 0;
}

.addCart {
  color: white;
  background-color: rgb(81 186 252);
  border-radius: 0.75rem;
  padding: 0.75rem;
  border: none;
  font-weight: 500;
}

@media (min-width: 768px) {
  #productGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}
@media (min-width: 1024px) {
  #productGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
}
</style>
