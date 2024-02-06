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
                <h3 style="font-weight: bold;color: cornflowerblue">HBUT杜昱恒</h3>
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
          <MdPreview :editorId="id" :modelValue="text" />
        </el-card>
      </el-col>
      <!--      右-->
      <el-col>

      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';


const id = 'preview-only';
const text = ref('## 关于我\n' +
    '\n' +
    '<meting-js\n' +
    'server="netease"\n' +
    'type="song"\n' +
    'id="1860234945">\n' +
    '</meting-js>\n' +
    '\n' +
    '1. ME：Who AM i？\n' +
    '2. 目标：？？？\n' +
    '3. 爱好：？？？\n' +
    '4. 性格：？？？\n' +
    '\n' +
    '## 我 & 网站\n' +
    '\n' +
    '> 毕设的粗制产物，本想做一个整合所有功能的大杂烩（咸鱼+贴吧+AIGC+交友） 奈何发现自己水平不够 狠狠自卑了\n' +
    '\n' +
    '## 代码块测试\n' +
    '\n' +
    '```Java\n' +
    'System.out.println("I\'m a loser");\n' +
    '```\n' +
    '\n' +
    '```C++\n' +
    'cout << "I\'m a fake ganster" << endl;\n' +
    '```\n' +
    '\n' +
    '```Go\n' +
    'fmt.println("Hello my loser life!")\n' +
    '```\n' +
    '\n' +
    '```JavaScript\n' +
    'console.log(\'爱？唉！\')\n' +
    '```\n' +
    '```Rust\n' +
    'fn main() {\n' +
    '    let a = 12;\n' +
    '    println!("a is {}" , a);\n' +
    '}\n' +
    '```');
</script>

<style scoped>
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
