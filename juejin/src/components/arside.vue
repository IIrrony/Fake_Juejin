<template>
  <div class="rightbar">
    <!-- 右侧框最上方作者介绍 -->
    <div class="righttop">
      <div class="zuozhe">
        <a href="#">
          <img src="../assets/aside/autoboxing.png" alt="" />
          <!-- <img src="./images/autoboxing.png" alt=""> -->
          <span>
            <p class="nicheng">掘金酱</p>
            <p class="">❤首席客服君 @掘金</p>
          </span>
        </a>
      </div>
      <div class="dianzan">
        <p>
          <span>
            <i class="fa fa-thumbs-o-up"></i>
            获得点赞
          </span>
          <span> 9,001 </span>
        </p>
        <p>
          <span>
            <i class="fa fa-eye"></i>
            文章被阅读
          </span>
          <span> 1,805,573 </span>
        </p>
      </div>
    </div>
    <div class="download">
      <a href="https://juejin.cn/app">
        <!-- <img src="./images/app.png" alt=""> -->
        <img src="../assets/aside/app.png" alt="" />
        <span>
          <p>下载稀土掘金APP <br /></p>
          <p class="huise">一个帮助开发者成长的社区</p>
        </span>
      </a>
    </div>
    <!-- 右侧广告栏 -->
    <div class="ad">
      <a href="#">
        <img src="../assets/aside/ad.png" alt="" />
        <!-- <img src="./images/ad.png" alt=""> -->
      </a>
    </div>
    <!-- 右侧文章推荐 -->
    <div class="recommend">
      <h4>相关文章</h4>
      <ul>
        <li>
          <a href="#">
            <p>继承与原型链：原型链的尽头是null？</p>
            <p class="huise">点赞·评论</p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>继承与原型链：原型链的尽头是null？</p>
            <p class="huise">点赞·评论</p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>继承与原型链：原型链的尽头是null？</p>
            <p class="huise">点赞·评论</p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>继承与原型链：原型链的尽头是null？</p>
            <p class="huise">点赞·评论</p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>继承与原型链：原型链的尽头是null？</p>
            <p class="huise">点赞·评论</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 右侧跟随目录 -->

    <div id="menu" class="menu" ref="menu">
      <h4>目录</h4>
      <ul>
        <li><a href="javascript:;" ref="title1" class="subtitle">1.{{lists[idx].subtitle1.split(" ")[1]}}</a></li>
        <li><a href="javascript:;" ref="title2" class="subsubtitle">1.1{{lists[idx].subsubtitle1.split(" ")[1]}}</a></li>
        <li><a href="javascript:;" ref="title3" class="subsubsubtitle">1.1.1{{lists[idx].subsubsubtitle1.split(" ")[1]}}</a></li>
        <li><a href="javascript:;" ref="title4" class="subtitle">2.{{lists[idx].subtitle2.split(" ")[1]}}</a></li>
        <li><a href="javascript:;" ref="title5" class="subsubtitle">2.1{{lists[idx].subsubtitle2.split(" ")[1]}}</a></li>
        <li><a href="javascript:;" ref="title6" class="subsubsubtitle">2.1.1{{lists[idx].subsubsubtitle2.split(" ")[1]}}</a></li>
        <li>
          <a href="#content6"
            >小提醒：🎁 记得在本文评论区发参赛文章～ 每周三会抽幸运奖哦</a
          >
        </li>
      </ul>
    </div>
    <!-- 下一篇栏目 -->
    <div class="next">
      <h4>下一篇</h4>
      <button>
        <i class="fa fa-bars"></i>
      </button>
      <p>
        <a href="#">
          喜提JDK的BUG一枚！多线程的情况下请谨慎使用这个类的stream遍历。
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "aside",
  data(){
    return{
      title1: this.$store.state.lists[this.$store.state.idx].subtitle1.split(" ")[1],
      title2: this.$store.state.lists[this.$store.state.idx].subsubtitle1.split(" ")[1],
      title3: this.$store.state.lists[this.$store.state.idx].subsubsubtitle1.split(" ")[1],
      title4: this.$store.state.lists[this.$store.state.idx].subtitle2.split(" ")[1],
      title5: this.$store.state.lists[this.$store.state.idx].subsubtitle2.split(" ")[1],
      title6: this.$store.state.lists[this.$store.state.idx].subsubsubtitle2.split(" ")[1],
    }
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll, true);
    this.handleScroll();
    console.log(this.title1);
    this.$refs.title1.href = "#" + this.title1
    this.$refs.title2.href = "#" + this.title2
    this.$refs.title3.href = "#" + this.title3
    this.$refs.title4.href = "#" + this.title4
    this.$refs.title5.href = "#" + this.title5
    this.$refs.title6.href = "#" + this.title6
  },
  methods: {
    handleScroll(){
      let scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
      let high = this.$refs.menu.offsetTop - scrolltop;
      // console.log(high, scrolltop);
      if(high < 10) {
        this.$refs.menu.style.position = "fixed";
        this.$refs.menu.style.top = "20px";
        this.$refs.menu.style.right = "140px";
      }if(scrolltop < 900) {
        this.$refs.menu.style.position = "relative";
        this.$refs.menu.style.top = "20px";
        this.$refs.menu.style.right = "10px";
      }
    }
  },
  computed: {
    ...mapState({
      lists: (state) => state.lists,
      idx: (state) => state.idx
    })
  }
};

</script>

<style scoped>
* {
  list-style: none;
  margin: auto;
}
.rightbar {
  display: block;
  width: 355px;
  position: absolute;
  top: 55px;
  left: 935px;
  /* background-color: #fff; */
  /* display: inline-block; */
  /* position: relative; */
  /* top: 60px; */
  margin: 30px 10px 100px 100px;
  margin-right: 110px;
}
.rightbar .righttop {
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  /* display: inline-block; */
  position: relative;
  /* top: 60px; */
  margin: 0px 10px 10px 10px;
}
.rightbar .zuozhe {
  border-bottom: 1px solid #eaecef;
  margin: 20px;
}
.rightbar .zuozhe img {
  width: 40px;
  border-radius: 20px;
}
.rightbar .zuozhe span {
  /* position: absolute; */
  float: right;
  padding-right: 50px;
  /* top: 15px;
  left: 70px; */
  margin: 2px 5px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
}
.rightbar .zuozhe .nicheng {
  font-size: 16px;
}
.rightbar .dianzan {
  margin: 25px;
  line-height: 30px;
}
.rightbar .dianzan i {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #7bb9ff;
  background-color: #e1efff;
  border-radius: 12.5px;
  font-size: 17px;
  text-align: center;
  line-height: 25px;
}
.rightbar .download {
  /* margin-top: 10px; */
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  margin: 10px 10px;
}
.rightbar .download img {
  display: inline;
  width: 50px;
  margin: 10px 10px 0px 15px;
}
.rightbar .download a {
  color: #000;
  text-decoration: none;
  font-size: 16px;
  line-height: 25px;
}

.rightbar .download .huise {
  color: #8a9fc7;
  font-size: 14px;
}
.rightbar .download span {
  float: right;
  margin-top: 15px;
  margin-right: 5px;
  padding-right: 30px;
}
.rightbar .ad {
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  margin: 10px 10px;
}
.rightbar .ad img {
  width: 285px;
}
.rightbar .recommend {
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  margin: 10px 10px 0 0;
}
.rightbar .recommend h4 {
  border-bottom: 1px solid #e4e6eb;
  line-height: 30px;
  margin: 10px;
}
.rightbar .recommend a {
  color: #000;
  font-size: 14px;
  text-decoration: none;
  text-align: left;
  line-height: 20px;
  /* margin-right: 10px; */
}
.rightbar .recommend ul {
  padding: 0;
  margin: 15px;
  list-style: none;
}
.rightbar .recommend ul .huise {
  color: #8a919f;
}
.rightbar .recommend li:hover a {
  color: #1e80ff;
}
.rightbar .menu {
  position: relative;
  top: 20px;
  right: 10px;
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  /* z-index: 100; */
  /* margin: 20px 10px 0 0; */
}
.rightbar .menu h4 {
  border-bottom: 1px solid #e4e6eb;
  line-height: 30px;
  margin: 10px;
}
.rightbar .menu ul {
  margin: 14px;
  padding: 0;
  /* padding: 10px; */
}
.rightbar .menu li {
  margin-bottom: 15px;
  /* padding-left: 5px; */
  /* line-height: 15px; */
}
.rightbar .menu li a {
  color: #000;
  padding-left: 5px;
  font-size: 15px;
  text-decoration: none;
  line-height: 15px;
}
.rightbar .menu li:hover {
  background-color: #f7f8fa;
  /* border-left: 2px solid #1e80ff; */
  /* border-radius: ; */
}
.rightbar .menu li:hover a {
  color: #7dbcfc;
}
.rightbar .menu .subtitle{

}
.rightbar .menu .subsubtitle{
  text-indent: 2em;
  padding-left: 30px;
}
.rightbar .menu .subsubsubtitle{
  text-indent: 3em;
  padding-left: 60px;
}
.current {
  border-left: 2px solid #1e80ff;
  border-radius: 1px 0 0 1px;
  color: #7dbcfc;
  background-color: #e1efff;
}
.rightbar .next {
  display: block;
  width: 285px;
  background-color: #fff;
  float: right;
  margin: 10px;
  margin-top: 40px;
}
.rightbar .next h4 {
  display: inline;
  border-bottom: 1px solid #e4e6eb;
  line-height: 30px;
  margin: 15px;
}
.rightbar .next button {
  margin: 10px;
  float: right;
  width: 35px;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  /* color: #000; */
}
.rightbar .next button:hover {
  background-color: rgb(224, 222, 222);
}
.rightbar .next p {
  margin: 10px;
}
.rightbar .next p a {
  font-size: 15px;
  text-decoration: none;
  color: #515767;
}
.class {
  margin-top: 40px;
}
.class span {
  padding-right: 60px;
  color: #515767;
}
.class a {
  text-align: center;
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
.class .blue {
  background-color: #eaf2ff;
  color: #1e80ff;
}
</style>
