<template>
  <div>
    <h2 id="titulo-dados">
      Avaliando Produto -
      <span id="nome-produto-avaliar">{{ produto.nome }}</span>
    </h2>
    <textarea
      class="input-dados"
      rows="5"
      placeholder="Texto"
      v-model="novaAvaliacao.texto"
    ></textarea>
    <div class="nota-div margin-15px">
      <span>Qual nota você daria para o produto?</span>
      <select v-model="novaAvaliacao.nota" class="input-dados select-notas">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="recomendou-div margin-15px">
      <span>Recomenda o produto?</span>
      <input
        type="checkbox"
        placeholder="Recomenda o produto?"
        v-model="novaAvaliacao.recomendou"
      />
    </div>
    <button class="button-avaliar-produto" @click="enviarAvaliacao">
      Enviar avaliação
    </button>
    <p class="error-avaliacao" v-if="hasError">Ocorreu algum erro!</p>
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      produto: {},
      novaAvaliacao: {},
      hasError: false,
    };
  },

  async created() {
    const { data } = await api.get(
      "api/produtos/" + this.$route.params.id + "/"
    );

    this.produto = data;
  },

  methods: {
    async enviarAvaliacao() {
      console.log(this.novaAvaliacao);

      this.hasError = false;

      try {
        await api.post("api/avaliacoes/", {
          ...this.novaAvaliacao,
          produto: this.produto.id,
        });
        this.$router.push({ name: "Pedidos" });
      } catch (err) {
        this.hasError = true;
      }
    },
  },
};
</script>

<style>
</style>