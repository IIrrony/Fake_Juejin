<template>
  <div class="sidebar">
    <ul>
      <li>
        <a href="javascript:;" class="dianzan">
          <i class="fa fa-thumbs-o-up"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="fa fa-commenting-o"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="fa fa-star-o"></i>
        </a>
      </li>

      <li id="liShare" @mouseover="show" @mouseleave="leave">
        <a href="javascript:;">
          <i class="fa fa-share"></i>
        </a>
        <div class="share" ref="show">
          <li>
            <a href="javascript:;">
              <i class="fa fa-weixin"></i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="fa fa-weibo"></i>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="fa fa-qq"></i>
            </a>
          </li>
        </div>
      </li>
      
      <li>
        <a href="javascript:;">
          <i class="fa fa-exclamation-triangle"></i>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="fa fa-qrcode"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//import { ref } from '@vue/reactivity';
export default {
  name: "Laside_",
  methods: {
    show(e) {
      this.$refs.show.style.opacity = 100;
      // console.log(this.$refs.show);
    },
    leave(e) {
      this.$refs.show.style.opacity = 0;
      // console.log(222,e);
    },
  },
};
</script>


<style scoped>
* {
  list-style: none;
  margin: auto;
}
li {
  list-style: none;
}
.sidebar {
  top: 120px;
  left: 75px;
  position: fixed;
  z-index: 100;
}
.sidebar a {
  display: inline-block;
  margin: 8px 0;
  width: 60px;
  height: 60px;
  background-color: rgb(248, 245, 245);
  border-radius: 24px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15),
    -6px -6px 12px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  font-size: 30px;
  transition: 0.3s linear;
  position: relative;
  z-index: 1000;
}
.sidebar a:hover {
  transform: scale(1.3);
  border-radius: 50%;
}
.sidebar a i::before {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background-size: 200% 200%;
  background-position: 75% 75%;
  background-color: #8a919f;
  top: 0;
  left: 0;
  line-height: 60px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 0.2s linear;
}
.sidebar a:hover i::before {
  background-position: 0 0;
  background-image: linear-gradient(135deg, #1e80ff 30%, #9fd1f5 50%);
}
/* .fa-thumbs-o-up::before{
    background-image: linear-gradient(135deg,#1e80ff 30%,#0a3d62 50%);
}
.fa-commenting-o::before{
    background-image: linear-gradient(135deg,#1e80ff 30%,#0a3d62 50%);
}
.fa-star-o::before{
    background-image: linear-gradient(135deg,#1e80ff 30%,#0a3d62 50%);
} */
.fa-share-square-o span {
  position: absolute;
  left: calc(100%+24px);
  background-color: #fff;
  font-size: 30px;
  white-space: nowrap;
}
.fa-share-square-o::before {
  background-image: linear-gradient(135deg, #1e80ff 30%, #9fd1f5 50%);
}
/* .fa-exclamation-triangle::before{
    background-image: linear-gradient(135deg,#1e80ff 30%,#0a3d62 50%);
} */
.sidebar .share li:hover a::before {
  opacity: 1;
}
.sidebar .share li:hover a::after {
  opacity: 1;
}
.sidebar .share {
  position: absolute;
  left: 100px;
  top: 185px;
  pointer-events: auto;
  opacity: 0;
  z-index: 100;
  padding: 3px 20px 6px 16px;
  transition: all linear 0.3s;
}
.sidebar .share a {
  display: inline-block;
  margin: 4px 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: rgb(248, 245, 245);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  font-size: 23px;
  z-index: 100 !important;
  transition: 0.3s linear;
}

.sidebar .share li {
  float: left;
  z-index: 100 !important;
}

.sidebar .share li {
  position: relative;
  z-index: 100;
}

.sidebar .share li a {
  position: relative;
  z-index: 100 !important;
}

.sidebar .share a i::before {
  line-height: 60px;
  z-index: 100;
}

.sidebar .share li:hover .fa-weixin::before {
  line-height: 50px;
  background-image: linear-gradient(135deg, #14c941 30%, #89f785 50%);
}
.sidebar .share li:hover .fa-weibo::before {
  line-height: 50px;
  background-image: linear-gradient(135deg, #eb0b0b 30%, #f86b6b 50%);
}
.sidebar .share li:hover .fa-qq::before {
  line-height: 50px;
  background-image: linear-gradient(135deg, #0b59eb 30%, #7db0eb 50%);
}
</style>
