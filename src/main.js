import Vue from 'vue'
import App from './App.vue'
import vuetron from 'vuetron';

Vue.use(vuetron.VuetronVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
