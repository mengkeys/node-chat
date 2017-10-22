<template>
	<div class="chat-contact-item">
		<router-link :to="{name: option.type === 0 ? 'User':'Group', query: option}">
			<div class="item clearfix">
				<div class="contact-avatar">
					<img :src="option.avatar" width="100%">
				</div>
				<div class="contact-content">
					<p class="contact-nickname">{{option.nickname}}</p>
					<p v-if="option.type === 0" class="contact-msg">{{option.msg}}</p>
				</div>
				<div class="contact-time" v-if="option.type === 0">
					<p>{{option.time}}</p>
					<br>
					<p v-if="option.notice === 0"><img src="../assets/icons/notice-un.svg" width="18"></p>
				</div>
			</div>

		</router-link>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem } from 'vux'
	export default {
		name:'chat-contact-item',
		components:{  Flexbox, FlexboxItem  },
		props: ['option'],
		data: function(){
			return {

			}
		}
	}
</script>

<style scoped>
	.chat-contact-item{
		border-bottom: 1px solid #eee;
		background-color: white;
		padding: 5px 15px;
		position: relative;
	}
	.chat-contact-item:last-child{
		border-bottom: none;
	}

	.contact-avatar{
		float: left;
	}

	.contact-content{
		float: left;
		padding-left: 10px;
	}

	.contact-avatar img{
		width: 50px;
		height: 50px;
	}

	.contact-nickname{
		font-size: 15px;
		color: #000;
	}

	.contact-msg{
		font-size: 13px;
		color: #666;
	}

	.contact-time{
		position: absolute;
		top: 10px;
		right:10px;
		font-size: 12px;
		color: #8a8a8a;
		text-align: center;
	}

	.item div{
		vertical-align: middle;
	}

</style>
