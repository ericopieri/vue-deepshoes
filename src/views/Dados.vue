<template>
  <div>
    <h2 id="titulo-dados">Seus dados pessoais:</h2>
    <input
      v-model="usuario.cpf"
      type="text"
      placeholder="CPF"
      disabled
      class="input-dados margem-10px"
    />
    <input
      type="text"
      placeholder="E-mail"
      v-model="usuario.email"
      disabled
      class="input-dados margem-10px"
    />
    <div id="nome-sobrenome" class="margem-10px">
      <input
        type="text"
        placeholder="Nome"
        v-model="usuario.nome"
        id="nome"
        class="input-dados"
      />
      <input
        type="text"
        v-model="usuario.sobrenome"
        placeholder="Sobrenome"
        id="sobrenome"
        class="input-dados"
      />
    </div>
    <input
      type="text"
      placeholder="Contato"
      v-model="usuario.contato"
      class="input-dados margem-10px"
    />
    <input
      type="date"
      placeholder="Data de Nascimento"
      v-model="usuario.dt_nasc"
      class="input-dados margem-10px"
    />
  </div>
</template>

<script>
import { api } from "../axios/index";

export default {
  data() {
    return {
      usuario: {},
    };
  },
  created() {
    this.getUsuario();
  },
  methods: {
    async getUsuario() {
      const { data } = await api.get("/api/usuarios/");
      const [usuario] = data;

      this.usuario = usuario;
    },
  },
};
</script>

<style>
</style>