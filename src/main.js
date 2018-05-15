import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './assets/stylus/main.styl'

import '../public/code.svg'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})