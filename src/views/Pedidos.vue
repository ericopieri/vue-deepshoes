<template>
  <div>
    <h2 class="titulo-pedidos">
      Seus Pedidos já feitos
      <i class="fa-solid fa-circle-check dados-pedidos-icon"></i>
    </h2>
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
        <button
          class="button-pedido"
          @click.stop.prevent="$router.push({ path: 'pedidos/' + pedido.id })"
        >
          + Detalhes
        </button>
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
