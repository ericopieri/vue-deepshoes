<template>
  <div id="estrutura">
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
          </li>
        </ul>
      </nav>
    </header>
    <BarraCategorias />
    <main id="main-container">
      <div id="estrutura-home">
        <div id="flex-tenis">
          <div class="flex-tenis-item">verme</div>
          <div class="flex-tenis-item">verme</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BarraCategorias from "../components/BarraCategorias";

export default {
  components: { BarraCategorias },
};
</script>

<style></style>
