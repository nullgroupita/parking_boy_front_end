<template>
<div>
  <mt-header fixed title="个人">
  </mt-header>
  <img src="../assets/img/logo.svg">
  <div style="text-align: left; font-size: 1em; margin-top: 10px">
    <mt-cell title="姓名" :value = '$store.state.user.name'></mt-cell>
    <mt-cell title="账号" :value = '$store.state.user.account'></mt-cell>
    <mt-cell title="电话" :value = '$store.state.user.telephone'></mt-cell>
    <mt-cell title="停车场" to="/parking-lots-detail" is-link value="parkingLotsDetail">
      <span style="color: gray">详细信息</span>
    </mt-cell>
  </div>
</div>
</template>

<script>
// import api from '../api'
export default {
  name: 'MyProfile',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('getParkingBoyInformation')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
