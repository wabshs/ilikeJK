<script setup lang="ts">
import {onMounted, ref} from "vue";
import {MdPreview, MdCatalog} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import {useRoute} from "vue-router";
import request from "../../apis/request.ts";

const id = 'content';
const scrollElement = document.documentElement
const header = ref('这是一个测试标题');
const content = ref('# 哈哈1');
const route = useRoute();
const articleId = route.params.id;
const views = ref(0);

onMounted(() => {
  request.get("/article/" + articleId)
      .then(res => {
        content.value = res.data.content
        views.value = res.data.views
      })
})
</script>

<template>
  <div class="all">
    <!--    左中右布局-->
    <el-row>
      <el-col :span="4">
        <el-card class="mini_profile">
          <div style="align-items: center;display: flex">
            <!--          头像-->
            <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <!--          名字和其他-->
            <el-divider direction="vertical"/>
            <div>李涛</div>
          </div>

        </el-card>
      </el-col>

      <!--      正文-->
      <el-col :span="14">
        <el-card class="markdown" shadow="hover" :body-style="{'min-height':'400px'}">
          <!--    标题-->
          <h1 style="font-weight: bold;font-size: xx-large;text-align: center">{{ header }}</h1>
          <!--    时间、浏览量、评论数-->
          <div style="color: rgb(128,128,128);text-align: center">2024年03月24日 · {{ views }}浏览 · 100评论</div>
          <el-divider/>
          <MdPreview :editorId="id" :modelValue="content"/>
        </el-card>
      </el-col>

      <!--      文章导航-->
      <el-col :span="4" class="navigation">
        <el-card>
          <template #header>
            <span>文章目录✨</span>
          </template>
          <MdCatalog :editorId="id" :scrollElement="scrollElement"/>
        </el-card>

      </el-col>

    </el-row>

  </div>
</template>

<style scoped>
.mini_profile {
  margin-top: 20px;
  margin-left: 20px;
}

.navigation {
  margin-top: 20px;
  margin-left: 55px;
}

.markdown {
  margin-left: 50px;
  margin-top: 20px;
}
</style>