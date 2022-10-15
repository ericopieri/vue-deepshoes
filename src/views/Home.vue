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
    <section class="cointainer-produtos" v-if="!isLoading">
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
          @click="$router.push({ path: '/produto/' + produto.id })"
        >
          Ver <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </section>
    <div id="loading" v-else>
      <img src="../assets/tenis/loader.gif" alt="loading" />
    </div>
    <div id="pagination">
      <button v-if="produtos.previous && page != 1" @click="page -= 1">
        Anterior
      </button>
      <span id="page-count">{{ page }}</span>
      <button v-if="produtos.next" @click="page += 1">Próximo</button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapState } from "vuex";

import { api } from "../axios/index";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produtos: {},
      isLoading: true,
      page: 1,
    };
  },
  computed: {
    ...mapState(["generoHome"]),
  },
  mounted() {
    this.getProdutos();
  },
  methods: {
    async getProdutos(page = this.page) {
      this.isLoading = true;
      try {
        const { data } = await api.get(
          `/api/produtos/?page=${page}&genero=${this.generoHome}`
        );
        this.produtos = data;
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
  watch: {
    page() {
      this.getProdutos(this.page);
    },
    generoHome() {
      this.page = 1;
      this.getProdutos();
    },
  },
};
</script>

<style></style>
