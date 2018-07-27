import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './assets/stylus/main.styl'
import '../public/GeosansLight.otf'
import '../public/GeosansLight-Oblique.otf'
import '../public/TypewriterCondensed.otf'
import '../public/TypewriterCondensed-Bold.otf'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})