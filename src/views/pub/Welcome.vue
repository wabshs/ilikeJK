<template>
  <div>
    <!--    开屏大图-->
    <div class="welcome_pic">
      <!--      里面的文字-->
      <div class="words">
        <span style="font-size: 50px;font-weight: bold">欢迎来到
          <span class="eHBUT">eHBUT</span>
          官方网站
        </span>
        <br/>
        <br/>
        <span style="font-weight: bold;font-size: 20px">创办一天，专注给予HBUTers最便捷的体验</span>
        <br/>
        <br/>
        <div style="font-size: 40px;min-height: 50px">
          <span style="color: #fff;font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(0, 7) }}
          </span>
          <span style="font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(7, 11) }}
          </span>
          <span style="color: #ee00ff;font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(11, 18) }}
          </span>
          <span style="color: rgba(255,246,0,0.99);font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(18, 19) }}
          </span>
          <span style="color: rgba(0,255,33,0.99);font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(19, 32) }}
          </span>
          <span style="color: rgba(255,246,0,0.99);font-family: 'JetBrains Mono',serif">
            {{ obj.output.slice(32, 33) }}
          </span>
        </div>
        <br/>
        <br/>
        <el-button type="primary" size="large" @click="handleClick">快速开始~ 🚀</el-button>
      </div>
    </div>
    <!--    左下文字-->
    <div class="left_down_card" id="left_down">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            alt="头像"/>
        <div style="padding: 14px">
          <!--          顶部-->
          <div class="top">
            <h3>用户名</h3>
            <div>用一句话介绍自己吧~</div>
          </div>

          <!--          底部-->
          <div class="bottom" style="margin-top: 8px">
            <el-collapse>
              <el-collapse-item title="喜欢的事情💕" name="1">
                <div>
                  篮球、足球、乒乓球
                </div>
              </el-collapse-item>
              <el-collapse-item title="感兴趣的领域🎈" name="2">
                <div>
                  计算机、数码
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-card>
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
  sentencePause: true,
})

//点击快速开始按钮的方法
const scrollToElem = (elementId: string) => {
  const targetEle = document.getElementById(elementId)

  if(targetEle){
    targetEle.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

const handleClick =() =>{
  scrollToElem('left_down')
}


// 实例化
onMounted(() => {
      new EasyTyper(obj, 'System.out.println("Hello HBUT!")');
    }
)
</script>

<style scoped>
.welcome_pic {
  height: 700px;
  background-image: url("../../assets/background-light-f74c7dae.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-animation: moveUpDown 6s ease-in-out infinite;
}

.words {
  text-align: center;
}

@-webkit-keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.eHBUT {
  background: linear-gradient(to right, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0;
  -webkit-animation: fadeIn 2s ease-in-out forwards;
}

.left_down_card {
  width: 250px;
  margin-top: 20px;
  margin-left: 20px;

}

.top {
  text-align: center;
}

.image {
  display: block;
  width: 100%;
}
</style>
