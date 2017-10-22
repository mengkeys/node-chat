<template>
	<div class="chat-user-details">
		<x-header>详细资料</x-header>
		<group>
			<cell>
				<div class="" slot="icon">
					<img :src="avatar" width="60">
				</div>
				<div class="" slot="title" style="padding-left:10px;">
					<p style="font-size: 16px; color: #000;">{{nickname}}</p>
					<p style="font-size: 13px; color: #777;">微信号: {{code}}</p>
					<p style="font-size: 13px; color: #777;">昵称: {{nickname}}</p>
				</div>
			</cell>
		</group>

		<group>
			<cell title="设置备注和标签"></cell>
		</group>

		<group>
			<cell title="地区">
				<div slot="value">
					<span style="font-size: 14px; color: #000;">{{ location.join(' ') }}</span>
				</div>
			</cell>
			<cell title="个人相册">
				<div slot="value" style="text-align: left;">
					<img v-for="(item,index) in gallery" :src="item" :key="index" width="60" height="60">
				</div>
			</cell>
			<cell title="更多"></cell>
		</group>

		<div class="user-btn-group">
			<x-button type="primary">发消息</x-button>
			<x-button>视频聊天</x-button>
		</div>
	</div>
</template>


<script>
	import { XHeader, XButton, Group, Cell } from 'vux'
	export default {
		name: 'chat-user-details',
		components: { XHeader, XButton, Group, Cell },
		created(){
			this.user = parseInt(this.$route.query.user);
			this.nickname = this.$route.query.nickname;
			this.avatar = this.$route.query.avatar;
			this.code = this.$route.query.code;
		},
		data: function(){
			return {
				user:'',
				nickname: '',
				code: '',
				avatar: '',
				location: ["云南", "丽江"],
				gallery: [
					"https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=365e574c04b30f242a9aeb01f894d192/4d086e061d950a7b4fdfb2e901d162d9f2d3c931.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491350807&di=a4bdd2b8719d33c1a06e96e229304c13&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffaedab64034f78f0e8a863de72310a55b3191c7f.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491350805&di=07b6056111afd1a4f1d62f36a4c64e21&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F38dbb6fd5266d0163f0a373d9c2bd40735fa3597.jpg"
				]
			}
		}
	}
</script>

<style scoped>
	.user-btn-group{
		padding: 15px;
	}
</style>
