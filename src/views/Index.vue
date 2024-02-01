<template>
  <div>
    <el-container>
      <el-affix>
        <el-header class="header">
          <Header/>
        </el-header>
      </el-affix>

      <el-main style="min-height: 1500px;padding: 0">
        <Welcome/>
      </el-main>

      <!--      页脚-->
      <el-footer class="footer">
        Smart School™ Designed By Du CopyRight 2024
      </el-footer>
    </el-container>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup lang="ts">


import Header from "../components/Header.vue";
import Welcome from "./pub/Welcome.vue";
</script>

<style scoped>
.footer {
  text-align: center;

}
.header{
  padding: 0;
}


</style>
