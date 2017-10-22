<template>
	<div class="chat-friend">
		<x-header>新的朋友</x-header>
		<!--<search></search>-->
		<group>
			<friend-item :option="item" v-for="item in list"></friend-item>
		</group>
	</div>
</template>

<script>
	import FriendItem  from '@/components/frienditem'
	import { XHeader, Search, Group, Cell } from 'vux'
	export default {
		name: 'chat-friends',
		components: { FriendItem,XHeader, Search, Group, Cell },
		data: function(){
			return {
				search: "",
				list: [
					{
						id: 1,
						user: 10,
						nickname: '红色梦想',
						remark: '我是红色梦想',
						access: 0,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491350805&di=07b6056111afd1a4f1d62f36a4c64e21&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F38dbb6fd5266d0163f0a373d9c2bd40735fa3597.jpg',
					},
					{
						id: 1,
						user: 10,
						nickname: '红色梦想',
						remark: '我是红色梦想',
						access: 1,
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491350805&di=07b6056111afd1a4f1d62f36a4c64e21&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F38dbb6fd5266d0163f0a373d9c2bd40735fa3597.jpg',
					}
				]
			}
		}
	}
</script>
