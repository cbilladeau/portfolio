<template>
    <section v-on:scroll="handleScroll">
        <div class="hero-desktop">
            <div class="layer layer-01" data-type="parallax" data-depth="0.20"></div>
            <div class="layer layer-02" data-type="parallax" data-depth="0.50"></div>
            <div class="layer layer-03" data-type="parallax" data-depth="1.00"></div>
            <div class="hero-header">
                <h1 class="header-type light display-3 text-xs-center">UI Designer & Frontend Developer</h1>
                <div class="subheader-type light headline mb-3 text-xs-center">Design, Code & Everything In Between</div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {
        handleScroll (event) {
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