<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			console.log(options)
			uni.setNavigationBarTitle({
				title: options.name
			})
		}
	}
</script>

<style>
</style>
