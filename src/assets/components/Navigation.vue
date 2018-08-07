<template>
    <v-speed-dial
        v-model="fab"
        fixed
        :top="top"
        :right="right"
        :direction="direction"
        :transition="transition"
    >
        <v-btn
            slot="activator"
            v-model="fab"
            light
            fab
        >
            <v-icon>menu</v-icon>
            <v-icon>close</v-icon>
        </v-btn>
        <v-btn
            v-for="nav in navs"
            :title="nav.name"
            :key="nav.index"
            @click="$vuetify.goTo(nav.target, scrollOptions)"
            fab
            light
            small
        >
            <v-icon>{{ nav.icon }}</v-icon>
        </v-btn>
    </v-speed-dial>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'

export default {
    data() {
        return {
            direction: 'bottom',
            fab: false,
            top: true,
            right: true,
            transition: 'slide-y-transition',
            navs:
            [
                {
                    name: 'Skills',
                    icon: 'info',
                    target: '#intro'
                },
                {
                    name: 'Works',
                    icon: 'photo_album',
                    target: '#works'
                },
                {
                    name: 'About',
                    icon: 'person',
                    target: '#about'
                }
            ]
        }
    },
    computed: {
        scrollOptions() {
            return {
                duration: 900,
                offset: 0,
                easing: 'easeInOutQuad'
            }
        }
    }
}
</script>