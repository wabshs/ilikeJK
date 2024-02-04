<template>
  <div>
    <!--    三部分 左中右-->
    <MdEditor v-model="text"></MdEditor>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css'

const text = ref('hello Editor!')
</script>

<style scoped>

</style>
