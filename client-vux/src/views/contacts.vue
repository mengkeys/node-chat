<template>
	<div class="chat-contacts">
		<view-box>
			<group :gutter="0">
				<cell @click.native="friends">
					<div class="" slot="icon" style="background-color: #FF6600; padding: 10px;">
						<img src="../assets/icons/friend-new.svg" width="20" height="20">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>新的朋友</span>
					</div>
				</cell>
				<cell @click.native="groups()">
					<div class="" slot="icon" style="background-color: #4fd819; padding: 10px;">
						<img src="../assets/icons/friend-group.svg" width="20">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>群聊</span>
					</div>
				</cell>
				<cell @click.native="notice()">
					<div class="" slot="icon" style="background-color: #0ba7e6; padding: 10px;">
						<img src="../assets/icons/friend-tag.svg" width="20">
					</div>
					<div class="" slot="title" style="padding-left: 10px;">
						<span>标签</span>
					</div>
				</cell>
				<!--<cell title="公众号"></cell>-->
			</group>
			<group title="星标朋友">
				<contact-item :option="item" v-for="item in list" :key="item.id"></contact-item>
			</group>
			<group>
				<contact-item :option="item" v-for="item in list" :key="item.id"></contact-item>
			</group>

			<!-- 底下的就是朋友了 -->
			<nav-bar slot="bottom" selected="contacts"></nav-bar>
		</view-box>
	</div>
</template>


<script>
	import {Group, Cell, ViewBox} from 'vux'
	import ContactItem from '@/components/contactitem'
	import NavBar from '@/components/navbar'
	export default {
		name: 'chat-contacts',
		components: {
			ViewBox,
			Cell,
			Group,
			NavBar,
			ContactItem
		},
		data: function(){
			return {
				list: [
					{
						id: 11,
						user: 10,
						nickname: 'mengkeys',
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491350805&di=07b6056111afd1a4f1d62f36a4c64e21&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F38dbb6fd5266d0163f0a373d9c2bd40735fa3597.jpg',
						type: 0
					},
					{
						id: 12,
						user: 1,
						nickname: '二五八万',
						type: 1,
						avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2770691011,100164542&fm=27&gp=0.jpg',
					},
					{
						id: 14,
						user: 2,
						nickname: '朱龙',
						type: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508482769568&di=0acac087f61377695b4cd7866cedee89&imgtype=0&src=http%3A%2F%2Fa1.gexing.com%2FG1%2FM00%2FA8%2F96%2FrBACE1Oa0ozwDaRWAAA4whbfcV0128200.jpg'
					}
				]
			}
		},
		methods: {
			notice(){
				this.$vux.toast.show({
					type: 'text',
					text: '未开放!'
				});
			},
			groups(){
				this.$router.push({name: 'Groups'});
			},
			friends(){
				this.$router.push({name: 'Friends'})
			}
		}
	}
</script>
