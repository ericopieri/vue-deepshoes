<template>
  <div class="container-main-titulo-produtos">
    <carousel :perPage="Number(1)" paginationActiveColor="#8844ee">
      <slide>
        <img src="../assets/banner/banner1.gif" alt="" />
      </slide>
      <slide>
        <img src="../assets/banner/banner2.gif" alt="" />
      </slide>
    </carousel>
    <h1 class="titulo-container-produtos">COMPRE NA DEEPSHOES</h1>
    <section class="cointainer-produtos">
      <div
        v-for="(produto, index) of produtos"
        :key="index"
        class="container-produto"
      >
        <div class="imagem-produto">
          <img :src="produto.src" class="imagem-produto-img" alt="" />
        </div>
        <div class="infos-produto">
          <h2 class="titulo-produto">{{ produto.titulo }}</h2>
          <span class="desc-produto">{{ produto.desc }}</span>
          <span class="preco-produto">{{ produto.preco }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtos: [
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
        {
          src: require("../assets/tenis/tenis1.jpg"),
          preco: "R$ 30,00",
          titulo: "Nike Air Max",
          desc: "Lorem ipsum dolor met a det a dot melet fock let ipsum dolor",
        },
      ],
    };
  },
};
</script>

<style>
</style>