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
        <div>LOGO</div>
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
              <a href="" class="nav-list-link"
                ><i class="fa-solid fa-user"></i
                ><span class="nav-item-span">Logar</span></a
              >
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
          <img src="@/assets/banner1.jpg" alt="">
        </slide>
        <slide>
          <img src="@/assets/banner2.jpg" alt="">
        </slide>
      </carousel>
    <main id="main">
      <div class="container-main-titulo-produtos">
        <h1 class="titulo-container-produtos">COMPRE NA DEEPSHOES</h1>
        <section class="cointainer-produtos">
            <div v-for="(produto, index) of produtos" :key="index" class="container-produto">
              <div class="imagem-produto">
                <img :src="produto.src" class="imagem-produto-img" alt="">
              </div>
              <div class="infos-produto">
                <h2 class="titulo-produto">{{ produto.titulo }}</h2>
                <span class="desc-produto">{{ produto.desc }}</span>
                <span class="preco-produto">{{ produto.preco }}</span>
              </div>
            </div>
        </section>
      </div>
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
      produtos: [
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        { src: require('../assets/tenis/tenis1.jpg'), preco: 'R$ 30,00', titulo: 'Nike Air Max', desc: 'Lorem ipsum dolor met a det a dot melet fock let ipsum dolor' },
        
      ],
      barraClosed: true,
    };
  },
};
</script>

<style></style>
