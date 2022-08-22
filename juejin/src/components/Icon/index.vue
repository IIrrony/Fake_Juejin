<template>
  <i class="iconfont icon-container" :class="fontClass" ></i>
</template>
 
<script>
const classMap = {
    message:'icon-message',
    ring:'icon-lingdang',
    eye:'icon-eye',
    weibo:'icon-weibo-square-fill',
    like:'icon-dianzan',
    wechat:'icon--wechat',
    arrowRight:'icon-arrow-right',
    arrowUp:'icon-arrow-up',
    arrowDown:'icon-arrow-down',
    triangleUp:'icon-arrow-up-filling',
    triangleDown:'icon-arrow-down-filling',
    juejin:'icon-juejin',
    magnifier:'icon-Magnifier'
};
export default {
   props:{
    type:{
        type:String,
        required:true
    }
   },
   computed:{
    fontClass(){
        return classMap[this.type];
    }
   }
}
</script>

<style>
@import '~@/download/icon/iconfont.css';
.icon-container{
    color: inherit;
    font-size: inherit;
    display: inline-block;
}
</style>