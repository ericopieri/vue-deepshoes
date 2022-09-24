import { api, tokenChange } from "@/axios/index";

export default {
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
                tokenChange(userInfo.access);
                commit("SET_LOGIN_INFO", userInfo);
            } catch (err) {
                const { detail: msgErro } = err?.response?.data;
                return msgErro;
            }
        },
        LOGOUT({ commit }) {
            commit("LOGOUT_CLEAN");
        },
    },
    namespaced: true
}