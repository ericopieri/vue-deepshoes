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
        <img
          src="../assets/logos/Logoheader.png"
          style="width: 200px; cursor: pointer"
          alt="Logo"
          @click.stop.prevent="$router.push({ name: 'Home' })"
        />
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
              href=""
              class="nav-list-link"
              @click.stop.prevent="$router.push({ name: 'Carrinho' })"
              ><i class="fa-solid fa-cart-shopping"></i
              ><span class="nav-item-span">Carrinho</span></a
            >
          </li>
          <li class="nav-item-menu">
            <router-link :to="{ path: '/login' }">
              <a href="" class="nav-list-link">
                <i class="fa-solid fa-user"></i
                ><span class="nav-item-span">Logar</span></a
              ></router-link
            >
            <ul class="dropdown-list">
              <li class="dropdown-list-item">
                <a href="" class="dropdown-link">Meus dados</a>
              </li>
              <li class="dropdown-list-item">
                <a href="" class="dropdown-link">Meu perfil</a>
              </li>
              <li class="dropdown-list-item">
                <a href="" class="dropdown-link">Sair</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <main id="main">
      <router-view></router-view>
    </main>
    <footer id="footer">Projeto Integrador - 2022</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barraClosed: true,
    };
  },
};
</script>



<style></style>
