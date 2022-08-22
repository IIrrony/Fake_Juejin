<template>
  <!-- 中间版心区域 -->
  <div class="main" id="main">
    <h1>
      携手创作，共同成长，8月更文活动奖品大升级！｜ 掘金·日新计划
    </h1>
    <div class="writer">
      <a href="#">
        <!-- <img src="./images/touxiang.image" alt=""> -->
        <img src="../assets/aside/autoboxing.png" alt="">
        <span>掘金酱<br>2022年07月22日 17:06 ·  阅读 38318</span>
        <!-- <button>+ 关注</button> -->
      </a>
      <a href="#" class="focus">+ 关注</a>
    </div>
    <div class="content">
      <p>Hello，掘友们好，「掘金·日新计划」8月更文挑战来了！</p>
      <p>相信大家对于这个活动已经不陌生了，很多掘友在一次次的更文活动中坚持技术写作，得到了成长。在这个热情的8月，「掘金·日新计划」再次起航，让我们一起携手并进，迎接挑战吧！</p>
      <div id="content1" class="content">
        <h2>
          投稿时间
        </h2>
        <p>7 月 27 日 0:00 - 8 月 31 日 23:59</p>
      </div>
      <div id="content2" class="content">
        <h2>🔥 奖项设置</h2>
        <h3>🏃‍♀️ 闯关奖励</h3>
        <h3>🌟 日更·星推官</h3>
        <p>1. 每推荐 1 名新人创作者（从没有在掘金发过文章）参与 8 月月更活动（更新 1 篇活动文章），即可领取 1 次，推荐多人可叠加哦；</p>>
        <p>2. 请日更星推官们将推荐的新人创作者主页链接和文章链接填写到问卷中：wenjuan.feishu.cn/m?t=sah1Lgh…</p>
      </div>
      <div id="content3" class="content">
        <h2>投稿要求</h2>
        <p>💥 首句记得带模板关键词就算投稿成功，否则官方统计不到文章 👇</p>
      </div>
      <div id="content4" class="content">
        <h2>❓活动须知</h2>
        <ul>
          <li>一篇文章只能参加一个活动，当天参与站内其他活动的文章，不计入更文天数。</li>
          <li>不需要连续更文，在活动期间 累计天数 达到就行。比如可以不连续、累计更新7天的文章，就能拿到第一关奖励。</li>
          <li>让大家写“第N天”是为了方便大家创作时自己统计天数，做到心中有数、不用每次都往回翻。所以，大家自己写的“第N天”与后台统计更文天数无关。</li>
          <li>活动统计更文的“天数”，而不是“篇数”，即，1 天发 N 篇，仅计 1 天；天数统计以“文章创建时间”为准，而非“修改时间”，即，1 篇文章修改 N 次，不会重复计算天数。</li>
          <li>允许搬运自己发在个人博客或者其他平台的文章，但是仅支持搬运自己的原创文章，搬运他人的文章当抄袭处理。</li>
          <li>每个阶段奖品不会单独发放，会在活动结束后根据各自发文情况统一发放所获得的奖品。</li>
        </ul>
      </div>
      <div id="content5" class="content">
        <h2>🎁 评论有奖（已开奖）</h2>
        <p>时间：即日起至7月26日</p>
        <p>活动规则：在文章中评论「我要参加8月更文挑战，我要拿xxx奖品」，抽取3位掘友获得 2022年抖音中秋礼盒*1，27号开奖在本文章和活动群开奖哈～</p>
      </div>
      <div id="content6" class="content">
        <h2>小提醒：🎁 记得在本文评论区发参赛文章～ 每周三会抽幸运奖哦</h2>
      </div>
      <!-- 跳转目录 -->


    </div>
    <!-- 分类 -->
    <div class="class">
        <span>
          分类：
          <a href="#">
            前端
          </a>
        </span>
      <span>
          标签：
          <a href="#" class="blue">
            Flutter
          </a>
          <a href="#" class="blue">
            iOS
          </a>
          <a href="#" class="blue">
            Android
          </a>
        </span>
    </div>
    <!-- 专栏 -->
    <div class="column">
      <p>文章被收录于专栏：</p>
      <a href="#" class="special">
        <img src="../assets/aside/flutter.png" alt="">

        <a href="#" class="focus">+ 关注专栏</a>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: "_main"
}
</script>

<style scoped>

/* 中间版心区域 */
.main{
  display: block;
  width: 820px;
  margin: 30px 200px 30px 200px ;
  padding: 10px 30px 0 30px ;
  /* padding-bottom: 10px; */
  background-color: #fff;
  position: relative;

}
.main h1{

  font-size: 30px;
}
.main .writer{
  margin: 30px;
}
.writer img{
  width: 65px;
  border-radius: 32.5px;
  position: absolute;
  top: 125px;
  left: 40px;
}
.writer span{
  position: absolute;
  top: 130px;
  left: 120px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  line-height: 28px;
}
.writer .focus{
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 135px;
  width: 90px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  background: #f4f9ff;
  color: #62b3ff;
  font-size: 17px;
  border: 1px solid #62b3ff ;
  border-radius: 10px;
}
.writer .focus:hover{
  background-color: #e8f2ff;
}
.main .writer{
  margin-bottom: 120px;
}
.main .content{
  /* margin-top: 100px; */
  /* padding: 0 48px; */
  line-height: 1.7;
}
.main .content p{
  margin: 10px 0;
}
.main .content h2{
  padding-top: 25px;
  border-bottom: 1px solid #eaecef;
}
.main .content h3{
  padding-top: 20px;
}

.class{
  margin-top: 40px;
}
.class span{
  padding-right: 60px;
  color: #515767;
}
.class a{
  text-align: left;
  display: inline-block;
  color: #515767;
  text-decoration: none;
  width: 70px;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  background-color: #f2f3f5;
  margin-right: 15px;
}
.class .blue{
  background-color: #eaf2ff;
  color: #1e80ff;
}
.column{
  position: relative;
  background-color: #f7f8fa;
  margin: 60px 0 40px 0;
  margin-bottom: 20px;
  padding: 25px;
  border-radius: 5px;
  color: #515767;
}
.column p{
  margin-bottom: 15px;
}
.column .bold{
  color: #000;
  font-weight: 500;
}
.column .special span{
  position: absolute;
  left: 160px;
  top: 50px;
  margin: 10px;
  color: #515767;
  text-decoration: none;
}
.column a img{
  width: 125px;
  /* height: 85px; */
}
.column .focus{
  float: right;
  width: 120px;
  height: 50px;
  border-radius: 6px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  background-color: #1d7dfa;
  color: #fff;
  text-decoration: none;
}
.column .focus:hover{
  background-color: #539eff;
}


</style>