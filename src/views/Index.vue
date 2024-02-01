<template>
  <div>
    <a-layout class="layout">
      <!--      头部-->
      <a-layout-header>
        <Header/>
      </a-layout-header>
      <a-layout-content>
        <Welcome/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        智慧校园 ©2024 Created by 杜杜
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

import Header from "../components/Header.vue";
import Welcome from "./pub/Welcome.vue";
</script>

<style scoped>


</style>
