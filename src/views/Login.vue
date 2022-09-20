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
    <span>Não tem uma conta?</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    submitLogin() {
      this.LOGIN(this.usuario).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

<style></style>
