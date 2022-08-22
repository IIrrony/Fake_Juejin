<template>
  <div class="aside-container">
    <div class="sign-in">
      <div class="first-line">
        <div class="text">晚上好!</div>
        <button><span>去签到</span></button>
      </div>
      <div class="second-line">
        <div class="tag">点亮你在社区的每一天</div>
      </div>
    </div>

    <div class="ad">
      <ul>
        <li>
          <img src="@/assets/ad2.webp" alt="">
        </li>
        <li>
          <img src="@/assets/ad3.webp" alt="">
        </li>
        <li>
          <img src="@/assets/ad1.webp" alt="">
        </li>
      </ul>
    </div>

    <div class="app">
      <div class="appleft">
        <img src="@/assets/download.jpg" alt="">
      </div>
      <div class="appright">
        <div>下载稀土掘金app</div>
        <div>一个帮助开发者成长的社区</div>
      </div>
    </div>

    <div class="rank">
      <ul>
        <div class="author"><span>😜作者榜</span></div>
        <li>
          <div class="left">
            <img src="@/assets/user1.jpg" alt="">
          </div>
          <div class="right">
            <div class="name">Ren</div>
            <div class="title">搬砖工</div>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/user2.png" alt="">
          </div>
          <div class="right">
            <div class="name">Yifan</div>
            <div class="title">公众号@哈哈哈哈</div>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/user3.png" alt="">
          </div>
          <div class="right">
            <div class="name">Nb6666</div>
            <div class="title">你不懂的东西</div>
          </div>
        </li>
        <div class="all">查看完整榜单</div>
      </ul>
    </div>

    <div class="commend">
      <ul>
        <li>
          <div class="left">
            <img src="@/assets/tu1.png" alt="">
          </div>
          <div class="right">
            <span>稀土掘金漫游指南</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/tu2.png" alt="">
          </div>
          <div class="right">
            <span>安装掘金浏览器插件</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/tu3.png" alt="">
          </div>
          <div class="right">
            <span>前往掘金翻译计划</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="copyright">
      <div class="">
        <span>用户协议</span>
        <span>营业执照</span>
        <span>隐私政策</span>
        <span>关于我们</span>
      </div>
      <div class="">
        <span>站点地图</span>
        <span>使用指南</span>
        <span>友情链接</span>
        <span>更多文章</span>
      </div>
      <div class="">京ICP备18012699号-3</div>
      <div class="">police 京公网安备11010802026719号</div>
      <div class="">版权所有：北京北比信息技术有限公司</div>
      <div class="">公司地址：北京市海淀区信息路甲28号13层B座13B-5</div>
      <div class="">公司座机：010-83434395</div>
      <div class="">举报邮箱： feedback@xitu.io</div>
      <div class="">©2022 稀土掘金</div>
      <div>
        <img src="@/assets/wb.png" alt="">
        <img src="@/assets/wx.png" alt="">
      </div>
        
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
*{
  list-style: none;
  ul{
    padding: 0;
  }
}
.aside-container {
  background-color:  #f7f8fa;
  width: 240px;
  position: absolute;
  top: 129px;
  left: 983px;
    
  .sign-in {
    width: 240px;
    
    background-color: #fff;
    height: 70px;
    padding: 16px;
    border-radius: 2px;
    margin-bottom: 16px;
    .first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      .text {
        font-size: 22px;
      }
      button {
        border-radius: 50px;
        height: 32px;
        width: 72px;
        color: #1e80ff;
        border: 1px solid #1e80ff;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        cursor: pointer;
      }
    }
    .second-line {
      margin-bottom: 2px;
      margin-left: 36px;
      color: #4e5969;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
  }

  .ad{
    ul{
      padding: 0;
      li{
        display: block;
        margin-bottom: 10px;
        width: 270px;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .app{
    width: 250px;
    height: 70px;
    background-color: #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    .appleft{
      margin-right: 20px;
      img{
        width: 50px;
        height: 100%;
      }
    }

    .appright{

    }
  }

  .rank{
    background-color: #fff;
    padding-left: 25px;
    width: 245px;
    ul{
      padding: 0;
      .author{
        padding-top: 15px;
        line-height: 20px;
      }
      .all{
        width: 100%;
        text-align: center;
        height: 35px;
        padding-right: 10px;
      }
      li{
        width: 100%;
        display: flex;
        align-items: center;
        line-height: 20px;
        margin: 20px 0;
        transition: all .1s linear;
        img{
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin-right: 15px;
        }
      }

      li:hover{
        background-color: rgb(246, 246, 246);
      }
    }
  }

  .commend{
    width: 220px;
    padding: 3px 20px;
    padding-left: 30px;
    background-color: #fff;
    li{
      display: flex;
      align-items: center;
      margin: 20px 0; 
      transition: all 0.1s linear;
      .left{
        img{
          width: 40px;
          height: auto;
          margin-right: 10px;
        }
      }
    }
    li:hover{
      background-color: rgb(249, 249, 249);
    }
  }

  .copyright{
    margin-top: 15px;
    padding-left: 5px;
    color: #666;
    font-size: 12px;
    div{
      margin: 5px 0;
      cursor: auto;
      span{
        cursor: pointer;
        display: inline-block;
        margin-right: 5px;
      }
      span:hover{
        color: #1e80ff;
      }
      img{
        display: inline-block;
        width: 25px;
        height: auto;
        margin-right: 5px;
      }
    }
  }
}
</style>
