<template>
	<div class="nav">
		<div class="container">

			<div class="left">
				<a class="logo" href="./">
					<img src="../assets/nav/blogo.svg" class="blogo" />
					<img src="../assets/nav/slogo.svg" class="slogo hide" />
				</a>

				<div class="navigation">
					<a v-for="(item,index) of navs" :key="index" class="navigation_a"
						:href="item.url">{{item.title}}</a>

					<a href="https://detail.youzan.com/show/goods/newest?kdt_id=104340304" target="_blank">商城</a>
					<a href="https://juejin.cn/app?utm_source=jj_nav" target="_blank">APP</a>
					<a href="https://juejin.cn/extension?utm_source=jj_nav" target="_blank">插件</a>

				</div>
			</div>

			<div class="right">
				<div class="search-add">
					<div class="search" :class="{'search_stretch': searchActive}">
						<el-input :placeholder="searchPlaceholder" v-model="searchText" size="medium" maxlength="32"
							@focus="searchFocus" @blur="searchBlur">
						</el-input>
						<div slot="suffix" class="searchIcon">
							<img v-if="searchActive" class="searchIco" src="../assets/nav/search1.svg" @click="" />
							<img v-else class="searchIco" src="../assets/nav/search.svg" @click="" />
						</div>
					</div>

					<div class="write" :class="{'lerpHide':searchActive}">
						<div class="add-btn">创作者中心</div>
						<div class="more">
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none"
								xmlns="http://www.w3.org/2000/svg" class="unfold12-icon" data-v-61b102b0="">
								<path
									d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
									fill="white" data-v-61b102b0=""></path>
							</svg>
						</div>
					</div>
				</div>

				<div class="vip" @click="to('https://juejin.cn/vip?utm_source=web_nav')">
					<img src="../assets/nav/vip.svg" />
					<span>会员</span>
				</div>

				<div class="login">
					<button class="loginBtn">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nav_',
		components: {

		},
		data() {
			return {
				navIndex: 0,
				navs: [{
					title: '首页',
					url: '.'
				}, {
					title: '沸点',
					url: 'https://juejin.cn/pins'
				}, {
					title: '课程',
					url: 'https://juejin.cn/course'
				}, {
					title: '直播',
					url: 'https://juejin.cn/live'
				}, {
					title: '活动',
					url: 'https://juejin.cn/events/all'
				}],

				searchText: '',
				searchPlaceholder: '探索稀土掘金',

				searchActive: false,
				writeActive: false,
			}
		},
		filters: {

		},
		computed: {
			searchUrl: function() {
				return this.searchActive ? '../assets/nav/search.svg' : '../assets/nav/search1.svg'
			}
		},
		methods: {
			// 输入框焦点
			searchFocus() {
				this.searchActive = true
				this.searchPlaceholder = '搜索文章/小册/标签/用户'

			},
			// 输入框失去焦点
			searchBlur() {
				this.searchActive = false
				this.searchPlaceholder = '探索稀土掘金'
			},


			// 刷新页面
			refresh() {
				window.location.href = '.'
			},
			// 页面跳转1
			go(url) {
				this.$router.push(url)
			},
			// 页面跳转2 外部
			to(url) {
				window.location.href = url
			}
		},
		mounted() {

		},
		created() {

		}

	}
</script>

<style scoped>

</style>

<style scoped>
	.nav {
		height: 60px;
		border-bottom: 1px solid #f1f1f1;
		background-color: #fff;
		
	}

	.container {
		margin: auto;
		max-width: 1440px;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 5px;
	}

	.left {
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.right {
		display: flex;
		justify-content: right;
		align-items: center;
	}


	.logo {
		cursor: pointer;
		margin: 0px 10px;
		height: 22px;
	}

	.blogo {
		width: 107px;
		height: 22px;
	}

	.slogo {
		width: 31px;
	}

	.navigation {
		height: 60px;
		line-height: 60px;
		display: flex;
	}

	.navigation>a {
		text-decoration: none;
		display: block;
		font-size: 14px;
		color: #515767;
		font-size: 14px;
		margin: 0 12px;
		height: 100%;
	}

	.navigation_a {}

	.navigation_a:hover {
		border-bottom: 2px solid #1e80ff;
		color: #252933;
	}

	.search-add {
		width: 510px;
		display: flex;
	}

	.search {
		width: 360px;
		position: relative;
/* 		margin-right: 15px; */
		transition: width .1s;
	}

	.search_stretch {
		width: 510px;
		transition: width .1s;
	}

	.searchIcon {
		width: 46px;
		position: absolute;
		right: 3px;
		top: 3px;
		bottom: 3px;
		border-radius: 3px;

		background-color: #f2f3f5;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.searchIco {
		width: 16px;
		padding: 0 5px;
		opacity: 0.8;
		cursor: pointer;
	}

	.write {
		width: 116px;
		height: 36px;
		line-height: 36px;
		color: #fff;
		font-size: 14px;
		display: flex;
		padding-left: 25px;
		/* transition: width .1s linear 0.05s; */
	}

	.write>.add-btn {
		background-color: #1e80ff;
		padding: 0 12px;
		cursor: pointer;
		border-bottom-left-radius: 3px;
		border-top-left-radius: 3px;
		transition: background-color .1s linear .05s;
	}

	.write>.more {
		background-color: #1e80ff;
		padding: 0 5px;
		box-shadow: -1px 0px 1px rgba(255, 255, 255, 0.3);
		cursor: pointer;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		transition: background-color .1s linear .05s;
	}

	.write>div:hover {
		background-color: #1171ee;
		transition: background-color .1s linear .05s;
	}

	.vip {
		display: flex;
		align-items: center;
		margin: 0 20px;
		cursor: pointer;
	}

	.vip>img {
		width: 24px;
		height: 24px;
		margin-right: 3px;
	}

	.vip>span {
		font-size: 14px;
		color: #86909c;
	}

	.loginBtn {
		border: 1px solid rgba(30, 128, 255, 0.3);
		background-color: rgba(30, 128, 255, 0.05);
		color: #007fff;
		border-radius: 3px;

		font-size: 14px;
		width: 66px;
		height: 36px;
		line-height: 100%;
		cursor: pointer;
	}


	.active {
		color: #1e80ff;
	}

	.hide {
		display: none;
	}

	.lerpHide {
		width: 0px;
		overflow: hidden;
		padding: 0;
		transition: width .1s;
	}
</style>
