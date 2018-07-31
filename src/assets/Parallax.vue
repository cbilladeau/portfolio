<template>
    <section :scroll="handleScroll">
        <div class="hero-desktop">
            <img-blur class="layer layer-01"
                data-type="parallax"
                data-depth="0.20"
                :image-source="('./public/hero_04.png')"
            ></img-blur>
            <img-blur class="layer layer-02"
                data-type="parallax"
                data-depth="0.50"
                :image-source="('./public/hero_03.png')"
            ></img-blur>
            <img-blur class="layer layer-03"
                data-type="parallax"
                data-depth="0.80"
                :image-source="('./public/hero_02.png')"
            ></img-blur>
            <img-blur class="layer layer-04"
                data-type="parallax"
                data-depth="1.00"
                :image-source="('./public/hero_01.png')"
            ></img-blur>
            <div class="hero-header">
                <div
                    data-type="parallax"
                    data-depth="0.50"
                >
                    <h1 class="subheader-type light">Hi<span class="color-accent-1">,</span><br />I'm<br />Cour<span class="color-tertiary">.</span></h1>
                    <h2 class="header-type light">UI Designer<br />& Frontend Dev</h2>
                    <h3 class="title-type light">Located in Chicago, IL</h3>
                    <div class="text-xs-center">
                        <v-btn large flat icon class="color-accent-2" @click="$vuetify.goTo('#intro', scrollOptions)">
                            <v-icon x-large>arrow_drop_down</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import ImgBlur from './ImgBlur.vue'
import * as easings from 'vuetify/es5/util/easing-patterns'

export default {
    components: {
        ImgBlur
    },
    methods: {
        handleScroll () {
            window.addEventListener("scroll", function() {
                var depth, i, layer, layers, len, movement, topDistance, translate3d;
                topDistance = this.pageYOffset;
                layers = document.querySelectorAll("[data-type='parallax']");
                for (i = 0, len = layers.length; i < len; i++) {
                    layer = layers[i];
                    depth = layer.getAttribute('data-depth');
                    movement = -(topDistance * depth);
                    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
                    layer.style['-webkit-transform'] = translate3d;
                    layer.style['-moz-transform'] = translate3d;
                    layer.style['-ms-transform'] = translate3d;
                    layer.style['-o-transform'] = translate3d;
                    layer.style.transform = translate3d;
                }
            })
        }
    },
    computed: {
        scrollOptions () {
            return {
                duration: 1200,
                offset: 0,
                easing: 'easeInOutQuad'
            }
        }
    },
    mounted() {
        this.handleScroll();
    },
    data() {
        return {
        }
    }
}
</script>