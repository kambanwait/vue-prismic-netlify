// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueResource from "vue-resource";
import PrismicVue from "prismic-vue";
import "es6-promise/auto";
import Vuex from "vuex";

import App from "./App";

Vue.config.productionTip = false;
Vue.use(vueResource, Vuex, PrismicVue, {
  endpoint: window.prismic.endpoint
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
