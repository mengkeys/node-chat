<template>
	<div class="login">
		<div class="" style="text-align:center;padding: 20px 0; font-size: 16px; font-weight: bold;">
			用户登录
		</div>
		<x-input title="账号：" type="tel" placeholder="请输入手机号" v-model="phone"></x-input>
		<x-input title="密码：" type="password" placeholder="请输入密码" v-model="password"></x-input>
		<div style="padding: 15px; font-size: 14px;">
			<flexbox>
				<flexbox-item>
					<div class="" style="text-align:left;">
						<router-link :to="{name:'Register'}">
							新用户注册
						</router-link>
					</div>
				</flexbox-item>
				<flexbox-item>
					<div class="" style="text-align: right;">
						<router-link :to="{name: 'Reset'}">
							忘记密码
						</router-link>
					</div>
				</flexbox-item>
			</flexbox>
		</div>
		<div class="" style="padding: 15px;">
			<x-button type="primary" @click.native="submit">登 录</x-button>
		</div>
	</div>
</template>

<script>
	import validator from 'validator'
	import md5 from 'md5'
	import { Group, XInput, XButton, Flexbox, FlexboxItem } from "vux";
	export default {
		components: {
			Group,
			XButton,
			XInput,
			Flexbox, FlexboxItem},
		name: 'login',
		data: function(){
			return {
				phone: '',
				password: ''
			}
		},
		methods: {
			submit(){
				if(!validator.isMobilePhone(this.phone, 'zh-CN')){
					this.toast('请检查手机号码');
					return false;
				}

				if(!/^[0-9a-zA-Z]{8,12}$/.test(this.password)){
					this.toast('密码为8-12位数字,大小写字母组成');
					return false;
				}

				this.$vux.loading.show({
					text: '提交中...'
				});
				this.$store.dispatch('userLogin',{
					phone: this.phone,
					password: md5(this.password)
				}).then(() =>{
					this.$vux.loading.hide();
					this.$vux.toast.show({
						type: 'success',
						text: '登录成功'
					});
					this.$router.replace({name: 'Home'}); // 登录成功
				}).catch((err) => {
					this.$vux.loading.hide();
					console.error(err);
					this.toast(err.message);
				});
			},


			//				this.$http.post('/user/login', {
//					phone: this.phone,
//					password: md5(this.password)
//				}).then((resp) => {
//					console.log(resp);
//					this.$vux.loading.hide();
//					if(resp.data.code === 0){
//						// 登录成功
//						localStorage.setItem('login', true);
//						localStorage.setItem('token', resp.data.result.token);
//						this.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token');
//						// 设置token到全局数据中...
//						this.$vux.toast.show({
//							type: 'success',
//							text: '登录成功'
//						});
//						this.$router.replace({name: 'Home'}); // 登录成功
//					} else {
//						this.toast(resp.data.result);
//					}
//				}).catch((err) => {
//					this.$vux.loading.hide();
//					console.error(err);
//					this.toast("系统错误");
//				});
			toast(msg){
				this.$vux.toast.show({
					type: 'text',
					text: msg,
					position: 'bottom'
				});
			}
		}
	}
</script>

<style scoped>
	.login{
		background-color: white;
		height: 100vh;
		width: 100vw;
	}
</style>
