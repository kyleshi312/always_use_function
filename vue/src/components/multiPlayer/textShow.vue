<template>
    <div>
        {{ data.content }}
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: String,
                default: ''
            }
        }
    }
</script>
