<template>
  <div>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="order-list" style="width: 80%;height: 80%;" >
      <img slot="icon" src="../assets/img/order-list.svg">
      抢单
    </mt-tab-item>
    <mt-tab-item id="park-fetch">
      <img slot="icon" src="../assets/img/home.svg">
      停取
    </mt-tab-item>
    <mt-tab-item id="history">
      <img slot="icon" src="../assets/img/history-list.svg">
      历史
    </mt-tab-item>
    <mt-tab-item id="my-profile">
      <img slot="icon" src="../assets/img/my-profile.svg">
      个人
    </mt-tab-item>
  </mt-tabbar></div>
</template>

<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      selected: 'order-list'
    }
  },
  methods: {
  },
  watch: {
    selected: function (newValue) {
      this.$router.push(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
