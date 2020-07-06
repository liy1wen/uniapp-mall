<template>
	<view>
		<view class="header">
			<!-- 城市 -->
			<view class="address">
				<view class="icon iconfont">&#xe650;</view> {{city}}
			</view>
			<!-- 搜索框 --> 
			<view class="search-box">
				<input type="text" placeholder="请输入关键字" placeholder-style="color:#c0c0c0"/>
				<view class="icon iconfont">&#xe65c;</view>
			</view>
			<!-- 提示信息 -->
			<view class="icon-btn">
				<view class="icon iconfont">&#xe70a;</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: "深圳"
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 100rpx;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		// 条件编译 设置离顶部的高度
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	
		.address {
			padding: 0 20rpx 0 0;
			height: 60rpx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: $uni-font-size-base;

			.icon {
				height: 60rpx;
				margin-right: 5rpx;
				display: flex;
				align-items: center;
				font-size: 42rpx;
				color: #ffc50a;
			}
		}
	
		.search-box {
			flex: 1;
			height: 60rpx;
			background-color: #f5f5f5;
			border-radius: 30rpx;
			position: relative;
			.icon {
				position: absolute;
				top: 0;
				right: 0;
				width: 60rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 34rpx;
				color: #c0c0c0;
			}

			input {
				padding-left: $uni-font-size-base;
				height: 60rpx;
				font-size: $uni-font-size-base;
			}
		}
	
		.icon-btn {
			width: 60rpx;
			height: 60rpx;
			.icon {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42rpx;
			}
		}
	}
	
	.place {
		background-color: #ffffff;
		height: 100rpx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
</style>
