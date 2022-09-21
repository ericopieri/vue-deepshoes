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
    SET_LOGIN_INFO(state, payload) {
      state.user = payload;
      state.isLogged = true;
    },
    LOGOUT_CLEAN(state) {
      state.user = {};
      state.isLogged = false;
    }
  },
  actions: {
    async LOGIN({ commit }, credentials) {
      try {
        const { data: userInfo } = await api.post("/token/", credentials);
        api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.access}`;
        commit("SET_LOGIN_INFO", userInfo);
      } catch (err) {
        const { detail: msgErro } = err.response?.data;
        return msgErro;
      }
    },
    LOGOUT({ commit }) {
      commit("LOGOUT_CLEAN");
    }
  },
  modules: {},
});
