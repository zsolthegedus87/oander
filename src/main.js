import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

import "./common/css/bootstrap-overrides.scss";
import "./common/css/main.scss";

Vue.use(BootstrapVue);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
