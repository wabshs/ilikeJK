<template>
  <div>
    <!--    开屏大图-->
    <div class="welcome_pic">
      <!--      里面的文字-->
      <div class="words">
        <h1>欢迎来到____官方网站</h1>
        <br/>
        <div style="font-size: 40px;min-height: 50px">
          <span style="color: #fff;font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(0,6)}}
          </span>
            <span style="font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(6,10)}}
          </span>
            <span style="color: #fff;font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(10,18)}}
          </span>
            <span style="color: rgba(255,246,0,0.99);font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(18,19)}}
          </span>
            <span style="color: rgba(0,255,33,0.99);font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(19,32)}}
          </span>
            <span style="color: rgba(255,246,0,0.99);font-family: 'JetBrains Mono',serif">
            {{obj.output.slice(32,33)}}
          </span>
        </div>
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
  display: flex;
  justify-content: center;
  align-items: center;

}

.words{
  text-align: center;
}
</style>
