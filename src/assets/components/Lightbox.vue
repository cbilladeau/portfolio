<template>
    <v-flex xs12 md4>
        <a :href="images[0]" target="_blank" @click.prevent="show" @click="noScroll" class="lightbox__thumbnail">
            <img :src="thumbnail" :alt="alternateText">
        </a>
        <div class="lightbox" v-if="visible" @click="hide">
            <div class="lightbox__close" @click="hide">X</div>
            <div class="lightbox__element" @click.stop="">
                <div
                    class="lightbox__arrow lightbox__arrow--left"
                    @click.stop.prevent="prev"
                    :class="{'lightbox__arrow--invisible': ! has_prev()}"
                >
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        <path d="M0-.5h24v24H0z" fill="none"/>
                    </svg>
                </div>
                <div class="lightbox__image" @click.stop="">
                    <img :src="images[index]" v-if="displayImage">
                </div>
                <div
                    class="lightbox__arrow lightbox__arrow--right"
                    @click.stop.prevent="next"
                    :class="{'lightbox__arrow--invisible': ! has_next()}"
                >
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                </div>
            </div>
        </div>
    </v-flex>
</template>

<script>
    export default {
        props: [
            'thumbnail',
            'images',
            'alternateText',
        ],
        data() {
            return {
                visible: false,
                index: 0,
                displayImage: true
            }
        },
        mounted() {
            window.addEventListener('keydown', this.eventListener)
        },
        destroyed() {
            window.removeEventListener('keydown', this.eventListener)
        },
        methods: {
            show() {
                this.visible = true
                this.index = 0
            },
            hide() {
                this.visible = false
                this.index = 0
                document.body.style.overflow = "auto"
            },
            has_next() {
                return (this.index + 1 < this.images.length)
            },
            has_prev() {
                return (this.index - 1 >= 0)
            },
            prev() {
                if (this.has_prev()) {
                    this.index -= 1
                }
            },
            next() {
                if (this.has_next()) {
                    this.index += 1
                }
            },
            eventListener(e) {
                if (this.visible) {
                    switch (e.key) {
                        case 'ArrowRight':
                            this.next()
                            break
                        case 'ArrowLeft':
                            this.prev()
                            break
                        case 'ArrowDown':
                        case 'ArrowUp':
                        case ' ':
                            e.preventDefault()
                            break
                        case 'Escape':
                            this.hide()
                            break
                    }
                }
            },
            noScroll(e) {
                if (this.visible) {
                    e.preventDefault()
                    document.body.style.overflow = "hidden"
                }
            }
        }
    }
</script>