import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Estrutura from "../layouts/Estructure.vue";

import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Estrutura,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        name: "Home",
        path: "/home",
        component: Home,
      },
      {
        path: "/finalizar",
        name: "Finalizar",
        component: () => import("../views/Finalizar.vue"),
      },
      {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/CadastroProdutos.vue"),
      },
      {
        name: "ProdutoDetalhado",
        path: "/produto/:id",
        component: () => import("../views/ProdutoDetalhado.vue"),
      },
      {
        name: "Carrinho",
        path: "/carrinho",
        component: () => import("../views/Carrinho.vue"),
      },
      {
        name: "Perfil",
        path: "/perfil",
        component: () => import("../layouts/Perfil.vue"),
        children: [
          {
            name: "Pedidos",
            path: "pedidos",
            component: () => import("../views/Pedidos.vue"),
          },
          {
            name: "Dados",
            path: "dados",
            component: () => import("../views/Dados.vue"),
          },
          {
            name: "Enderecos",
            path: "enderecos",
            component: () => import("../views/Enderecos.vue"),
          },
          {
            name: "AdicionarEndereco",
            path: "enderecos/adicionar",
            component: () => import("../views/AdicionarEndereco.vue"),
          },
          {
            name: "PedidoDetalhado",
            path: "pedidos/:id",
            component: () => import("../views/PedidoDetalhado.vue"),
          },
          {
            name: "Avaliar",
            path: "avaliar/:id",
            component: () => import("../views/Avaliar.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "",
    component: () => import("../layouts/Blank.vue"),
    children: [
      {
        name: "Login",
        path: "/login",
        component: () => import("../views/Login.vue"),
      },
      {
        name: "Cadastro",
        path: "/cadastro",
        component: () => import("../views/Cadastro.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth.isLogged
  ) {
    return next({ name: "Login" });
  } else {
    return next();
  }
});

export default router;
