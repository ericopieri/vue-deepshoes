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
        v-for="(produto, index) of produtos.results"
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
    <div id="pagination">
      <button v-show="produtos.previous && page != 1" @click="page -= 1">
        Anterior
      </button>
      <button v-show="produtos.next" @click="page += 1">Próximo</button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import { api } from "../axios/index";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtos: {},
      page: 1,
    };
  },
  async mounted() {
    await this.getProdutos();
  },
  methods: {
    async getProdutos(page = 1) {
      const { data } = await api.get("/api/produtos/?page=" + page);
      this.produtos = data;
    },
  },
  watch: {
    page(novaPagina) {
      this.getProdutos(novaPagina);
    },
  },
};
</script>

<style></style>
