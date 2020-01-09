<template>
  <div id="app" style="margin: 0 auto; max-width:1000px;">
    <h3>controlled toggle</h3>
    <toggle :on="on" @toggle="onToggle" :on-reset="onFirstReset">
      <template slot-scope="{status, toggle, reset}">
        <toggle-button :on="status.on" @toggle="toggle"></toggle-button>
        <toggle-status :on="status.on">{{firstTimes}}</toggle-status>
        <button @click="reset">reset</button>
      </template>
    </toggle>
    <br>
    <h3>uncontrolled toggle</h3>
    <toggle @toggle="onToggle" :on-reset="onSecondReset">
      <template v-slot="{status, toggle, reset}">
        <toggle-button :on="status.on" @toggle="toggle"></toggle-button>
        <toggle-status :on="status.on">{{secondTimes}}</toggle-status>
        <button @click="reset">reset</button>
      </template>
    </toggle>
    <div>
        <button @click="changeList">changeList</button>
        <SmartList :items="listType" :isOrdered="listIsOrder">
        </SmartList>
    </div>
    <SmartCom>
        <template v-slot="{data}">
            <ToggleMedia :data="data"></ToggleMedia>
        </template>
    </SmartCom>
  </div>
</template>

<script>
import Toggle from '@/components/toggle/Toggle.vue';
import ToggleButton from '@/components/toggle/ToggleButton.vue';
import ToggleStatus from '@/components/toggle/ToggleStatus.vue';
import SmartList from '@/components/list/smartList.vue';
import SmartCom from '@/components/multiPlayer/smartCom.vue';
import ToggleMedia from '@/components/multiPlayer/toggleMedia.vue';

export default {
  name: 'App',
  components: {
    Toggle,
    ToggleButton,
    ToggleStatus,
    SmartList,
    SmartCom,
    ToggleMedia
  },
  data() {
    return {
      times: 0,
      on: false,
      listType: [33],
      listIsOrder: false,
      i: 0,
      change: false
    };
  },
  computed: {
    firstTimes() {
      const rest = 6 - this.times;
      return rest >= 0 ? `${this.times} times` : 'need to reset';
    },
    secondTimes() {
      return `${this.times} times`;
    },
  },
  methods: {
    onToggle(on) {
      if (this.times < 4) this.on = on;
      this.times++;
      console.log('toggle', on);
    },
    onFirstReset(on) {
      this.times = 0;
      console.log('first reset toggle', on);
    },
    onSecondReset(on) {
      this.times = 0;
      console.log('second reset toggle', on);
    },
    changeList() {
        let j = this.i % 4
        this.i++
        this.listIsOrder = false
        this.change = !this.change
        switch (j) {
            case 0:
                this.listType = []
                break;
            case 1:
                this.listType.push({})
                break;
            case 2:
                this.listIsOrder = true
                break;
            case 3:
                this.listType = [232]
                break;
        }
    }
  },
};
</script>
<style>
/* Add application styles & imports to this file! */

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Antic Slab", serif;
}
hr {
  width: 100%;
}
/*
toggle styles copied and modified from
https://codepen.io/mallendeo/pen/eLIiG
by Mauricio Allende (https://mallendeo.com/)
 */
.toggle-btn {
  display: inline-block;
  outline: 0;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  border: 1px solid #e8eae9;
}
.toggle-btn:focus::after,
.toggle-btn:active::after {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
    inset 0px 0px 0px 1.5px #9c9c9c;
}
.toggle-btn::after {
  left: 0;
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  border-radius: 2em;
  background: #fbfbfb;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    padding 0.3s ease, margin 0.3s ease;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
}
.toggle-btn.toggle-btn-on::after {
  left: 50%;
}
.toggle-btn.toggle-btn-on {
  background: #86d993;
}
.toggle-btn.toggle-btn-on:active {
  box-shadow: none;
}
.toggle-btn.toggle-btn-on:active::after {
  margin-left: -0.8em;
}
.toggle-btn:active::after {
  padding-right: 0.8em;
}
.toggle-input {
  display: none;
}
</style>
