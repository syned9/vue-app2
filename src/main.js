import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
            username: "syned",
            password: "password",
            cryptomonnaie: ""
    }
},
  router,
  render: h => h(App)
}).$mount("#app");
