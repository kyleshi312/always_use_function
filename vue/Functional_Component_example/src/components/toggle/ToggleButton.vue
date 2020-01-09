<template>
  <switch-comp :on="on" @click.native="onClick"></switch-comp>
</template>
<script>
import Switch from './Switch.vue';

export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('toggle');
    },
  },
  components: {
    SwitchComp: Switch,
  },
};
</script>
<style>
</style>
