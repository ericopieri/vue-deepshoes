<template>
  <main id="main">
    <h1 id="titulo-perfil" style="color: rgb(133, 41, 173)">
      Página de Perfil <i class="fa-solid fa-user"></i>
    </h1>
    <section id="container-perfil">
      <aside>
        <nav id="nav-perfil">
          <ul>
            <li
              :class="{ active: active == 'Dados' }"
              @click="active = 'Dados'"
            >
              Meus Dados <i class="fa-regular fa-user icon-profile"></i>
            </li>
            <li
              :class="{ active: active == 'Pedidos' }"
              @click="active = 'Pedidos'"
            >
              Pedidos Concluídos <i class="fa-solid fa-check icon-profile"></i>
            </li>
            <li
              :class="{ active: active == 'Enderecos' }"
              @click="active = 'Enderecos'"
            >
              Endereços <i class="fa-regular fa-address-card icon-profile"></i>
            </li>
          </ul>
        </nav>
      </aside>
      <div id="container-conteudo-perfil">
        <RouterView></RouterView>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: "Dados",
    };
  },
  watch: {
    active(novaRota, antigaRota) {
      if (novaRota != antigaRota) {
        this.$router.push({ name: novaRota });
      }
    },
  },
};
</script>

<style>
</style>