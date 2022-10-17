<template>
  <div>
    <h2 id="titulo-dados">
      Cadastro de Endereço
      <i class="fa-solid fa-location-dot dados-pedidos-icon"></i>
    </h2>
    <div class="linha-inputs">
      <input
        type="text"
        v-model="novoEndereço.logradouro"
        class="input-dados"
        placeholder="Logradouro"
        id="rua"
      />
      <input
        type="text"
        class="input-dados"
        placeholder="Número"
        id="numero"
        v-model="novoEndereço.numero"
      />
    </div>
    <div class="linha-inputs">
      <input
        type="text"
        v-model="novoEndereço.municipio"
        placeholder="Cidade"
        class="input-dados margem-10px"
        id="cidade"
      />
      <select
        type="text"
        class="input-dados margem-10px"
        id="estado"
        v-model="novoEndereço.estado"
      >
        <option value="Estado" selected="selected">Estado</option>
        <option
          v-for="estado of estados"
          :key="estado.sigla"
          :value="estado.sigla"
        >
          {{ estado.nome }}
        </option>
      </select>
    </div>
    <input
      type="text"
      v-model="novoEndereço.bairro"
      placeholder="Bairro"
      class="input-dados margem-10px"
      id="bairro"
    />
    <div class="linha-inputs">
      <input
        type="text"
        v-model="novoEndereço.complemento"
        placeholder="Complemento"
        class="input-dados margem-10px"
        id="complemento"
      />
      <input
        type="text"
        v-model="novoEndereço.referencia"
        placeholder="Referência"
        class="input-dados margem-10px"
        id="referencia"
      />
    </div>
    <button
      class="button-adicionar-endereco"
      @click.stop.prevent="salvarEndereco"
    >
      Salvar novo Endereço
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { api } from "../axios/index";

export default {
  data() {
    return {
      estados: [],
      novoEndereço: {},
    };
  },
  mounted() {
    this.getEstados();
  },
  methods: {
    async getEstados() {
      const { data } = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      );
      this.estados = data;
    },
    async salvarEndereco() {
      await api.post("/api/enderecos/", this.novoEndereço);
      this.$router.push({ name: "Enderecos" });
    },
  },
};
</script>

<style></style>
