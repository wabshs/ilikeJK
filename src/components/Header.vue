<template>
  <div>
    <div class="logo" />
    <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">导航</a-menu-item>
      <a-menu-item key="3">集市</a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);
</script>

<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background-image: url("../assets/image.png");
  background-size: cover;
}
</style>
