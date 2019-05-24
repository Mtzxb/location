<template>
  <div class="hello">
        <el-main class="home_content">
            <el-row>
                <el-col :span="16">
                    <div  class="slider_box">
                        <el-carousel height="250px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ `狗哥的介绍${item}` }}</h3>
                        </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="8" style="text-align:center;color:#fff;margin-top:220px">
                    <h1 >狗哥定位器</h1>
                    <p>好用到爆炸的虚拟定位，安全可靠</p>
                    <el-button round style="font-size:20px;font-weight:800" @click="linkto()">立即下载</el-button>
                </el-col>               
            </el-row>
        </el-main>
        <!-- 带图片的卡片布局 -->
        <div style="margin-top:30px">
            <el-row>
                <el-col :span="5" v-for="(o, index) in 6" :key="o" :offset="2" style="margin-bottom:30px">
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡{{index}}</span>
                        <div class="bottom clearfix">
                        <time class="time">2019.5.22</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {

        }
    },
    methods:{
        linkto(){//打开下载链接
            window.open('http://www.baidu.com',"_blank")
        }
    }
}
</script>

<style scoped>
    .hello{
        min-width: 1100px;
        min-height: 500px;
        width: 100%;
    }
    .home_content{
        min-height: 500px;
        background: url(".././assets/img/bg.jpg") no-repeat ;
        background-size:100% 100%;
    }
    .slider_box{
        box-shadow: 8px 13px 35px rgba(44, 71, 85, 0.05);
        width: 500px;
        margin: 194px auto 0px;
        border: 1px solid #eee;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.6);
    }
</style>