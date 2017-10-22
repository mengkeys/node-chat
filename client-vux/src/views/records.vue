<template>
	<div class="chat-records">
		<!--<panel :list="list"></panel>-->
		<view-box>
			<div class="record-box">
				<record-item v-for="item in list" :key="item.id" :option="item"></record-item>
			</div>

			<nav-bar slot="bottom" selected="records"></nav-bar>
		</view-box>
	</div>
</template>

<script>
	import {ViewBox} from 'vux'
	import RecordItem from '@/components/recorditem'
	import NavBar from '@/components/navbar'

	export default {
		name: 'chat-records',
		components: {
			ViewBox,
			NavBar, RecordItem
		},
		data: function () {
			return {
				list: [
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'12月12日',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
					{
						id: 1,
						user: 1,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508485626534&di=5cecbc392d8e59594c9f87bb477bf437&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3829338173%2C728973309%26fm%3D214%26gp%3D0.jpg',
						nickname: 'mengkeys',
						msg: '没有出去在家了。',
						time: '19:30',
						notice: 1
					},
					{
						id: 2,
						user: 2,
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg',
						nickname: '朱龙',
						msg: '分开打尽量快放假德拉科积分登录时间。',
						time:'昨天',
						notice: 0
					},
				]
			}
		}
	}
</script>

<style scoped>
	/*.record-box{*/
		/*position: absolute;*/
		/*top: 0;*/
		/*left: 0;*/
		/*right: 0;*/
		/*bottom: 55px;*/
		/*overflow-y: scroll;*/
		/*-webkit-overflow-scrolling: touch;*/
	/*}*/
</style>
