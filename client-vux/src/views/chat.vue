<template>
	<div class="chat">
		<view-box>
			<x-header slot="header">
				<div style="line-height: 46px;">
					{{nickname}} &nbsp; <img v-if="notice === 0" src="../assets/icons/notice-un-white.svg" width="16">
				</div>
				<div slot="right" v-if="type === 0">
					<router-link :to="{name:'User', query: this.$route.query}">
						<img v-if="type === 0" src="../assets/icons/contact-white-single.svg" width="20">
					</router-link>
				</div>
				<div slot="right" v-if="type === 1">
					<router-link :to="{name: 'Group', params: {user:user}}">
						<img  src="../assets/icons/contact-white-multiple.svg" width="20">
					</router-link>
				</div>
			</x-header>
			<div class="">

			</div>
			<group slot="bottom">
				<x-input placeholder="输入聊天内容" v-model="input"></x-input>
			</group>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Group, XInput } from 'vux'
	export default {
		name: 'chat',
		components: {
			Group,
			XInput,
			ViewBox,
			XHeader },
		data: function(){
			return {
				user: '',
				nickname: '聊天',
				avatar: '',
				type: 0,
				notice: 1,
				input:'',
			}
		},
		created(){
			console.log(this.$route.query);
			this.user = parseInt(this.$route.query.user);
			this.nickname = this.$route.query.nickname;
			this.avatar = this.$route.query.avatar;
			this.type   = parseInt(this.$route.query.type);
			this.notice = parseInt(this.$route.query.notice);
		},
		methods: {

		},
		watch: {
			/* 监听输入事件 */
			'input': function(){
				this.$socket.emit('typing');
			}
		}
	}
</script>
