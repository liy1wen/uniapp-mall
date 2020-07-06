<template>
	<view>
		<!-- 状态栏 -->
		<header-status />
		<!-- 顶部栏 -->
		<page-header />
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box" v-if="swiperList.length > 0">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view :class="{'on':currentSwiper >= index}" class="dots" v-for="(swiper,index) in swiperList" :key="index"></view>
				</view>
			</view>
		</view>
		<!-- 分类列表 -->
		<view class="category-list" v-if="categoryList.length > 0">
			<view @tap="handleCategory(item)" class="category" v-for="(item,index) in categoryList" :key="index">
				<view class="img">
					<image :src="item.img"></image>
				</view>
				<view class="text">{{item.name}}</view>
			</view>
		</view>
		
		<!-- 广告图banner -->
		<view v-if="promotion.length > 0" class="banner">
			<image src="/static/img/category/ad.jpg"></image>
		</view>
		
		<!-- 活动区 -->
		<view class="promotion" v-if="promotion.length > 0">
			<view class="text">优惠活动</view>
			<view class="list">
				<view @tap="handlePromotion(item)" class="column" v-for="(item,index) in promotion" :key="index">
					<view class="top">
						<view class="title">{{item.title}}</view>
					</view>
					<view class="left">
						<view class="ad">{{item.ad}}</view>
						<view class="into">点击进入</view>
					</view>
					<view class="right">
						<image :src="item.img"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [], // 轮播图片
				categoryList: [], // 分类
				promotion: [], // 活动
				currentSwiper: 0
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			// 获取初始化数据
			async initData() {
				const {data} = await this.request.home.getMallData();
				this.swiperList = data.swiperList;
				this.categoryList = data.categoryList;
				this.promotion = data.promotion;
				console.log(data)
			},
			//轮播滚动
			swiperChange(event) {
				// console.log(event.detail.current);
				this.currentSwiper = event.detail.current;
			},
			//点击促销
			handlePromotion(item) {
				uni.showToast({
					title: item.title,
					icon: 'none'
				})
			},
			//点击分类列表
			handleCategory(item) {
				console.log(item)
			}
		}

	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		.swiper-box {
			width: 92%;
			height: 30.7vw;
			overflow: hidden;
			border-radius: 15rpx;
			box-shadow: 0rpx 8rpx 25rpx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
			swiper {
				width: 100%;
				height: 30.7vw;
				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}
			.indicator {
				position: absolute;
				bottom: 20rpx;
				left: 20rpx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150rpx;
				height: 5rpx;
				border-radius: 3rpx;
				overflow: hidden;
				display: flex;
				.dots {
					width: 0rpx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;
					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}

	.category-list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30rpx 0;
		border-bottom: solid 2rpx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.category {
			width: 25%;
			margin-top: 50rpx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 11vw;
					height: 11vw;
				}
			}

			.text {
				margin-top: 16rpx;/*  */
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24rpx;
				color: #3c3c3c;
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40rpx 4%;

		image {
			width: 100%;
			height: 36vw;
			border-radius: 4rpx;
			box-shadow: 0rpx 5rpx 25rpx rgba(0, 0, 0, 0.3);
		}
	}

	.promotion {
		width: 92%;
		margin: 10rpx 4% 30rpx 4%;

		.text {
			width: 100%;
			height: 60rpx;
			font-size: 34rpx;
			font-weight: 600;
			margin: 10rpx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15rpx 3%;
				background-color: #ebf9f9;
				border-radius: 10rpx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40rpx;
					display: flex;
					align-items: center;
					margin-bottom: 5rpx;

					.title {
						font-size: 30rpx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5rpx;
						width: 100%;
						font-size: 22rpx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24rpx;
						color: #aaa;
						margin-bottom: 5rpx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
</style>
