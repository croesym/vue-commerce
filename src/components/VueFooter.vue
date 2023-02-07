<template>
  <div>
    <footer>
      <div id="footerContainer">
        <div id="mediaGrid">
          <div id="mediaContainer">
            <div id="socialMedia">
              <a href=""> <img :src="logo" alt="Vue-logo" /> </a>
            </div>
            <p id="footerText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              veritatis omnis.
            </p>
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
          <div id="linksGrid">
            <div>
              <nav class="flexCol">
                <p class="fontMedium">Empresa</p>
                <a href="" class="linkSmall">Sobre</a>
                <a href="" class="linkSmall">Conheça o Time</a>
                <a href="" class="linkSmall">História</a>
                <a href="" class="linkSmall">Carreira</a>
              </nav>
            </div>
            <div>
              <nav class="flexCol">
                <p class="fontMedium">Serviços</p>
                <a href="" class="linkSmall">Reuniões one-on-one</a>
                <a href="" class="linkSmall">Avaliações da Empresa</a>
                <a href="" class="linkSmall">Avaliação dos Usuários</a>
                <a href="" class="linkSmall">Consultoria de RH</a>
              </nav>
            </div>
            <div>
              <nav class="flexCol">
                <p class="fontMedium">Links Úteis</p>
                <a href="" class="linkSmall">Contatos</a>
                <a href="" class="linkSmall">FAQs</a>
                <a href="" class="linkSmall">Chat ao Vivo</a>
              </nav>
            </div>
            <div>
              <nav class="flexCol">
                <p class="fontMedium">Políticas</p>
                <a href="" class="linkSmall">Política de privacidade</a>
                <a href="" class="linkSmall">Termos e Condições</a>
                <a href="" class="linkSmall">Acessibilidade</a>
              </nav>
            </div>
          </div>

          <p>© 2022 Vue-commerce</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "VueFooter",
  props: ["github", "logo", "linkedin"],
};
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}

footer {
  background-color: #b9e2fc;
  padding: 3rem;
}

/* #footerContainer {
  background-color: #b9e2fc;
  width: 100%;
  padding: 3rem;
} */

#mediaGrid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
}

#linksGrid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 2rem;
}

#socialMedia {
  display: flex;
  justify-content: start;
}
#socialMedia img {
  height: 3rem;
}

#footerText {
  max-width: 20rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  margin-top: 1rem;
  text-align: justify;
}

#mediaLinks {
  display: flex;
  justify-content: start;
  margin-top: 1rem;
}
#mediaLinks a {
  margin: 0.5rem;
}

.flexCol {
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.fontMedium {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
}

.linkSmall {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
}

@media (min-width: 640px) {
  #mediaGrid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  #linksGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  #mediaGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  #linksGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column: span 2 / span 2;
  }
}
</style>
