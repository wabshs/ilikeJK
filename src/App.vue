<template>
  <div>
    <a-layout class="layout">
      <a-layout-header>
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
      </a-layout-header>
      <a-layout-content >
        <div :style="{ background: '#fff', padding: '24px', minHeight: '680px' }">Content</div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        智慧校园 ©2024 Created by 杜杜
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);
</script>

<style scoped>
.layout .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(0, 220, 255, 0.3);
}


</style>
