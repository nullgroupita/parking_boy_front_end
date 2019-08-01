<template>
<div>
  <img slot="icon" width="100px" height="100px" src="../assets/img/logo.svg">
    <el-col :span="20" class="login-form">
      <el-form ref="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col>
      <el-button type="primary" @click="onLogin" style="margin-right: 5%">登录</el-button>
      <el-button type="reset" @click="onReset">重置</el-button>
    </el-col>
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
    onLogin () {
      let loginInformation = {
        telephone: this.username,
        password: this.password
      }
      this.callLogin(loginInformation)
    },
    async callLogin (loginData) {
      this.$loading({fullscreen: true})
      let result = await api.login(loginData)
      this.$loading({fullscreen: true}).close()
      if (result) {
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
  .login-form {
    margin-top: 30px;
  }
</style>
