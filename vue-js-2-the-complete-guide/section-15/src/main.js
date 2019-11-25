import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8081/coordinators';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  el: '#app',
  render: h => h(App)
});
