<template>
  <router-view></router-view>
</template>

<script>
import { tokenChange } from "./axios/index";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["UPDATE_CARRINHO", "GET_CARRINHO"]),
  },

  beforeCreate() {
    tokenChange();
  },

  mounted() {
    this.GET_CARRINHO();

    window.addEventListener("beforeunload", async () => {
      await this.UPDATE_CARRINHO();
    });
  },
};
</script>

<style></style>
