<template>
	<div class="chat-group-list">
		<x-header>群聊</x-header>
	</div>
</template>

<script>
	import { XHeader } from "vux";
	import { mapState } from 'vuex'

	export default {
		components: {XHeader},
		name: 'chat-group-list',
		computed: {
			...mapState({

			})
		}
	}
</script>
