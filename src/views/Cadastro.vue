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
      <input
        type="password"
        v-model="novoUsuario.password"
        :class="{
          'senhas-erradas': hasError.errorSenhas,
        }"
      />
      <label for="nome">Confirmar senha:</label>
      <input
        type="password"
        v-model="confirmarSenha"
        :class="{
          'senhas-erradas': hasError.errorSenhas,
        }"
      />
      <span
        class="error-cadastro"
        v-show="hasError.errorSenhas || hasError.errosGerais"
        >{{ errorMessage }}</span
      >
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
      hasError: {
        errorSenhas: false,
        errosGerais: false,
      },
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions("auth", ["LOGOUT", "LOGIN"]),

    async submitRegister() {
      this.LOGOUT();

      this.hasError.errorSenhas = false;
      this.hasError.errosGerais = false;
      this.errorMessage = "";

      if (!(this.novoUsuario.password == this.confirmarSenha)) {
        this.hasError.errorSenhas = true;
        this.errorMessage = "As credenciais não batem!";
        return;
      } else {
        if (!this.conferirSenha()) {
          this.hasError.errorSenhas = true;
          this.errorMessage =
            "A sua senha é muito fraca! Ela deve conter pelos menos uma letra maiuscula e um número!";
        }
      }

      const erro = await this.REGISTER(this.novoUsuario);

      if (!erro) {
        const { email, password } = this.novoUsuario;
        await this.LOGIN({ password, email });

        this.$router.push({ path: "/home" });
      } else {
        this.hasError.errosGerais = true;
        this.errorMessage =
          "Ocorreu algum erro! Confira os campos e tente novamente!";
      }
    },

    async REGISTER() {
      try {
        await api.post("/api/usuarios/", this.novoUsuario);
      } catch (err) {
        return err;
      }
    },

    conferirSenha() {
      const { password } = this.novoUsuario;

      if (
        !this.containsUppercase(password) &&
        !this.containsNumbers(password) &&
        !(password.length >= 8)
      ) {
        return false;
      }

      return true;
    },

    containsUppercase(str) {
      return /[A-Z]/.test(str);
    },

    containsNumbers(str) {
      return /[0-9]/.test(str);
    },
  },
};
</script>

<style></style>
