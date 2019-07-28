<template>
<div>
  <img slot="icon" width="100px" height="100px" src="../assets/img/logo.svg">
  <form style="margin-top: 20px;">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="input-item"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="input-item"></mt-field>
      <mt-button type="primary" @click="onLogin" style="margin: 10px" fixed>登录</mt-button>
      <mt-button type="default" @click="onReset" style="margin: 10px" fixed>重置</mt-button>
  </form>
</div>
</template>

<script>
import api from '../api'
export default {
  name: 'OrderList',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onLogin () {
      let loginInformation = {
        telephone: this.username,
        password: this.password
      }
      let isLogin = await api.login(loginInformation)
      if (isLogin) {
        this.$router.push('/order-list')
      } else {
        this.$toast('用户名或密码错误')
      }
    },
    onReset: function () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-item {
  text-align: left;
  margin-bottom: 2%;
}
</style>
