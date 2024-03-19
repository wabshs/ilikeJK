<template>
  <div>
    <!--    左中右布局-->
    <el-row>
      <!--      左  个人名片？-->
      <el-col :span="4">
        <div class="ziliaoka">
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
                alt="avatar"
                style="background-size: cover"
            />
            <div style="padding: 14px">
              <!--          顶部-->
              <div class="top" style="text-align: center">
                <h3 style="font-weight: bold;color: cornflowerblue">用户名</h3>
                <div>一句话介绍自己吧</div>
              </div>
              <!--              底部-->
              <div class="bottom">
                <el-collapse>
                  <el-collapse-item title="我喜欢" name="1">
                    <div>
                      不知道说些什么
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="感兴趣的领域" name="2">
                    <div>
                      <a-tag color="#f50">Java</a-tag>
                      <a-tag color="#2db7f5">GO</a-tag>
                      <a-tag color="#2db7f5">Rust</a-tag>
                      <a-tag color="#2db7f5">Vue</a-tag>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--      中-->
      <el-col :span="15">
        <el-card class="markdown" shadow="hover" :body-style="{'min-height':'400px'}">
          <!--          标题-->
          <div style="text-align: center">
            <h1>关于我</h1>
          </div>
          <!--            markdown部分-->
          <MdPreview :editorId="id" :modelValue="content"/>
        </el-card>
      </el-col>
      <!--      右-->
      <el-col :span="4" class="edit_menu">
        <el-card shadow="hover">
          <template #header>
            <div>
              <span style="color: cadetblue;font-weight: bold">
                快捷导航
              </span>
            </div>
          </template>
          <!--          导航栏-->
          <div >
            <el-row :gutter="10">
              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button @click="router.push({path:'/edit/1231234'})" type="primary" :icon="Edit" circle/>
                  <p>编辑资料</p>
                </div>
              </el-col>

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button type="warning" :icon="Message" circle/>
                  <p>我的私信</p>
                </div>
              </el-col>

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button type="danger" :icon="Close" circle/>
                  <p>退出登录</p>
                </div>
              </el-col>

            </el-row>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import request from "../../apis/request.ts";
import {Close, Edit, Message} from "@element-plus/icons-vue";
import router from "../../router/router.ts";


let content = ref("")
onMounted(() => {
  request.get("/user/aboutMe/1231234")
      .then(res => {
        content.value = res.data.aboutMe
      })
});

const id = 'preview-only';

</script>

<style scoped>

.edit_menu {
  margin-left: 25px;
  margin-top: 20px;
}

.image {
  width: 100%;
  display: block;
}

.bottom {
  margin-top: 10px;
}

.ziliaoka {
  margin-top: 20px;
  margin-left: 20px;
}

.markdown {
  margin-left: 50px;
  margin-top: 20px;
}
</style>
