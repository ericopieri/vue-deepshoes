import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: () => import('../layouts/Estructure.vue'),
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/admin',
        component: () => import('../views/CadastroProdutos.vue')
      },
      {
        path: '/produto/:id',
        component: () => import('../views/ProdutoDetalhado.vue')
      }
    ]
  },
  {
    path: '',
    component: () => import('../layouts/Blank.vue'),
    children: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/cadastro',
        component: Cadastro
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
