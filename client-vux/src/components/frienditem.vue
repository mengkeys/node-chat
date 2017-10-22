<template>
	<div class="chat-friend-item">
		<router-link :to="{name: 'Chat', query: option}">
			<div class="clearfix">
				<div class="record-avatar">
					<img :src="option.avatar" width="100%">
				</div>
				<div class="record-content">
					<p class="record-nickname">{{option.nickname}}</p>
					<p class="record-msg">{{option.remark}}</p>
				</div>
				<div class="record-time">
					<button class="btn" v-if="option.access === 0">接受</button>
					<span v-else>已添加</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, XButton } from 'vux'
	export default {
		name:'chat-friend-item',
		components:{ XButton, Flexbox, FlexboxItem },
		props: ['option'],
		data: function(){
			return {

			}
		}
	}
</script>

<style scoped>
	.btn{
		font-size: 13px;
		padding: 4px 8px;
		border-radius: 2px;
		background-color: #42b716;
		border: none;
		outline: none;
		color: white;
		position: relative;
		top: 50%;
	}
	.chat-record-item{
		border-bottom: 1px solid #eee;
		background-color: white;
		padding: 5px 15px;
		position: relative;
	}
	.chat-record-item:last-child{
		border-bottom: none;
	}

	.record-avatar{
		float: left;
	}

	.record-content{
		float: left;
		width: calc(100% - 115px);
		padding-left: 10px;
	}

	.record-avatar img{
		width: 50px;
		height: 50px;
	}

	.record-nickname{
		font-size: 15px;
		color: #000;
		/*  长度截取 */
		word-break: keep-all; /* 不换行 */
		white-space: nowrap; /* 不换行 */
		overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
		text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
	}

	.record-msg{
		font-size: 13px;
		color: #666;
		/*  长度截取 */
		word-break: keep-all; /* 不换行 */
		white-space: nowrap; /* 不换行 */
		overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
		text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
	}

	.record-time{
		float: left;
		width: 55px;
		font-size: 12px;
		color: #8a8a8a;
		text-align: center;
	}

</style>
