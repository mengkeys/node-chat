<template>
	<div id="app">
		<router-view></router-view>
		<!-- 此处添加 -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'app',
		created(){
			// 账号登录成功,提交login事件
			// 加载数据信息
			// 加载好友列表,群列表,
			console.log(`GLOBAL.DB:`,db);
			this.$socket.emit('login', {
				token: this.$store.state.user.token
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
