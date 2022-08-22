<template>
  <div class="text-container">
    <Layout>
        <template #left>
            <div class="left">左边栏</div>
        </template>
        <div class="main">中间栏</div>
        <template #right>
            <div class="right">右边栏</div>
        </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped lang="less">
.text-container{
    width: 1000px;
    height: 600px;
    border: 2px solid red;
    .left{
        width: 400px;
        height: 100%;
        background-color: pink;
    }
    .main{
        width: 100%;
        height: 100%;
        background-color: green;
    }
    .right{
        width: 150px;
        height: 100%;
        background-color: lightBlue;
        margin-left: 50px;
    }
}
</style>
