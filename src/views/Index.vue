<template>
  <div>
    <el-container>
      <el-affix>
        <el-header class="header">
          <Header/>
        </el-header>
      </el-affix>

      <el-main style="min-height: 1500px">

      </el-main>

      <!--      页脚-->
      <el-footer class="footer">
        Smart School™ Designed By Du CopyRight 2024
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">


import Header from "../components/Header.vue";
</script>

<style scoped>
.footer {
  text-align: center;

}



</style>
