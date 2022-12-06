<template>
  <div>
    <h2 class="titulo-pedidos">
      Seus Pedidos já feitos
      <i class="fa-solid fa-circle-check dados-pedidos-icon"></i>
    </h2>
    <div id="container-pedidos" v-if="pedidos.length">
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
            <b>Preço:</b> R$ {{ pedido.preco_final }}
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
    <div class="sem-pedidos" v-else>
      <p style="color: red; font-size: 1.1em">Você não tem pedidos feitos</p>
      <button
        class="button-adicionar-endereco"
        @click="$router.push({ name: 'Home' })"
      >
        Comece a comprar
        <i
          class="fa-solid fa-basket-shopping dados-pedidos-icon"
          style="color: white"
        ></i>
      </button>
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
      const { data } = await api.get("/api/pedidos/?concluidos=True");
      this.pedidos = data;
    },
  },
};
</script>

<style></style>
