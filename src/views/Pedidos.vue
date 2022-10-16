<template>
  <div>
    <h2 id="titulo-pedidos">Seus Pedidos já feitos:</h2>
    <div class="container-pedidos"></div>
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      pedidos: [],
    };
  },
  mounted() {
    this.getPedidos();
  },
  methods: {
    async getPedidos() {
      this.pedidos = await api.get("/api/pedidos/");
      console.log(this.pedidos);
    },
  },
};
</script>

<style>
</style>