<template>
  <div class="detail">
    <Nav/>
    <Arside/> <Laside/>
    <div class="content">
      <div class="title" v-html="title"></div>
      <div class="zuozhe">
        <div class="left">
          <img src="../assets/aside/autoboxing.png" alt="" />
          <!-- <img src="./images/autoboxing.png" alt=""> -->
          <span>
            <p class="nicheng">{{lists[idx].name}}</p>
            <p class="time">2022年08月10日 14:16 阅读 {{lists[idx].scanNumber}}</p>
          </span>
        </div>
            <el-button type="primary">关注</el-button>
      </div>
      <div v-html="md" class="data"></div>
    </div>
    
    <!-- <Main/> -->
   
    
    <Comment/>
    <Article/>
    <!-- <button @click="changekey"></button> -->
		
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Arside from "@/components/arside.vue";
import Main from "@/components/main";
import Comment from "@/components/comment";
import Article from "@/components/article";
import Laside from "@/components/Laside";

import getList from "@/api/getList";
import { mapState } from "vuex";

import {marked} from "marked";
import Prism from "prismjs"
import { GetData } from "@/api/index.js";
// import Main from '@/components/main.vue';

export default {
  name: "Detail",
  components: {
    Laside,
    Nav,
    Arside,
    Main,
    Comment,
    Article,
    // Main,
  },
  data() {
    return {
      keyword:"",
      md: "111",
      title: "",
      idx: null
    };
  },
  mounted() {
    // this.changekey();
    this.display()
  },
  created() {},
  updated () {
		
	},
  methods: {
    // async changekey(){
		// 		let res = await GetData();
		// 		console.log(res.data.data.mddata);
		// 		this.keyword = marked(res.data.data.jsss);
		// 		setTimeout(()=>{
		// 			Prism.highlightAll()
		// 		}, 0)
    //     let reg = new RegExp("<pre", "g");
    //     console.log(reg);
    //     console.log(this.keyword);
    //     let str = this.keyword.replace(reg, `<pre class="line-numbers">`);
    //     this.keyword = str;
		// },

    display(){
      let idx = this.$route.params.index;
      this.idx = idx;
      this.$store.dispatch("getidx", idx);
      
      this.title = marked(this.lists[idx].title)
      this.md = marked(this.lists[idx].description) 
      + marked(this.lists[idx].subtitle1)
      + marked(this.lists[idx].subsubtitle1)
      + marked(this.lists[idx].description2)
      + marked(this.lists[idx].code1)
      + marked(this.lists[idx].subsubsubtitle1)
      + marked(this.lists[idx].description3)
      + marked(this.lists[idx].subtitle2)
      + marked(this.lists[idx].code2)
      + marked(this.lists[idx].subsubtitle2)
      + marked(this.lists[idx].description1)
      + marked(this.lists[idx].subsubsubtitle2)
      + marked(this.lists[idx].description4)
      + marked(this.lists[idx].code2)

      setTimeout(()=>{
        Prism.highlightAll()
      }, 0)

      let reg = new RegExp("<pre", "g");
      // console.log(reg);
      // console.log(this.keyword);
      let str = this.md.replace(reg, `<pre class="line-numbers">`);
      this.md = str;
    }
  },
  computed: {
    ...mapState({
      lists: (state) => state.lists
    })
  }
};
</script>

<style lang="less" scoped>
.detail{
  background-color: rgb(244, 245, 245);
  margin-bottom: 20px;
  .content{
    position: relative;
    margin: 0 auto;
    margin-left: 200px;
    width: 820px;
    top: 15px;
    padding: 10px 25px;
    // text-align: center;
    background-color: #fff;
    .zuozhe{
      display: flex;
      align-items: center;
      margin-top: 15px;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        img{
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin-right: 10px;
        }
        span{
          line-height: 10px;
          .time{
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
    .data{
      p{
        text-indent: 2em !important;
        color: #666;
      }
    }
  }

  
}
</style>
