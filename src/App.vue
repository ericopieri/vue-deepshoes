<template>
  <router-view></router-view>
</template>

<script>
import { tokenChange } from "./axios/index";
import { mapActions } from "vuex";
import { api } from "./axios/index";

export default {
  methods: {
    ...mapActions(["SAVE_CARRINHO", "GET_CARRINHO"]),
  },

  beforeCreate() {
    tokenChange();
  },

  created() {
    this.GET_CARRINHO();

    window.addEventListener("beforeunload", async () => {
      const [usuario] = api.get("api/usuarios/");

      await this.SAVE_CARRINHO(usuario.id);
    });
  },
};
</script>

<style></style>
