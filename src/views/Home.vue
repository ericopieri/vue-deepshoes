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
        v-for="(produto, index) of produtos"
        :key="index"
        class="container-produto"
      >
        <div class="imagem-produto">
          <img :src="produto.imagem" class="imagem-produto-img" alt="" />
        </div>
        <div class="infos-produto">
          <h2 class="titulo-produto">{{ produto.nome }}</h2>
          <span class="preco-produto">R$ {{ produto.valor_unitario }}</span>
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

import { api } from "../axios/index";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtos: [],
    };
  },
  async mounted() {
    await this.getProdutos();
  },
  methods: {
    async getProdutos() {
      const { data } = await api.get("/api/produtos/");
      this.produtos = data.results;
    },
  },
};
</script>

<style></style>
