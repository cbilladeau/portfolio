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
    },
    theme: {
        "primary": "#2a1b3d",
        "secondary": "#44318d",
        "accent": "#d83f87",
        "warning": "#e98074",
        "error": "#8265a7",
        "info": "#00b8d4",
        "success": "#00bfa5"
    },
    options: {
        minifyTheme: function (css) {
            return process.env.NODE_ENV === 'production'
                ? css.replace(/[\s|\r\n|\r|\n]/g, '')
                : css
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})