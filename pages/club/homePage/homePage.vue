<template>
	<view class="homePage">
		<view class="contentBox">
			<club-home v-if="currIndex == 2" :clubId='clubId'></club-home>
			<club-rank v-else-if="currIndex == 1" :clubId='clubId'></club-rank>
			<club-activities v-else-if="currIndex == 0" :clubId='clubId'></club-activities>
			<developing v-else></developing>
		</view>
		<view class="clubTabber">
			<view class="menuItem" 
				v-for="(item,index) in tabList" 
				:key='index' 
				:class="{currStyle: currIndex == index}"
				@click="clickTb(item,index)">
				<view class="iconBox"></view>
				<view class="text">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ClubHome from '../../../components/clubHome/clubHome.vue'
	import ClubRank from '../../../components/clubRank/clubRank.vue'
	import clubActivities from '../../../components/clubActivities/clubActivities.vue'
	import developing from '../../../components/developing/developing.vue'
	export default {
		components: {
			ClubHome,
			ClubRank,
			clubActivities,
			developing
		},
		data() {
			return {
				tabList: [{id:2, title: '活动'},{id:1, title: '排行'},{id:3, title: '首页'},{id:4, title: '比赛'},{id:5, title: '相册'}],
				currIndex: 2,
				clubId: ''
			}
		},
		onLoad(options) {
			this.clubId = options.clubId
		},
		methods: {
			clickTb(item,index) {
				this.currIndex = index
				if(index == 0) {
					
				}
				switch(index) {
					case 0 : 
						uni.setNavigationBarTitle({
						   title: '活动'
						});
						uni.setNavigationBarColor({
							frontColor: '#ffffff',
							backgroundColor: '#1e1e1e',
						})
						break;
					case 1 :
						uni.setNavigationBarTitle({
						   title: '排行'
						});
						uni.setNavigationBarColor({
							frontColor: '#ffffff',
							backgroundColor: '#1e1e1e',
						})
						break;
					case 2 :
						uni.setNavigationBarTitle({
						   title: '俱乐部'
						});
						uni.setNavigationBarColor({
							frontColor: '#000000',
							backgroundColor: '#f5f5f5',
						})
						break;
					case 3 :
						uni.setNavigationBarTitle({
						   title: '比赛'
						});
						uni.setNavigationBarColor({
							frontColor: '#ffffff',
							backgroundColor: '#1e1e1e',
						})
						break;
					case 4 :
						uni.setNavigationBarTitle({
						   title: '相册'
						});
						uni.setNavigationBarColor({
							frontColor: '#ffffff',
							backgroundColor: '#1e1e1e',
						})
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homePage{
		width: 100%;
		height: 100vh;
		background: #f5f5f5;
		display: flex;
		flex-direction: column;
		.contentBox{
			width: 100%;
			background: #f5f5f5;
			height: auto;
			overflow: auto;
			flex: 1;
		}
		.clubTabber{
			width: 100%;
			height: 126rpx;
			background: #ffffff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-sizing: border-box;
			padding: 0 22rpx;
			.menuItem{
				box-sizing: border-box;
				padding: 20rpx 0;
				padding-top: 18rpx;
				padding-bottom: 27rpx;
				height: 126rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.iconBox{
					width: 46rpx;
					height: 43rpx;
				}
				.text{
					font-size: 24rpx;
					line-height: 24rpx;
					color: #131313;
				}
			}
			.currStyle{
				.text{
					color: #f8c206;
				}
			}
			.menuItem:nth-of-type(1) {
				.iconBox{
					background: url('https://lhty-vue.oss-cn-shenzhen.aliyuncs.com/clubIcon2.png') no-repeat center top;
					background-size: 43rpx 43rpx;
				}
			}
			.menuItem:nth-of-type(2) {
				.iconBox{
					background: url('https://lhty-vue.oss-cn-shenzhen.aliyuncs.com/clubIcon1.png') no-repeat center top;
					background-size: 46rpx 38rpx;
				}
			}
			.menuItem:nth-of-type(3) {
				.iconBox{
					background: url('https://lhty-vue.oss-cn-shenzhen.aliyuncs.com/clubIcon3.png') no-repeat center top;
					background-size: 46rpx 41rpx;
				}
			}
			.menuItem:nth-of-type(4) {
				.iconBox{
					background: url('https://lhty-vue.oss-cn-shenzhen.aliyuncs.com/clubIcon4.png') no-repeat center top;
					background-size: 40rpx 40rpx;
				}
			}
			.menuItem:nth-of-type(5) {
				.iconBox{
					background: url('https://lhty-vue.oss-cn-shenzhen.aliyuncs.com/clubIcon5.png') no-repeat center top;
					background-size: 36rpx 36rpx;
				}
			}
		}
	}
</style>