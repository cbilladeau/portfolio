<template>
    <parallax id="hero">
        <div class="layer-01" data-type="parallax" data-depth="0.10"></div>
        <div class="layer-02" data-type="parallax" data-depth="0.20"></div>
        <div class="layer-03" data-type="parallax" data-depth="0.50"></div>
        <div class="layer-04" data-type="parallax" data-depth="0.80"></div>
        <div class="layer-05" data-type="parallax" data-depth="1.00"></div>
        <div>
            <img src="public/v.png" alt="Vuetify.js">
            <h1 class="header-type light display-2 mb-2 text-xs-center">UI Designer & Frontend Developer</h1>
            <div class="display-1 mb-3 text-xs-center">Design, Code & Everything In Between</div>
        </div>
    </parallax>
</template>

<script>
import Parallax from 'vue-parallaxy'
    export default {
        components: {
          Hero
        }
    }
</script>