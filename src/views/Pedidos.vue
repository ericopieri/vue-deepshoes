<template>
  <div>
    <h2 id="titulo-pedidos">Seus Pedidos já feitos:</h2>
    <div id="container-pedidos">
      <div class="box-pedido" v-for="(pedido, index) of pedidos" :key="index">
        <div class="info-pedido">
          <div class="quantidade-itens">
            <b>Itens:</b> {{ pedido.itens.length }}
          </div>
          <div class="datas">
            <div><b>Data do Pedido:</b> {{ pedido.data_pedido }}</div>
            <div><b>Data de Entrega:</b> {{ pedido.data_entrega }}</div>
          </div>
          <div class="preco-pedido">
            <b>Preço:</b> R$ {{ pedido.preco_total }}
          </div>
        </div>
        <button class="button-pedido">+ Detalhes</button>
      </div>
    </div>
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
      const { data } = await api.get("/api/pedidos/");
      this.pedidos = data;
    },
  },
};
</script>

<style></style>
