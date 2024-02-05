<template>
  <div>

  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {MdPreview, MdCatalog} from "md-editor-v3";
import 'md-editor-v3/lib/preview.css'

const id = 'preview-only';
const text = ref("# 1");
const scrollElement = document.documentElement;

</script>

<style scoped>

</style>
