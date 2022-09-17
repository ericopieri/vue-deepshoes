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
        path: "/admin",
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
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isLogged) {
    next({ name: "Login" })
  } else {
    next();
  }
});

export default router;
