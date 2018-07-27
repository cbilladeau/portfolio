import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './assets/stylus/main.styl'
import '../public/GeosansLight.otf'
import '../public/GeosansLight-Oblique.otf'
import '../public/TypewriterCondensed.otf'
import '../public/TypewriterCondensed-Bold.otf'
import '../public/hero_01.png'
import '../public/hero_02.png'
import '../public/hero_03.png'
import '../public/hero_04.png'
import '../public/hero.png'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})