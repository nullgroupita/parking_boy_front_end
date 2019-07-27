<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="order-list">
      抢单
    </mt-tab-item>
    <mt-tab-item id="park-fetch">
      停取
    </mt-tab-item>
    <mt-tab-item id="发现">
      历史
    </mt-tab-item>
    <mt-tab-item id="我的">
      个人
    </mt-tab-item>
  </mt-tabbar>
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
    // gotoOrders: function () {
    //   console.log(1233)
    //   this.$router.push('/order-list')
    // }
  },
  watch: {
    selected: function (newValue) {
      console.log('=-==', newValue)
      this.$router.push(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
