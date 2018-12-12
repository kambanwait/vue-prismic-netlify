import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    header: {
      title: "",
      heroImage: "",
      introTitle: "",
      introCopy: ""
    },
    itemCount: 0,
    allItems: {
      items: []
    },
    latest: {
      title: "",
      excerpt: "",
      id: ""
    },
    singleListItemData: {
      title: "",
      heroImg: "",
      copy: ""
    }
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
});
