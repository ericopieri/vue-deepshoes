<template>
  <div class="box-pedido-finalizado">
    <h2 class="titulo-pedidos">
      Status do Pedido:
      <span id="status-pedido" style="color: green">Finalizado</span>
      <i class="fa-solid fa-check icon-check-pedido"></i>
    </h2>
    <h2 class="titulo-pedidos" id="endereco-titulo">Endereço de Entrega:</h2>
    <div class="infos-endereco">
      <p>
        {{ pedido.endereco_entrega.logradouro }},
        {{ pedido.endereco_entrega.numero }} -
        {{ pedido.endereco_entrega.complemento }}
      </p>
      <p>
        {{ pedido.endereco_entrega.bairro }} -
        {{ pedido.endereco_entrega.municipio }},
        {{ pedido.endereco_entrega.estado }}
      </p>
      <p>Referência: {{ pedido.endereco_entrega.referencia }}</p>
    </div>
    <h2 class="titulo-pedidos">Itens do Pedido:</h2>
    <div id="container-itens-pedido">
      <div
        class="box-item-pedido"
        v-for="(item, index) of pedido.itens"
        :key="index"
      >
        <img
          :src="item.produto.imagem"
          alt="Imagem Pedido"
          id="imagem-item-pedido"
        />
        <div class="infos-item">
          <p class="item-pedido-nome">{{ item.produto.nome }}</p>
          <p class="item-info-pedido">
            <b>Tamanho: </b>{{ item.produto.tamanho }}
          </p>
          <p class="item-info-pedido"><b>Cor: </b>{{ item.produto.cor }}</p>
          <p class="item-info-pedido">
            <b>Valor Unitário: </b
            ><span style="color: green"
              >R$ {{ item.produto.valor_unitario }}</span
            >
          </p>
          <p class="item-info-pedido">
            <b>Quantidade: </b>{{ item.qtd_produto }}
          </p>
        </div>
        <div class="sub-total">
          Subtotal:
          <span style="color: green">R$ {{ item.sub_total }}</span>
        </div>
      </div>
      <div class="titulo-pedidos" id="preco-total">
        Valor total:
        <span style="color: green; border: 1px solid green; padding: 3px"
          >R$ {{ pedido.preco_total }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      pedido: {},
    };
  },
  mounted() {
    this.getPedido();
  },
  methods: {
    async getPedido() {
      const id = this.$route.params.id;

      const { data } = await api.get("/api/pedidos/" + id);

      this.pedido = data;

      console.log(this.pedido);
    },
  },
};
</script>

<style>
.infos-endereco {
  margin-bottom: 15px;
}

#endereco-titulo {
  margin-bottom: 8px;
}

#preco-total {
  width: auto;
  font-weight: bold;
  margin: 0;
  display: inline-block;
  text-align: right;
  padding: 5px 5px;
}

.sub-total {
  font-weight: bold;
  font-size: 1.2em;
  margin-left: auto;
}

.item-info-pedido {
  font-style: italic;
  font-size: 0.9em;
  color: grey;
}

.infos-item {
  margin-left: 25px;
}

.item-pedido-nome {
  font-size: 1.2em;
  font-weight: bold;
}

.status-pedido {
  color: green;
}
.icon-check-pedido {
  color: green;
  margin-left: 5px;
  font-size: 1.2em;
}
#container-itens-pedido {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: nowrap;
}
.box-item-pedido {
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e0e0e0;
}
#imagem-item-pedido {
  width: 105px;
}
</style>
