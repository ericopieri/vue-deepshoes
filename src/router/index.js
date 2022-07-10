import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import CadastroProdutos from '../views/CadastroProdutos.vue'

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
        component: CadastroProdutos
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
