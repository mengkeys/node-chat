<template>
	<div class="chat-profile-setting">
		<x-header>设置</x-header>
		<div class="" style="padding: 15px;">
			<x-button type="warn" @click.native="logout">退出</x-button>
		</div>

	</div>
</template>

<script>
	import { XButton,XHeader } from 'vux'
	export default {
		name: 'chat-profile-setting',
		components: {
			XHeader,
			XButton },
		data: function(){
			return {

			}
		},
		methods: {
			logout(){
				// 询问
				this.$vux.confirm.show({
					title: '系统提示',
					content: '确定退出当前登录?',
					// 组件除show外的属性
					onCancel: () => {},
					onConfirm: () => {
						localStorage.clear(); // 清空(其实应该保留聊天记录)
						this.$router.replace({name: 'Login'});
					}
				})
			}
		}
	}
</script>
