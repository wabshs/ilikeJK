<template>
  <div>
    <!--    左中右布局-->
    <el-row>
      <!--      左  个人名片？-->
      <el-col :span="4">
        <div class="ziliaoka">
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <img
                src="https://bysj-oss-1.oss-cn-shenzhen.aliyuncs.com/picture/2024-03-28da85c0be6ca2424db4a453e881ef0277冰冷心事.jpg"
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
          <div>
            <el-row :gutter="10">

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button @click="router.push({path:'/createArticle/'+userId})" type="success" :icon="EditPen"
                             circle/>
                  <p class="dao_hang">发布帖子</p>
                </div>
              </el-col>

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button type="warning" :icon="Message" circle/>
                  <p class="dao_hang">我的私信</p>
                </div>
              </el-col>

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button @click="router.push({path:'/edit/'+userId})" type="primary" :icon="Tools" circle/>
                  <p class="dao_hang">我的资料</p>
                </div>
              </el-col>

              <el-col :span="6">
                <div style="text-align: center;width: 65px;font-weight: bold">
                  <el-button type="danger" :icon="Close" circle/>
                  <p class="dao_hang">退出登录</p>
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
import {Close, EditPen, Message, Tools} from "@element-plus/icons-vue";
import router from "../../router/router.ts";



let content = ref("")
onMounted(() => {
  request.get("/user/aboutMe/" + userId.value)
      .then(res => {
        content.value = res.data.aboutMe
      })
});

const id = 'preview-only';
const userId = ref(localStorage.getItem("userId"))

</script>

<style scoped>

.dao_hang {
  color: rgb(128, 128, 128);
}

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
