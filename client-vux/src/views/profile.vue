<template>
	<div class="chat-profile">
		<group :gutter="0">
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img class="head-image" slot="icon" width="60" style="" :src="member.avatar">
				</div>
				<div class="" slot="title" style="padding-left: 8px;">
					<p>{{member.nickname}}</p>
					<p style="font-size: 12px; color: #666;">微信号: {{ member.code }}</p>
				</div>
				<div slot="value">
					<img class="head-image" slot="icon" width="40" style="" :src="member.qrcode">
				</div>
			</cell>
		</group>
		<group>
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-wallet.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>钱包</span>
				</div>
			</cell>
		</group>
		<group>
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-favorite.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>收藏</span>
				</div>
			</cell>
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-gallery.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>相册</span>
				</div>
			</cell>
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-ticket.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>卡包</span>
				</div>
			</cell>
			<cell  @click.native="notice()">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-emotion.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>表情</span>
				</div>
			</cell>
		</group>
		<group>
			<cell :link="{name: 'Setting'}">
				<div class="" slot="icon">
					<img src="../assets/icons/profile-setting.svg" width="25">
				</div>
				<div class="" slot="title" style="padding-left: 10px;">
					<span>设置</span>
				</div>
			</cell>
		</group>
		<nav-bar selected="profile"></nav-bar>
	</div>
</template>

<script>
	import { Group, Cell, Flexbox, FlexboxItem } from 'vux'
	import NavBar from '@/components/navbar'
	export default {
		name: 'chat-profile',
		components: {
			NavBar, Group, Cell, Flexbox, FlexboxItem
		},
		data: function(){
			return {
				member: {
					id: 1,
					code: 'zhaomaoxin003',
					nickname: 'mengkeys',
					avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1225775914,2507975769&fm=27&gp=0.jpg',
					qrcode: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482808365&di=47f6b3e0a94bb8586e0ca7dadbbfd689&imgtype=0&src=http%3A%2F%2Fwww.longwin.org%2Fimages%2Fweibo.gif'
				}
			}
		},
		methods: {
			notice(){
				this.$vux.toast.show({
					type: 'text',
					text: '未开放!'
				});
			}
		}
	}
</script>
