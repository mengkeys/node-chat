<template>
	<div class="navbar">
		<tabbar>
			<tabbar-item :selected="selected === 'records'" :link="{name: 'Records'}">
				<img slot="icon" src="../assets/icons/message-default.svg">
				<img slot="icon-active" src="../assets/icons/message-active.svg">
				<span slot="label">消息</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'contacts'" show-dot :link="{name: 'Contacts'}">
				<img slot="icon" src="../assets/icons/contacts-default.svg">
				<img slot="icon-active" src="../assets/icons/contacts-active.svg">
				<span slot="label">通讯录</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'discovery'" :link="{name: 'Discovery'}">
				<img slot="icon" src="../assets/icons/discovery-default.svg">
				<img slot="icon-active" src="../assets/icons/discovery-active.svg">
				<span slot="label">发现</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'profile'" :link="{name: 'Profile'}">
				<img slot="icon" src="../assets/icons/profile-default.svg">
				<img slot="icon-active" src="../assets/icons/profile-active.svg">
				<span slot="label">我</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'nav-bar',
		components: {
			Tabbar, TabbarItem
		},
		props: ['selected']
	}
</script>

<style scoped>
	.navbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
