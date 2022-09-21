<template>
  <div class="container-login">
    <span id="login-titulos">
      <h1>Já tem uma conta?</h1>
      <span>Faz teu login aqui embaixo!</span>
    </span>
    <form action="" id="form-login">
      <div class="login-input">
        <label for="email"> E-mail: </label>
        <input
          type="text"
          placeholder="Digite seu e-mail:"
          v-model="usuario.email"
        />
      </div>
      <div class="login-input">
        <label for="senha"> Senha: </label>
        <input
          type="password"
          placeholder="Digite sua senha:"
          v-model="usuario.password"
        />
      </div>
      <button id="button-logar" @click.stop.prevent="submitLogin">
        Entrar
      </button>
    </form>
    <span @click.stop.prevent="toRegister" style="cursor: pointer"
      >Não tem uma conta?</span
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      usuario: {},
      menssagemErro: "",
    };
  },
  created() {
    this.LOGOUT();
  },
  methods: {
    ...mapActions(["LOGIN", "LOGOUT"]),

    async submitLogin() {
      this.menssagemErro = "";

      const erro = await this.LOGIN(this.usuario);

      if (!erro) this.$router.push({ name: "Home" });
      else this.menssagemErro = erro;
    },
    toRegister() {
      this.$router.push({ name: "Cadastro" });
    },
  },
};
</script>

<style></style>
