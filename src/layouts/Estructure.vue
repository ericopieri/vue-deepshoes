<template>
  <div id="estrutura">
    <nav id="barra-categorias" :class="{ closed: barraClosed }">
      <ul id="barra-categorias-list">
        <li class="barra-categorias-item">
          <a
            href="#"
            class="barra-categorias-link"
            @click="SET_GENERO_HOME('Masculino')"
            >Masculino</a
          >
        </li>
        <li class="barra-categorias-item">
          <a
            href="#"
            class="barra-categorias-link"
            @click="SET_GENERO_HOME('Feminino')"
            >Feminino</a
          >
        </li>
        <li class="barra-categorias-item">
          <a
            href="#"
            class="barra-categorias-link"
            @click="SET_GENERO_HOME('Todos')"
            >Todos</a
          >
        </li>
      </ul>
    </nav>
    <header id="header-page">
      <div>
        <img
          src="../assets/logos/Logoheader.png"
          style="width: 200px; cursor: pointer"
          alt="Logo"
          @click.stop.prevent="$router.push({ name: 'Home' })"
        />
      </div>
      <nav id="nav-menu">
        <ul id="nav-list">
          <li class="nav-item-menu" v-if="isAdmin">
            <a
              href=""
              class="admin"
              @click.stop.prevent="$router.push({ name: 'Admin' })"
              ><i class="fa-solid fa-lock"></i
              ><span class="nav-item-span">Cadastrar Produtos</span></a
            >
          </li>
          <li class="nav-item-menu">
            <a
              href=""
              class="nav-list-link"
              @click.stop.prevent="barraClosed = !barraClosed"
              ><i
                class="fa-solid fa-angle-down"
                :class="{ 'icon-barra-closed': !barraClosed }"
              ></i
              ><span class="nav-item-span">Categorias</span></a
            >
          </li>
          <li class="nav-item-menu">
            <a
              href="#"
              class="nav-list-link"
              @click.stop.prevent="$router.push({ name: 'Carrinho' })"
              ><i id="icon-carrinho" class="fa-solid fa-cart-shopping"
                ><span v-if="carrinho.itens.length" id="qtd-itens-carrinho">{{
                  carrinho.itens.length
                }}</span></i
              ><span class="nav-item-span">Carrinho</span></a
            >
          </li>
          <li class="nav-item-menu">
            <a href="#" class="nav-list-link">
              <i class="fa-solid fa-user"></i
              ><span v-if="!isLogged" class="nav-item-span">Logar</span
              ><span v-else class="nav-item-span"
                >Olá, {{ usuario.nome }}</span
              ></a
            >
            <ul class="dropdown-list">
              <li class="dropdown-list-item">
                <a
                  href="#"
                  class="dropdown-link"
                  @click.stop.prevent="$router.push({ name: 'Dados' })"
                  >Perfil</a
                >
              </li>
              <li class="dropdown-list-item">
                <a
                  href="#"
                  class="dropdown-link"
                  @click.stop.prevent="$router.push({ name: 'Dados' })"
                  >Pedidos</a
                >
              </li>
              <li class="dropdown-list-item" @click.stop.prevent="submitLogout">
                <a href="#" class="dropdown-link">Sair</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <main id="main">
      <router-view></router-view>
    </main>
    <footer id="footer"><span class="projeto-rodape">Projeto Integrador - 2022</span><button class="faq-button" @click="$router.push({ name: 'Faq' })">Perguntas frequentes</button></footer>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { api } from "../axios/index";

export default {
  data() {
    return {
      barraClosed: true,
      usuario: {},
      isAdmin: false,
    };
  },

  created() {
    this.getUsuario();
  },

  computed: {
    ...mapState(["generoHome", "carrinho"]),
    ...mapState("auth", ["isLogged"]),
  },

  methods: {
    ...mapActions("auth", ["LOGOUT"]),
    ...mapMutations(["SET_GENERO_HOME"]),

    submitLogout() {
      this.LOGOUT();
      this.$router.push({ name: "Login" });
    },

    async getUsuario() {
      const { data } = await api.get("/api/usuarios/");
      const [usuario] = data;

      this.usuario = usuario;
      this.isAdmin = usuario.admin;
    },
  },

  watch: {
    generoHome() {
      this.barraClosed = true;
    },
  },
};
</script>

<style></style>
