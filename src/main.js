import Vue from "vue";
import App from "./App.vue";
import { store } from "../src/store/index";
import VueToastr from "vue-toastr";
import "./assets/scss/set.scss";
import "./assets/scss/fonts.scss";
Vue.use(VueToastr, {});
Vue.config.productionTip = false;

new Vue({
  store,
  mounted() {
    this.$toastr.defaultPosition = "toast-top-right";
  },

  render: (h) => h(App),
}).$mount("#app");
