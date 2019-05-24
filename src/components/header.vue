<template>
    <div class="header">
        <el-row>
            <el-col :span="24">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/down">下载</el-menu-item>
                    <el-menu-item index="/help">帮助</el-menu-item>
                </el-menu>
            </el-col>  
        </el-row>
             
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push(keyPath[0])
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .header .el-menu{
        padding-left: 15%;
    }
    .el-menu-item{
        color: #dfa0a0;
        font-size: 18px;
        margin-right: 60px;
        cursor: pointer;
        font-weight: 900;
    }
</style>