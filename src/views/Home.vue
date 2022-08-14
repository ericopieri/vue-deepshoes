<template>
  <div class="container-main-titulo-produtos">
    <Carousel :perPage="1" paginationActiveColor="#ffd408">
      <Slide>
        <img src="../assets/banner/banner1.gif" alt="" />
      </Slide>
      <Slide>
        <img src="../assets/banner/banner2.gif" alt="" />
      </Slide>
    </Carousel>
    <h1 class="titulo-container-produtos" style="color: #8529ad">
      Compre na DeepShoes <i class="fa-solid fa-cart-arrow-down"></i>
    </h1>
    <section class="cointainer-produtos">
      <div
        v-for="(produto, index) in produtos"
        :key="index"
        class="container-produto"
      >
        <div class="imagem-produto">
          <img :src="produto.img" class="imagem-produto-img" alt="" />
        </div>
        <div class="infos-produto">
          <h2 class="titulo-produto">{{ produto.titulo }}</h2>
          <span class="preco-produto"
            >R$ {{ produto.preco.toFixed(2).replace(".", ",") }}</span
          >
        </div>
        <button
          class="button-vermais"
          @click="$router.push({ path: '/produto/2' })"
        >
          Ver <i class="fa-solid fa-plus"></i>
        </button>
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
          titulo: "Tênis Olympikus",
          img: require("../assets/tenis/tenis1.jpg"),
          preco: 255,
        },
        {
          titulo: "Tênis Nike",
          img: require("../assets/tenis/tenis6.jpg"),
          preco: 580,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis2.jpg"),
          preco: 350,
        },
        {
          titulo: "Tênis Qix",
          img: require("../assets/tenis/tenis3.jpg"),
          preco: 390,
        },
        {
          titulo: "Tênis Adidas",
          img: require("../assets/tenis/tenis4.jpg"),
          preco: 240,
        },
        {
          titulo: "Tênis Vans",
          img: require("../assets/tenis/tenis5.jpg"),
          preco: 320,
        },
        {
          titulo: "Tênis Nike",
          img: require("../assets/tenis/tenis7.jpg"),
          preco: 510,
        },
      ],
    };
  },
};
</script>

<style>
</style>