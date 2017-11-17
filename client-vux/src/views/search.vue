<template>
	<div class="contact-server">
		<search placeholder="搜索用户,群聊" v-model="form.input" :result="list" @on-change="search"></search>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { Search } from 'vux'
	export default {
		name:'contact-search',
		data: function(){
			return {
				form: {
					input: "",
					results: []
				}
			}
		},
		created(){},
		computed: mapState({
			list: state => state.search.results
		}),
		components: { Search },
		methods: {
			search(){
				// 搜索
				console.log(this.form.input);
				if(this.form.input.trim().length > 0){
					console.log('有内容进行搜索');
					this.$store.dispatch('searchUser', {
						keyword: this.form.input
					})
				}
			}
		}
	}
</script>
