<template>
	<view>
		<view class="header">
			<!-- 头部-默认显示 -->
			<view class="before">
				<view class="back">
					<view v-if="showback" @tap="back" class="icon iconfont">&#xe679;</view>
				</view>
				<view class="middle"></view>
				<view class="icon-btn">
					<view @tap="showCart" class="icon iconfont">&#xe6af;</view>
				</view>
			</view>
		</view>	
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper @change="currentSwiper++" circular="true" autoplay="true">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{currentSwiper + 1}}/{{swiperList.length}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return{
				showback: true,
				swiperList: [],
				currentSwiper: 0
			}
		},
		onLoad(option) {
			// #ifdef MP
			this.showback = false
			// #endif 
			// console.log(JSON.parse((option.goodsInfo)))
			this.initData()
		},
		methods:{
			// 获取商品详情
			async initData() {
				const {data} = await this.request.goods.getGoodsDetails();
				this.swiperList = data.swiperList;
			},
			back(){
				uni.navigateBack()
			},
			showCart(){
				// uni.switchTab({
				// 	url:"../tabBar/cart/cart"
				// })
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;

		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before {
			width: 92%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;

			.back {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42upx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 60upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.icon {
					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 42upx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}

			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}
		}
	}
	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;
	
		swiper {
			width: 100%;
			height: 100vw;
	
			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}
	
		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
</style>
