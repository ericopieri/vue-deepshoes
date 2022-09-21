<template>
  <router-view></router-view>
</template>

<script>
import { tokenChange } from "./axios/index";

export default {
  beforeCreate() {
    tokenChange();
  },
};
</script>


<style></style>
