<template>
    <div>
        <video :src="data.url" autoplay="autoplay" controls="controls"></video>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Object,
                default: ''
            }
        }
    }
</script>
