<template>
    <section v-on:scroll="handleScroll">
        <div class="hero-desktop">
            <img-blur class="layer layer-01"
                data-type="parallax"
                data-depth="0.20"
                :image-source="('./public/hero_04.png')"
                loading-image="/public/hero_00.png"
                error-image="/public/hero.png"
            ></img-blur>
            <img-blur class="layer layer-02"
                data-type="parallax"
                data-depth="0.50"
                :image-source="('./public/hero_03.png')"
                loading-image="/public/hero_00.png"
                error-image="/public/hero.png"
            ></img-blur>
            <img-blur class="layer layer-03"
                data-type="parallax"
                data-depth="0.80"
                :image-source="('./public/hero_02.png')"
                loading-image="/public/hero_00.png"
                error-image="/public/hero.png"
            ></img-blur>
            <img-blur class="layer layer-04"
                data-type="parallax"
                data-depth="1.00"
                :image-source="('./public/hero_01.png')"
                loading-image="/public/hero_00.png"
                error-image="/public/hero.png"
            ></img-blur>
            <div class="hero-header">
                <h1 class="header-type light display-3 text-xs-center">UI Designer & Frontend Developer</h1>
                <div class="subheader-type light display-1 mb-3 text-xs-center">Design, Code & Everything In Between</div>
            </div>
        </div>
    </section>
</template>

<script>

import ImgBlur from './ImgBlur.vue'

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
    mounted() {
        this.handleScroll();
    },
    data() {
        return {}
    }
}
</script>