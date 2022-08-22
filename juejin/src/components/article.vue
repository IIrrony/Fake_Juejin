<template>
  <!-- 相关推荐 -->
  <div class="recommendd">
    <h4>
      相关推荐
    </h4>
    <!-- 第一篇推荐 -->
    <div class="users">
      <a href="javascript:;" class="nicheng" >
        捡田螺的小男孩
      </a>
      <a href="javascript:;">
        2月前
      </a>
      <span>
          <a href="javascript:;">后端 </a>
          <a href="javascript:;">Java </a>
          <a href="javascript:;">程序员 </a>
        </span>
      <p>
        <a href="javascript:;">
          程序员的八荣八耻，爱了
        </a>
      </p>
      <span class="dianzan">
          <a href="javascript:;">
            <i class="fa fa-eye"></i>
              浏览量
          </a>
          <a href="javascript:;">
            <i class="fa fa-thumbs-o-up"></i>
              点赞
          </a>
          <a href="javascript:;">
            <i class="fa fa-commenting-o"></i>
              评论
          </a>
        </span>
    </div>
    <!-- 第二篇推荐 -->
    <div class="users">
      <a href="javascript:;" class="nicheng" >
        捡田螺的小男孩
      </a>
      <a href="javascript:;">
        2月前
      </a>
      <span>
          <a href="javascript:;">后端 </a>
          <a href="javascript:;">Java </a>
          <a href="javascript:;">程序员 </a>
        </span>
      <p>
        <a href="javascript:;">
          程序员的八荣八耻，爱了
        </a>
      </p>
      <span class="dianzan">
          <a href="javascript:;">
            <i class="fa fa-eye"></i>
              浏览量
          </a>
          <a href="javascript:;">
            <i class="fa fa-thumbs-o-up"></i>
              点赞
          </a>
          <a href="javascript:;">
            <i class="fa fa-commenting-o"></i>
              评论
          </a>
        </span>
    </div>
    <!-- 第三篇推荐 -->
    <div class="users">
      <a href="javascript:;" class="nicheng" >
        捡田螺的小男孩
      </a>
      <a href="javascript:;">
        2月前
      </a>
      <span>
          <a href="javascript:;">后端 </a>
          <a href="javascript:;">Java </a>
          <a href="javascript:;">程序员 </a>
        </span>
      <p>
        <a href="javascript:;">
          程序员的八荣八耻，爱了
        </a>
      </p>
      <span class="dianzan">
          <a href="javascript:;">
            <i class="fa fa-eye"></i>
              浏览量
          </a>
          <a href="javascript:;">
            <i class="fa fa-thumbs-o-up"></i>
              点赞
          </a>
          <a href="javascript:;">
            <i class="fa fa-commenting-o"></i>
              评论
          </a>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "article"
}
</script>

<style scoped>
* {
  list-style: none;
  margin: auto;
}
.recommendd{
  display: block;
  width: 810px;
  margin: 30px 0 0 200px ;
  padding: 10px 30px 0 30px ;
  /* padding-bottom: 10px; */
  background-color: #fff;
  position: relative;
  z-index: 0;
}
.recommendd h4{
  border-bottom: 1px solid #e4e6eb;
  line-height: 30px;
  margin: 10px;
  font-size: 18px;
}
.recommendd .users{
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #e5e6eb;
}


.recommendd .users a{
  text-decoration: none;
  color: #8a919f;
  font-size: 14px;
  padding: 5px;
}
.recommendd .users .nicheng{
  color: #000;
  /* padding: 5px; */
  margin-left: 5px;
  padding: 0;
  border-right: 1px solid #8a919f;
}
.recommendd .users span a{
  padding: 5px;
}
.recommendd .users p{
  padding: 15px 0;
}
.recommendd .users p a{
  font-size: 17px;
  color: #000;
  font-weight: 700;
  /* padding: 20px 5px; */
}
.recommendd .users .dianzan a:hover{
  color: #1d7dfa;
}
.recommendd .users:hover{
  background-color: #fafafa;
}
</style>