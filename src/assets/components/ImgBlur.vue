<template>
    <div :class="[imageClass, imageState]" :style="computedStyle" :data-state="imageState"></div>
</template>

<script>
export default {
    props: {
        imageSource: {
            type: String,
            required: true
        },
        imageClass: {
            type: String,
            required: false,
            default: ''
        },
        imageSuccessCallback: {
            type: Function,
            required: false,
            default: function() {}
        }
    },
    data() {
        return {
            imageState: 'loading',
            asyncImage: new Image()
        }
    },
    computed: {
        computedStyle() {
            if (this.imageState === 'loaded') {
                return 'background-image: url(' + this.asyncImage.src + ');'
            }
            return '';
        }
    },
    methods: {
        fetchImage(url) {
            this.asyncImage.onload = this.imageOnLoad
            this.imageState = 'loading'
            this.asyncImage.src = this.imageSource
        },
        imageOnLoad(success) {
            this.imageState = 'loaded'
            this.imageSuccessCallback()
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.fetchImage()
        })
    }
}
</script>