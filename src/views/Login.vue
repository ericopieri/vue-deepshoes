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
      <span id="errorMessage"></span>
      <button id="button-logar" @click.stop.prevent="submitLogin">
        Entrar
      </button>
      <p class="error" v-show="hasError">
        Ocorreu um erro, confira os dados e tente novamente!
      </p>
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
      hasError: false,
    };
  },

  mounted() {
    this.LOGOUT();
  },

  methods: {
    ...mapActions("auth", ["LOGIN", "LOGOUT"]),
    ...mapActions(["GET_CARRINHO"]),

    async submitLogin() {
      this.hasError = false;
      const erro = await this.LOGIN(this.usuario);

      if (!erro) {
        this.$router.push({ name: "Home" });
        this.GET_CARRINHO();
      } else this.hasError = true;
    },

    toRegister() {
      this.$router.push({ name: "Cadastro" });
    },
  },
};
</script>

<style></style>
