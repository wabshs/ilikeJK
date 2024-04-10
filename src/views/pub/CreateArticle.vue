<script setup lang="ts">
import {reactive, ref} from "vue";
import {MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {ElMessage, UploadInstance, UploadProps} from "element-plus";
import request from "../../apis/request.ts";
import axios from "axios";


const form = reactive({
  header: "",
  coverUrl: "",
  content: "正文编辑器",
  userId: localStorage.getItem("userId")
})
const upload = ref<UploadInstance>()
const loading = ref(false)

//上传前的钩子函数 检测文件格式以及大小
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('图片格式必须为JPG!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('图片大小最大为5MB!')
    return false
  }
  return true
}
//上传后的钩子 回显URL存储到数据库
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response
) => {
  //赋值给url
  loading.value = true
  form.coverUrl = response.data
  //console.log(form.coverUrl)
  request.post("/article/createArticle", form)
      .then(res => {
        if (res.code === 200) {
          ElMessage({
            message: '发布成功!',
            type: 'success'
          })
          loading.value = false
        } else {
          ElMessage.error('出错了，请联系管理员')
        }
      })
}

// 图片上传事件
const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          // 传给后端一个FormData数据，添加键值对，这里添加file
          const form = new FormData();
          form.append('file', file);
          axios
              // 这里是我的后端接口，请求地址和路径可以自己改
              .post('http://localhost:8081/api/file/uploadPic', form, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
              .then((res) => {
                console.log(res)
                rev(res)
              })
              .catch((error) => rej(error));
        });
      })
  );
  callback(res.map((item) => item.data.data));
};

function deleteContent() {
  form.content = ""
}

function createArticle() {
  //首先把图传到服务器
  upload.value!.submit();

}

</script>

<template>
  <div style="padding: 20px">
    <div style="margin-left: 50px;margin-top: 30px">
      <el-form :model="form" style="max-width: 600px">
        <el-form-item label="帖子标题">
          <el-input v-model="form.header" placeholder="请输入标题">

          </el-input>
        </el-form-item>
        <el-form-item label="帖子封面">
          <!--          上传-->
          <el-upload
              ref="upload"
              :limit="1"
              :before-upload="beforeAvatarUpload"
              action="http://localhost:8081/api/file/uploadPic"
              :on-success="handleAvatarSuccess"
              :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">上传封面</el-button>
            </template>
          </el-upload>


        </el-form-item>
      </el-form>
    </div>
    <!--    分割线-->
    <el-divider/>

    <!--    正文编辑器-->
    <MdEditor v-model="form.content" @onUploadImg="onUploadImg"/>
    <!--    操作按钮-->
    <div class="actions">
      <el-button v-loading.fullscreen.lock="loading" type="success" plain @click="createArticle">发布</el-button>
      <el-button type="danger" plain @click="deleteContent">清空</el-button>
    </div>
  </div>

</template>

<style scoped>
.actions {
  margin-top: 10px;
}
</style>