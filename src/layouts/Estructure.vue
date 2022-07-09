<template>
  <div id="estrutura">
      <nav id="barra-categorias" :class="{ closed: barraClosed }">
        <ul id="barra-categorias-list">
          <li class="barra-categorias-item">
            <a href="" class="barra-categorias-link">Masculino</a>
          </li>
          <li class="barra-categorias-item">
            <a href="" class="barra-categorias-link">Feminino</a>
          </li>
          <li class="barra-categorias-item">
            <a href="" class="barra-categorias-link">Todos</a>
          </li>
        </ul>
      </nav>
      <header id="header-page">
        <div>
          <img src="../assets/logos/Logoheader.png" style="width: 200px" alt="">
        </div>
        <form action="" id="form-filtro">
          <input
            type="text"
            id="filtro-home"
            placeholder="O que você está procurando?"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <nav id="nav-menu">
          <ul id="nav-list">
            <li class="nav-item-menu">
              <a href="" class="nav-list-link"
                ><i class="fa-solid fa-cart-shopping"></i
                ><span class="nav-item-span">Carrinho</span></a
              >
            </li>
            <li class="nav-item-menu">
              <router-link :to="{ path: '/login' }">
              <a href="" class="nav-list-link"
                >
                <i class="fa-solid fa-user"></i
                ><span class="nav-item-span">Logar</span></a
              ></router-link>
              <ul class="dropdown-list">
                <li class="dropdown-list-item"><a href="" class="dropdown-link">Meus dados</a></li>
                <li class="dropdown-list-item"><a href="" class="dropdown-link">Meu perfil</a></li>
                <li class="dropdown-list-item"><a href="" class="dropdown-link">Sair</a></li>
              </ul>
            </li>
            <li class="nav-item-menu">
              <a href="" class="nav-list-link" @click.stop.prevent="barraClosed = !barraClosed"
                ><i class="fa-solid fa-angle-down" :class="{ 'icon-barra-closed': !barraClosed }"></i
                ><span class="nav-item-span">Categorias</span></a
              >
            </li>
          </ul>
        </nav>
      </header>
      <carousel perPage=1 paginationActiveColor="#8844ee">
        <slide>
          <img src="../assets/banner/banner1.gif" alt="">
        </slide>
        <slide>
          <img src="../assets/banner/banner2.gif" alt="">
        </slide>
      </carousel>
      <main id="main">
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
    Carousel,
    Slide
  },
  data() {
    return {
      barraClosed: true,
    };
  },
};
</script>



<style></style>
