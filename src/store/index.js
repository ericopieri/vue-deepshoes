import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import { api } from "../axios/index";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

export default new Vuex.Store({
  state: {
    usuario: {},
    isLogged: false,
  },
  mutations: {
    SET_LOGIN_INFO(state, payload) {
      state.usuario = payload;
      state.isLogged = true;
    },
    LOGOUT_CLEAN(state) {
      state.usuario = {};
      state.isLogged = false;
    },
  },
  actions: {
    async LOGIN({ commit }, credentials) {
      try {
        const { data: userInfo } = await api.post("/token/", credentials);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${userInfo.access}`;
        commit("SET_LOGIN_INFO", userInfo);
      } catch (err) {
        const { detail: msgErro } = err.response?.data;
        return msgErro;
      }
    },
    LOGOUT({ commit }) {
      commit("LOGOUT_CLEAN");
    },
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin],
});
