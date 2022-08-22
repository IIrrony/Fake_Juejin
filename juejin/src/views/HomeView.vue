<template>
  <div class="index">
    <nav_ />
    <div class="header">
      <div class="left">
        <ul>
          <li>综合</li>
          <li>关注</li>
          <li>后端</li>
          <li>前端</li>
          <li>Android</li>
          <li>iOS</li>
          <li>人工智能</li>
          <li>开发工具</li>
          <li>代码人生</li>
          <li>阅读</li>
        </ul>
      </div>
      <div class="right">标签管理</div>
    </div>
    <layout_>
      
      <ul class="list-container">
        <div class="type">
        <ul>
          <li>推荐</li>
          <li>最新</li>
          <li class="last">热榜</li>
        </ul>
      </div>
        <li v-for="(item, index) in lists" :key="item.id" class="entry-list">
          <div class="entry">
            <div class="meta-container">
              <a class="user" href="">{{ item.name }}</a>
              <div class="date">{{ formatDate(item.createDate) }}</div>
            </div>
            <div class="content">
              <router-link
                :to="{ name: 'detail', params: { index } }"
                class="link"
              >
                <div class="content-main">
                  <div class="title">{{ item.title.split(" ")[1] }}</div>
                  <div class="abstract">{{ item.description }}</div>
                  <ul class="action-list">
                    <li class="item eye">
                      <Icon type="eye" /><span>{{ item.scanNumber }}</span>
                    </li>
                    <li class="item like">
                      <Icon type="like" /><span>{{ item.like }}</span>
                    </li>
                    <li class="item message">
                      <Icon type="message" /><span>{{
                        item.commentNumber
                      }}</span>
                    </li>
                  </ul>
                </div>
                <img class="thumb" :src="item.pic" alt="" v-if="item.pic" />
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </layout_>
    <Icon />
    <Aside_ />
    <div class="backtop" v-show="show" @click="goTop"><i class="fa fa-arrow-up"></i></div>
  </div>
</template>

<script>
import nav_ from "@/components/nav.vue";
import layout_ from "@/components/Layout";
import Aside_ from "@/components/Aside";
import getList from "@/api/getList";
import debounce from "@/utils/debouce";
import Icon from "@//components/Icon";
import formatDate from "@/utils/formatDate";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    nav_,
    layout_,
    Aside_,
    Icon,
  },
  data() {
    return {
      // lists: [],
      isLoading: false,
      show: false,
    };
  },
  async created() {
    //获取数据
    // this.lists = this.$store.state.lists
  },
  mounted() {
    // let res = await getList();
    // this.lists = res;
    this.$store.dispatch("putlists");
    window.addEventListener("scroll", this.handleScroll, true);
    // console.log(this.lists);

    document.addEventListener("scroll", () => {
      if (this.isLoading) {
        return;
      }
      const desc =
        document.documentElement.scrollTop +
        document.documentElement.clientHeight -
        document.documentElement.scrollHeight;
      if (desc >= -10) {
        debounce(this.fetchMore());
      }
    });
  },
  methods: {
    async fetchMore() {
      this.isLoading = true;
      const resp = await getList();
      this.$store.dispatch("updatelists", resp.rows);
      // console.log(this.lists);
      this.isLoading = false;
    },
    formatDate,
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 550 ? (this.show = true) : (this.show = false);
    },
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 5);
    },
  },

  computed: {
    ...mapState({
      lists: (state) => state.lists,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
.index {
  background-color: rgb(244, 245, 245) !important;
  .backtop{
    position: fixed;
    bottom: 100px;
    right: 110px;
    color: #666;
    font-size: 20px;    
    width: 50px;
    height: 50px;
    border-radius: 50px;
    text-align: center;    
    line-height: 50px;
    background-color: #fff;
    i::before{
      font-size: 20px;
    }
    i:hover{
      color: rgb(0, 115, 255);
    }
    
  }
  .header{
    width: 100%;
    height: 48px;
    padding: 0 250px;
    background-color: #fff;
    line-height: 48px;
    margin: 0 auto;
    color: #656669;
    .left{
      float: left;
      ul{
        li{
          float: left;
          margin: 0 10px;
          cursor: pointer;
        }
        li:hover{
          color: rgb(20, 105, 241);
        }
      }
    }
    .right{
      float: right;
    }
  }
  .list-container {
    position: relative;
    width: 700px;
    padding: 12px;
    margin-left: 260px;
    margin-top: 13px;
    background-color: #fff;
    .type{
      width: 100%;
      height: 30px;
      margin-left: 10px;
      color: #656669;
      ul{
        li{
          float: left;
          margin: 2px 0;
          padding: 0 15px;
          border-right: 1px solid #ccc;
          cursor: pointer;
        }
        li:hover{
          color: rgba(2, 173, 246, 0.804);
        }
        .last{
          border-right: 0;
        }
      }
    }
    .entry-list {
      .entry {
        cursor: pointer;
        position: relative;
        background: #fff;
        padding: 12px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: all 0.1s linear;
        &:hover {
          background-color: #f3f5f8fd;
        }
        .meta-container {
          display: flex;
          align-items: center;
          .user {
            position: relative;
            display: flex;
            align-items: center;
            margin-right: 8px;
            max-width: 162px;
            font-size: 13px;
            line-height: 22px;
            color: #4e5969;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
          .date {
            position: relative;
            padding: 0 10px;
            line-height: 22px;
            font-size: 13px;
            flex-shrink: 0;
          }
        }
        .content .link {
          display: flex;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e6eb;
          margin-top: 10px;
          width: 100%;
          .content-main {
            flex: 1 1 auto;
            .title {
              display: flex;
              margin-bottom: 8px;
              font-weight: 700;
              font-size: 16px;
            }
            .abstract {
              margin-bottom: 10px;
              color: #86909c;
              font-size: 13px;
              line-height: 22px;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            }
            .action-list {
              display: flex;
              align-items: center;
              .item {
                position: relative;
                margin-right: 20px;
                font-size: 13px;
                line-height: 20px;
                color: #4e5969;
                flex-shrink: 0;
              }
            }
          }
          .thumb {
            flex: 0 0 auto;
            width: 120px;
            height: 80px;
            margin-left: 24px;
            background-color: #fff;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>

