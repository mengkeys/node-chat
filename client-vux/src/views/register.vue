<template>
	<div class="login">
		<div class="" style="text-align:center;padding: 20px 0; font-size: 16px; font-weight: bold;">
			新用户注册
		</div>
		<x-input title="账号：" type="tel" placeholder="请输入手机号" v-model="phone"></x-input>
		<x-input title="验证：" class="weui-vcode" placeholder="填写验证码" v-model="verify">
			<x-button slot="right" type="primary" mini @click.native="code">发送验证码</x-button>
		</x-input>
		<x-input title="密码：" type="password" placeholder="请输入密码" v-model="password"></x-input>
		<x-input title="确认：" type="password" placeholder="请再次输入密码" v-model="confirm"></x-input>
		<div style="padding: 15px; font-size: 14px;">
			<flexbox>
				<flexbox-item>
					<div class="" style="text-align:left;">
						<router-link :to="{name:'Login'}">
							返回登录
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
			<x-button type="primary" @click.native="submit">提  交</x-button>
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
				password: '',
				verify: '',
				confirm: ''
			}
		},
		methods: {
			submit(){
				// 手机号码
				if(!validator.isMobilePhone(this.phone, 'zh-CN')){
					this.toast('请检查手机号码');
					return false;
				}

				// 验证码
				if(!/^[0-9]{6}$/.test(this.verify)){
					this.toast('请核对验证码');
					return false;
				}

				// 核对
				if(this.confirm !== this.password){
					this.toast('请核对确认密码');
					return false;
				}

				if(!/^[0-9a-zA-Z]{8,12}$/.test(this.password)){
					this.toast('请检查密码');
					return false;
				}

				// 可以提交
				this.$vux.loading.show({
					text: '处理中...'
				});

				this.$http.post('/user/register', {
					phone: this.phone,
					verify: this.verify,
					password: md5(this.password),
					confirm: md5(this.confirm)
				}).then((resp) => {
					this.$vux.loading.hide();
					if(resp.data.code === 0){
						this.$vux.toast.show({
							type:'success',
							text: '注册成功,请登录!'
						});
						this.$router.replace({name: 'Login'});
					} else {
						this.toast(resp.data.result);
					}
				}).catch((err) => {
					this.$vux.loading.hide();
					console.error(err);
					this.toast('系统错误');
				});
			},
			code(){
				// 获取验证码
				if(!validator.isMobilePhone(this.phone, 'zh-CN')){
					this.toast('请检查手机号');
					return false;
				}
				this.$vux.loading.show({
					text: '处理中...'
				});
				// 手机号验证通过=> 请求验证码
				this.$http.post('/common/verify/code', {
					phone: this.phone,
					type: 0
				}).then((resp) => {
					this.$vux.loading.hide();
					if(resp.data.code === 0){
						this.$vux.toast.show({
							type:'success',
							text: '发送成功'
						});
					} else {
						this.toast('获取失败');
					}
				}).catch((err) => {
					this.$vux.loading.hide();
					console.error(err);
					this.toast("系统错误")
				});
			},
			toast(msg){
				this.$vux.toast.show({
					type:'text',
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
		width:100vw;
		height: 100vh;
	}
</style>
