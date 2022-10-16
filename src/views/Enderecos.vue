<template>
  <div>
    <h2 class="titulo-pedidos">
      Seus Endereços <i class="fa-solid fa-location-dot dados-pedidos-icon"></i>
    </h2>
    <div id="container-enderecos">
      <div
        class="box-endereco"
        v-for="(endereco, index) of enderecos"
        :key="index"
      >
        <p>
          {{ endereco.logradouro }}, {{ endereco.numero }} -
          {{ endereco.complemento }}
        </p>
        <p>
          {{ endereco.bairro }} - {{ endereco.municipio }},
          {{ endereco.estado }}
        </p>
        <p>{{ endereco.referencia }}</p>
      </div>
    </div>
    <button
      class="button-adicionar-endereco"
      @click.stop.prevent="$router.push({ name: 'AdicionarEndereco' })"
    >
      Adicionar um novo Endereço
    </button>
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      enderecos: [],
    };
  },
  mounted() {
    this.getEnderecos();
  },
  methods: {
    async getEnderecos() {
      const { data } = await api.get("/api/enderecos");

      this.enderecos = data;
    },
  },
};
</script>

<style></style>
