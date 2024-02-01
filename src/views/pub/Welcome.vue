<template>
  <div>
    <!--    开屏大图-->
    <div class="welcome_pic">
      <!--      里面的文字-->
      <div>
        <h1>欢迎来到____官方网站</h1>
        <h1>
          <span style="color: #fff;font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(0,6)}}
          </span>
          <span style="font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(6,10)}}
          </span>
          <span style="color: #fff;font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(10,18)}}
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, onMounted} from "vue";

//easy-js
import EasyTyper from "easy-typer-js";

// 计算属性
const obj = reactive({
  output: '',
  isEnd: false,
  speed: 120,
  singleBack: true,
  sleep: 0,
  type: 'rollback',
  backSpeed: 0,
  sentencePause: false,
  sentencePause: true
})

// 实例化
onMounted(() => {
  const typed = new EasyTyper(obj,'System.out.println("Hello HBUT!")')
})
</script>

<style scoped>
.welcome_pic {
  height: 700px;
  background-image: url("../../assets/background-light-f74c7dae.jpg");
  background-size: cover;
  text-align: center;

}
</style>
