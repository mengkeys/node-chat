<template>
	<div class="chat-discovery">
		<view-box>
			<group :gutter="0">
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-circle.svg" width="22">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>朋友圈</span>
					</div>
				</cell>
			</group>
			<group>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-scan.svg" width="20">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>扫一扫</span>
					</div>
				</cell>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-shake.svg" width="25">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>摇一摇</span>
					</div>
				</cell>
			</group>
			<group>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-look.svg" width="22">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>看一看</span>
					</div>
				</cell>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-search.svg" width="25">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>搜一搜</span>
					</div>
				</cell>
			</group>
			<group>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-near-people.svg" width="20">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>附近的人</span>
					</div>
				</cell>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-box.svg" width="25">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>漂流瓶</span>
					</div>
				</cell>
			</group>
			<group>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-shopping.svg" width="25">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>购物</span>
					</div>
				</cell>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-game.svg" width="25">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>游戏</span>
					</div>
				</cell>
			</group>
			<group>
				<cell @click.native="notice()">
					<div class="" slot="icon">
						<img src="../assets/icons/discovery-micro-program.svg" width="22">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>小程序</span>
					</div>
				</cell>
			</group>
			<nav-bar slot="bottom" selected="discovery"></nav-bar>
		</view-box>

	</div>
</template>

<script>
	import { Group, Cell, ViewBox } from 'vux'
	import NavBar from '@/components/navbar'
	export default {
		name:'chat-discovery',
		components: {
			ViewBox,
			NavBar, Group, Cell },
		data: function(){
			return {

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
