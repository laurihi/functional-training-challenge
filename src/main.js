import Vue from 'vue'
import App from './App.vue'
import vuexI18n from 'vuex-i18n';

import router from './router/router.js'
import store from './store/store.js'

import translationsEn from './i18n/en_US.json';
import translationsFi from './i18n/fi_FI.json';

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('fi', translationsFi);

// set the start locale to use
Vue.i18n.set('en');



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
