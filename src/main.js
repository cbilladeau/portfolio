import Vue from 'vue'
import App from './App.vue'
import {
    Vuetify,
    VApp,
    VCard,
    VFooter,
    VGrid,
    VList,
    VParallax,
    VIcon,
    VBtn,
    transitions
} from 'vuetify'
import { Ripple } from 'vuetify/es5/directives'

import './assets/stylus/main.styl'
import '../public/GeosansLight.otf'
import '../public/GeosansLight-Oblique.otf'
import '../public/TypewriterCondensed.otf'
import '../public/TypewriterCondensed-Bold.otf'

Vue.use(Vuetify, {
    components: {
        VApp,
        VCard,
        VFooter,
        VGrid,
        VList,
        VParallax,
        VIcon,
        VBtn,
        transitions
    },
    directives: {
        Ripple
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})