<template>
    <v-container grid-list-md fluid>
        <v-layout row wrap>
            <v-flex xs12 md4 v-for="image in images" :key="image.index">
                <v-card flat tile :href="image.src">
                    <v-card-media :src="image.src" alt="" :title="image.title" height="200px" />
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
<!--     <v-expansion-panel focusable popout>
        <v-expansion-panel-content v-for="image in images" :key="image.index">
            <div slot="header">{{ image.title }}</div>
            <v-card flat tile :href="image.src">
                <v-card-media :src="image.src" alt="" :title="image.title" height="300px" />
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel> -->
</template>

<script>
    export default{
        props: {},
        mounted() {},
        data() {
            return {
                images : [
                    {
                        src : '../public/thumb-bod.png',
                        title : 'BOD'
                    },
                    {
                        src : '../public/thumb-icc.png',
                        title : 'ICC'
                    },
                    {
                        src : '../public/thumb-membership.png',
                        title : 'ICC - Content'
                    },
                    {
                        src : '../public/thumb-myicc.png',
                        title : 'myICC'
                    },
                    {
                        src : '../public/thumb-premium.png',
                        title : 'premiumACCESS'
                    },
                    {
                        src : '../public/thumb-shop.png',
                        title : 'ICC Store'
                    },
                    {
                        src : '../public/thumb-video.png',
                        title : 'cdpACCESS Recordings'
                    },
                ]
            }
        }
    }
</script>