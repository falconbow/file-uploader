import Vue from "vue";
import App from "./App.vue";
import { store } from "../src/store/index";
import "./assets/scss/set.scss";
import "./assets/scss/fonts.scss";
Vue.config.productionTip = false;

new Vue({
  store,
  mounted() {},

  render: (h) => h(App),
}).$mount("#app");
