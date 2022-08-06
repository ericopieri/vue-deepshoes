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
          <img :src="produto.image" class="imagem-produto-img" alt="" />
        </div>
        <div class="infos-produto">
          <h2 class="titulo-produto">{{ produto.title }}</h2>
          <span class="preco-produto">R$ {{ produto.price.toFixed(2) }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../axios/index.js";

import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    api.get("/products").then((resp) => {
      this.produtos = resp.data;
      console.log(resp.data);
    });
  },
};
</script>

<style>
</style>