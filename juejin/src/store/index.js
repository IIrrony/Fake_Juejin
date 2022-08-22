import Vue from 'vue'
import Vuex from 'vuex'

import getList from "@/api/getList"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    idx:1
  },
  getters: {
  },
  mutations: {
    PUTLISTS(state, data) {
      state.lists = data.data
    },
    UPDATELISTS(state, data) {
      let newlist = state.lists.concat(data.data)
      state.lists = newlist
    },
    GETIDX(state, data) {
      state.idx = data;
    }
  },
  actions: {
    async putlists({ commit }) {
      let res = await getList();
      // console.log(res);
      commit("PUTLISTS", {data: res.rows})
    },

    updatelists({ commit }, data) {
      console.log(data);
      commit("UPDATELISTS", {data})
    },
    getidx({ commit }, data) {
      commit("GETIDX", data);
    }

  },
  modules: {
  }
})
