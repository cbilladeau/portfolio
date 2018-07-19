import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './assets/stylus/main.styl'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})