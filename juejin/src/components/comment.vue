<template>
  <div class="comment">
    <h4>
      评论
    </h4>
    <span>
        <img src="../assets/aside/autoboxing.png" alt="">
      </span>
    <span>
        <input id="comment" onclick="fun()" type="text" placeholder="输入评论（Enter换行，Ctrl+Enter发送）">

      </span>

    <!-- 热门评论 -->
    <div class="hot">
      <h4>
        热门评论
      </h4>
      <img src="../assets/aside/fire.png" alt="">
      <!-- 一条评论 -->
      <div class="users">
        <p>
          <a href="javascript:;">
            <img src="../assets/aside/autoboxing.png" alt="">
            <span class="nicheng">
                掘金酱
              </span>
          </a>
          <span>
              软件安装工程师 @ 某㏇
            </span>
          <span class="time">1天前</span>
        </p>
        <p class="pinglun">
          好小子，红码就是你写的吧
        </p>
        <span class="dianzan">
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
      <!-- 两条评论 -->
      <div class="users">
        <p>
          <a href="javascript:;">
            <img src="../assets/aside/autoboxing.png" alt="">
            <span class="nicheng">
                掘金酱
              </span>
          </a>
          <span>
              软件安装工程师 @ 某㏇
            </span>
          <span class="time">1天前</span>
        </p>
        <p class="pinglun">
          好小子，红码就是你写的吧
        </p>
        <span class="dianzan">
            <a href="javascript:;">
              <i class="fa fa-thumbs-o-up"></i>
               点赞
            </a>
            <a href="javascript:;">
              <i class="fa fa-commenting-o"></i>
               评论
            </a>
          </span>
        <!-- 回复 -->
        <div class="reply">
          <p>
            <a href="javascript:;">
              <img src="../assets/aside/autoboxing.png" alt="">
              <span class="nicheng">
                  掘金酱
                </span>
            </a>
            <span>
                软件安装工程师 @ 某㏇
              </span>
            <span class="time">1天前</span>
          </p>
          <p class="pinglun">
            好小子，红码就是你写的吧
          </p>
          <span class="dianzan">
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

    </div>
    <!-- 全部评论 -->
    <div class="all hot">
      <h4>
        全部评论 15
      </h4>
      <!-- 一条评论 -->
      <div class="users">
        <p>
          <a href="javascript:;">
            <img src="../assets/aside/autoboxing.png" alt="">
            <span class="nicheng">
                掘金酱
              </span>
          </a>
          <span>
              软件安装工程师 @ 某㏇
            </span>
          <span class="time">1天前</span>
        </p>
        <p class="pinglun">
          好小子，红码就是你写的吧
        </p>
        <span class="dianzan">
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
      <!-- 两条评论 -->
      <div class="users">
        <p>
          <a href="javascript:;">
            <img src="../assets/aside/autoboxing.png" alt="">
            <span class="nicheng">
                掘金酱
              </span>
          </a>
          <span>
              软件安装工程师 @ 某㏇
            </span>
          <span class="time">1天前</span>
        </p>
        <p class="pinglun">
          好小子，红码就是你写的吧
        </p>
        <span class="dianzan">
            <a href="javascript:;">
              <i class="fa fa-thumbs-o-up"></i>
                点赞
            </a>
            <a href="javascript:;">
              <i class="fa fa-commenting-o"></i>
                评论
            </a>
          </span>
        <!-- 回复 -->
        <div class="reply">
          <p>
            <a href="javascript:;">
              <img src="../assets/aside/autoboxing.png" alt="">
              <span class="nicheng">
                  掘金酱
                </span>
            </a>
            <span>
                软件安装工程师 @ 某㏇
              </span>
            <span class="time">1天前</span>
          </p>
          <p class="pinglun">
            好小子，红码就是你写的吧
          </p>
          <span class="dianzan">
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


    </div>
  </div>
</template>

<script>
export default {
  name: "comment"
}
</script>

<style scoped>
* {
  list-style: none;
}
.comment{
  width: 810px;
  margin: 30px 0 0 200px ;
  padding: 10px 30px 0 30px ;
  /* padding-bottom: 10px; */
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.comment h4{
  border-bottom: 1px solid #e4e6eb;
  line-height: 30px;
  margin: 10px;
  font-size: 18px;
}
.comment span{
  margin-top: 20px;
}
.comment span img{
  /* margin-top: 10px; */
  /* padding-top: 10px; */
  width: 40px;
  border-radius: 20px;
}
.comment input{
  margin-left: 10px;
  width: 710px;
  height: 60px;
  border-radius: 6px;
  border: 0;
  background-color: #f7f8fa;
}
.comment .hot{
  margin-top: 10px;
  position: relative;
}
.comment .hot h4{
  display: inline;
  line-height: 30px;
  margin:0 10px;
  padding-bottom: 10px;
  border: 0;
  font-size: 18px;
}
.comment .users{
  margin-top: 20px;
}
.comment .hot .users img{
  float: left;
  margin-right: 10px;
  width: 40px;
  border-radius: 20px;
}
.comment .hot .users .time{
  float: right;
  color: #4f555a;
  font-size: 14px;
}
.comment .users p{
  padding: 15px;
  padding-bottom: 5px;
  color: #4f555a;
  font-size: 14px;
}
.comment .users a{
  /* color: #4f555a; */
  color: #000;
  text-decoration: none;
  padding-right: 10px;
  font-size: 16px;
}
.comment .users .nicheng{
  /* float: left; */

  margin: 2px 5px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
}
.comment .hot .pinglun{

  margin-left: 53px;
  font-size: 15px;
  color: #515767;
}
.comment .hot .dianzan{
  margin-left: 67px;
  margin-top: 20px;
}
.comment .hot .dianzan a{
  padding: 10px;
  padding-left: 0;
  font-size: 15px;
  color: #8a919f;
}
.comment .hot .dianzan a:hover{
  color: #1d7dfa;
}
.comment .reply{
  background-color: #f9fafb;
  margin: 10px 10px 10px 60px;
}
</style>