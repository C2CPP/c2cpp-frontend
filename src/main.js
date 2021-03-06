import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import apollo from "./apollo"
import store from "./store";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.use(Ionic);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: apollo,
  store,
  render: h => h(App)
}).$mount("#app");