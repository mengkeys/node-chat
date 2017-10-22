<template>
	<div id="app">
		<loading v-model="isLoading"></loading>
		<router-view></router-view>
	</div>
</template>

<script>
	import { Loading } from 'vux'
	import { mapState } from 'vuex'
	export default {
		name: 'app',
		components: {
			Loading
		},
		computed: {
			...mapState({
				isLoading: state => state.vux.isLoading
			})
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	body {
		background-color: #eee;
	}

	.vux-label {
		font-size: 15px !important;
	}

	.clearfix:after{
		content:".";display:block;height:0;clear:both;visibility:hidden
	}
	.clearfix{
		height:1%;
	}
</style>
