// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import MintUI from 'mint-ui';
import axios from 'axios';
import store from './store/index.js';

import 'mint-ui/lib/style.css';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(MintUI);
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
