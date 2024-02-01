<template>
  <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        :ellipsis="false"
    >
      <el-menu-item index="0">
        <img src="/src/assets/vue.svg"
             style="width: 100px"
             alt="logo"
        />
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="2">Processing Center</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const activeIndex = ref('1')

</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
