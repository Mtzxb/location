<template>
    <div>
        <div class="updateLog_box">
            <h1>更新日志</h1>
            <h4>PC版 2.3.2 2019-04-28</h4>
            <p>
                优化：<br/>
                定位体验优化：<br/>
                - 定位速度提升；<br/>
                - 定位精确度提升；<br/>
                大幅降低内存占用，减少卡顿，运行更流畅。
            </p>
            <h4 class="history_update">
                历史版本
            </h4>
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1" class="history_items">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>

                <el-collapse-item title="反馈 Feedback" name="2" class="history_items">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>

                <el-collapse-item title="效率 Efficiency" name="3" class="history_items">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4" class="history_items">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "1"
      }
    }
  }
</script>

<style scoped>
    .updateLog_box{
        margin-left: 15%
    }
    .history_items:hover{
        background-color: #f00;
    }
</style>