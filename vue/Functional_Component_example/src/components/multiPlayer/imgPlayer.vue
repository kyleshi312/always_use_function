<template>
    <img :src="data.url" alt="" width="400" height="300">
</template>
<script>
    export default {
        props: {
            data: {
                type: Object,
                default: 'dd'
            }
        }
    }
</script>
