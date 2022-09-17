import Vue from "vue";
import Vuex from "vuex";

import api from "../axios/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: {},
    isLogged: false,
  },
  mutations: {
    setLogin(state, payload) {
      state.user = payload;
      state.isLogged = true;
    },
    logoutClean(state) {
      state.user = {};
      state.isLogged = false;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await api.post("/token/", credentials);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`
      commit("setLogin", data);
    },
  },
  modules: {},
});
