<template>
  <div class="text-container">
    <Aside/>
  </div>
</template>

<script>
import Aside from './'
export default {
    components:{
        Aside,
    }
}
</script>

<style>
@import '@/styles/common.less';
.text-container{
    width: 240px;
    margin: 0 auto;
}
</style>