<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <lightbox
                v-for="img in image"
                :key="img.index"
                :thumbnail="img.thumbnail"
                :images="img.imgs"
            >
            </lightbox>
        </v-layout>
    </v-container>
</template>

<script>
    import Lightbox from './Lightbox.vue'

    export default{
        components: {
            Lightbox
        },
        data() {
            return {
                image : [
                    {
                        thumbnail : '../public/projects/thumb-bod.png',
                        imgs: [
                            '../public/projects/bod/bod-01.png',
                            '../public/projects/bod/bod-02.png',
                            '../public/projects/bod/bod-03.png',
                            '../public/projects/bod/bod-04.png'
                        ],
                    },
                    {
                        thumbnail : '../public/projects/thumb-icc.png',
                        imgs: [
                            '../public/projects/icc/icc.png',
                            '../public/projects/icc/icc-03.png',
                            '../public/projects/icc/icc-04.png',
                            '../public/projects/icc/nav-03.png',
                            '../public/projects/icc/icc-06.png',
                            '../public/projects/icc/icc-07.png',
                            '../public/projects/icc/icc-08.png',
                            '../public/projects/icc/icc-09.png'
                        ],
                    },
                    {
                        thumbnail : '../public/projects/thumb-myicc.png',
                        imgs: [
                            '../public/projects/myicc/myicc-01.png',
                            '../public/projects/myicc/myicc-02.png',
                            '../public/projects/myicc/myicc-03.png',
                            '../public/projects/myicc/myicc-04.png'
                        ],
                    },
                    {
                        thumbnail : '../public/projects/thumb-premium.png',
                        imgs: [
                            '../public/projects/premium/premium-01.png',
                            '../public/projects/premium/premium-02.png',
                            '../public/projects/premium/premium-03.png'
                        ],
                    },
                    {
                        thumbnail : '../public/projects/thumb-shop.png',
                        imgs: [
                            '../public/projects/shop/shop-01.png',
                            '../public/projects/shop/shop-02.png',
                            '../public/projects/shop/shop-03.png',
                            '../public/projects/shop/shop-04.png'
                        ],
                    },
                    {
                        thumbnail : '../public/projects/thumb-video.png',
                        imgs: [
                            '../public/projects/video/video-01.jpg',
                            '../public/projects/video/video-02.jpg',
                            '../public/projects/video/video-03.jpg'
                        ],
                    },
                ]
            }
        }
    }
</script>