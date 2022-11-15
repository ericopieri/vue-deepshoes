<template>
  <div class="container-login">
    <form action="" id="form-cadastro">
      <label for="nome">E-mail:</label>
      <input type="text" v-model="novoUsuario.email" />
      <label for="nome">Nome:</label>
      <input type="text" v-model="novoUsuario.nome" />
      <label for="nome">Sobrenome:</label>
      <input type="text" v-model="novoUsuario.sobrenome" />
      <label for="nome">Cpf:</label>
      <input type="text" v-mask="'###.###.###-##'" v-model="novoUsuario.cpf" />
      <label for="nome">Data de Nascimento:</label>
      <input type="date" v-model="novoUsuario.dt_nasc" />
      <label for="nome">Contato:</label>
      <input
        type="text"
        v-model="novoUsuario.contato"
        v-mask="'(##) #####-####'"
      />
      <label for="nome">Sexo:</label>
      <select name="genero" id="genero-select" v-model="novoUsuario.genero">
        <option default>Indefinido</option>
        <option value="Masculino" default>Masculino</option>
        <option value="Feminino" default>Feminino</option>
      </select>
      <label for="nome">Senha:</label>
      <input type="password" v-model="novoUsuario.password" />
      <label for="nome">Confirmar senha:</label>
      <input type="password" v-model="novoUsuario.confirmarSenha" />
      <button id="button-cadastro" @click.stop.prevent="submitRegister">
        Realizar cadastro
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { api } from "../axios/index";

export default {
  data() {
    return {
      novoUsuario: {},
      confirmarSenha: "",
    };
  },
  methods: {
    ...mapActions("auth", ["LOGOUT", "LOGIN"]),

    async submitRegister() {
      this.LOGOUT();

      const erro = await this.REGISTER(this.novoUsuario);

      if (!erro) {
        const { email, password } = this.novoUsuario;
        await this.LOGIN({ password, email });

        this.$router.push({ path: "/home" });
      } else {
        console.log(erro);
      }
    },
    async REGISTER() {
      try {
        await api.post("/api/usuarios/", this.novoUsuario);
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style></style>
