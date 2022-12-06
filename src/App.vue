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

  async mounted() {
    await this.GET_CARRINHO();
  },
};
</script>

<style></style>
