import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import auth from "./modules/auth";

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
    generoHome: "Todos",
    carrinho: {
      itens: [],
      preco_total: 0
    }
  },
  mutations: {
    SET_GENERO_HOME(state, payload) {
      state.generoHome = payload;
    },
    PUSH_CARRINHO(state, payload) {
      state.carrinho.itens.push(payload);
      let total = 0;
      state.carrinho.itens.forEach((item) => total += Number(item.valor_unitario));
      state.carrinho.preco_total = total;
    }
  },
  actions: {},
  modules: {
    auth,
  },
  plugins: [vuexLocalStorage.plugin],
});
