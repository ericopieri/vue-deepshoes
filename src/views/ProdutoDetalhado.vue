<template>
  <div id="product-detail-estrutura">
    <section id="products-details-estrutura">
      <div class="product-image">
        <img :src="produto.imagem" alt="tenis1.jpg" />
      </div>
      <div class="products-details">
        <h2 class="product-title">{{ produto.nome }}</h2>
        <span class="product-price">R$ {{ produto.valor_unitario }}</span>
        <span class="product-description">{{ produto.descricao }}</span>
        <ul id="product-medidas">
          <li class="medida-item">{{ produto.tamanho }}</li>
        </ul>
        <button class="button-comprar" @click="salvarNoCarrinho(produto)">
          Comprar
        </button>
      </div>
    </section>
    <section id="produtos-relacionados">
      <h2 style="text-align: center; margin: 15px 0 15px 0; color: grey">
        Quem procura este item, também se interessa por
        <i class="fa-solid fa-arrow-down"></i>
      </h2>
      <Carousel
        id="carrosel-produtos-relacionados"
        :perPage="4"
        :navigationEnabled="true"
        :paginationEnabled="false"
      >
        <Slide
          class="carrosel-relacionados-item"
          v-for="(produtoRelacionado, index) in produtosRelacionados"
          :key="index"
          ><img
            :src="produtoRelacionado.img"
            class="img-produto-relacionado"
            alt="tenis"
          />
          <h3 class="produto-rel-titulo">{{ produtoRelacionado.titulo }}</h3>
          <span class="produto-rel-preco"
            >R$ {{ produtoRelacionado.preco }}</span
          >
          <button class="button-vermais-relacionado">Ver +</button>
        </Slide>
      </Carousel>
    </section>

    <section id="box-avaliacoes">
      <span class="titulo-avaliacoes" style="position: absolute; color: grey">
        Avaliação do Produto:
      </span>
      <div class="avaliacoes">
        <span style="display: block; text-align: center" class="span-avaliacoes"
          >Quantos % dos Compradores recomendam este produto?</span
        >
        <div class="est-porcentagem">
          <div
            class="porcentagem"
            :style="{ width: produto.porcentagem_recomendado + '%' }"
          >
            <div class="porcentagem-modulo">
              {{ produto.porcentagem_recomendado }}%
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="loading" v-if="isLoadingComentarios">
      <img src="../assets/tenis/loader.gif" alt="loading" />
    </div>
    <section id="box-comentarios" v-else>
      <span class="titulo-comentarios" style="color: grey"> Comentários </span>
      <img
        v-if="isLoadingComentarios"
        src="../assets/tenis/loader.gif"
        alt="loading"
      />
      <div class="est-comentarios" v-if="comentarios.length">
        <div
          v-for="(comentario, index) in comentarios"
          :key="index"
          class="box-comentario"
        >
          <div class="avaliacao-comentario-div">
            Avaliação:
            <span
              class="avaliacao-comentario"
              :class="{ verdinho: comentario.nota > 5 }"
              >{{ comentario.nota }}/10</span
            >
          </div>
          <div class="comentario-conteudo">{{ comentario.texto }}</div>
          <div class="user-comentario-div">
            <span class="usuario-comentario"
              >{{ comentario.usuario.nome }}
              {{ comentario.usuario.sobrenome }}</span
            >
            <span class="dia-publicacao"
              >{{ new Date(comentario.data_avaliacao).toLocaleDateString() }} às
              {{
                new Date(comentario.data_avaliacao).toLocaleTimeString()
              }}</span
            >
            <span
              class="recomendacao"
              :class="{ recomendado: comentario.recomendou }"
              >{{
                comentario.recomendou
                  ? `Recomendou este Produto!`
                  : "Não recomendou este Produto!"
              }}
              <i
                v-if="comentario.recomendou"
                class="fa-solid fa-thumbs-up icon-recomendou"
              ></i>
              <i v-else class="fa-solid fa-thumbs-down icon-recomendou"></i
            ></span>
          </div>
        </div>
      </div>
      <section class="sem-comentarios" v-else>
        Ainda não há comentários feitos sobre o produto!
      </section>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import { api } from "../axios/index";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      produto: {},
      isLoadingComentarios: true,
      produtosRelacionados: [
        {
          titulo: "Tênis Olympikus",
          img: require("../assets/tenis/tenis1.jpg"),
          preco: 255,
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
      comentarios: [],
    };
  },
  async created() {
    await this.getProduto();
    await this.getComentarios();
  },
  computed: {
    ...mapState(["carrinho"]),
  },
  methods: {
    ...mapMutations(["PUSH_CARRINHO", "INCREMENTA_PRODUTO"]),
    ...mapActions(["GET_CARRINHO"]),

    async getComentarios() {
      this.isLoadingComentarios = true;
      try {
        const { data } = await api.get(
          "api/avaliacoes/?id=" + this.$route.params.id
        );
        const { results } = data;

        this.comentarios = results;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoadingComentarios = false;
      }
    },

    async getProduto() {
      const id = this.$route.params.id;

      try {
        const { data } = await api.get(`/api/produtos/${id}`);
        this.produto = data;
      } catch (err) {
        console.error(err);
      }
    },

    async salvarNoCarrinho(pdt) {
      const produtoExiste = this.carrinho.itens.find(
        (item) => item.produto.id == pdt.id
      );

      if (produtoExiste) {
        this.INCREMENTA_PRODUTO({
          id: pdt.id,
          vaiIncrementar: true,
        });
      } else {
        const newItem = {
          produto: Object.assign(pdt),
          qtd_produto: 1,
        };

        if (!this.carrinho.itens.length) {
          await api.post("api/pedidos/", {
            itens: [
              {
                produto: newItem.produto.id,
                qtd_produto: newItem.qtd_produto,
              },
            ],
            preco_total: newItem.valor_unitario,
          });

          this.GET_CARRINHO();
          return;
        }

        this.PUSH_CARRINHO(newItem);
      }
    },
  },
};
</script>

<style></style>
