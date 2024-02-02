<script setup lang="ts">
import {useDark, useToggle} from "@vueuse/core";

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})

useDark({
  onChanged(dark: boolean) {
    useToggle(dark)
  },
})
</script>


<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<style scoped>
#app {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
