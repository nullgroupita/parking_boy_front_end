<template>
<div>
  <MenuBar/>
  <router-view></router-view>
</div>
</template>

<script>
import MenuBar from '../components/MenuBar'
// import {CHANGE_ACTIVE_MENU, MENU_MY_PROFILE} from '../common/constants/constants'
export default {
  name: 'OrderList',
  components: {MenuBar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$store.dispatch('getParkingBoyInformation')
    // this.$store.commit(CHANGE_ACTIVE_MENU, MENU_MY_PROFILE)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
