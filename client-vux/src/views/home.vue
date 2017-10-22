<template>
	<div id="app">
		聊天
		<router-view></router-view>
		<!-- 此处添加 -->
	</div>
</template>

<script>
	export default {
		name: 'app',
		created(){
			// 账号登录成功,提交login事件
			// 加载数据信息
			// 加载好友列表,群列表,
			
			this.$socket.emit('login', {
				token: localStorage.getItem('token')
			});
		},
		sockets:{
			connect: function(){
				this.$vux.toast.show({
					type:'success',
					text: '连接成功'
				});
			},
			disconnect: function(){
				this.$vux.toast.show({
					type: 'text',
					text: '服务断开'
				});
			},
			message: function(data){
				this.$vux.toast.show({
					type: 'text',
					text: '收到新消息'
				});
			}
		},
		methods: {
			clickButton: function(val){
				// $socket is socket.io-client instance
				this.$socket.emit('emit_method', val);
			}
		}
	}
</script>

<style lang="less">

</style>
