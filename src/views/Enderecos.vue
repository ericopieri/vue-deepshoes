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
    <button id="button-adicionar-endereco">Adicionar um novo Endereço</button>
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

<style>
#button-adicionar-endereco {
  border-radius: 3px;
  margin-top: 25px;
  font-size: 1.25em;
  border: none;
  color: white;
  background: #8529ad;
  padding: 8px 40px;
  cursor: pointer;
  transition: 0.2s;
}

#button-adicionar-endereco:hover {
  background: #7700aa;
}

#container-enderecos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
}

.box-endereco {
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e0e0e0;
  padding: 10px;
  min-width: 255px;
}
</style>
