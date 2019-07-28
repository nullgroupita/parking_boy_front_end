<template>
<div>
  <mt-header fixed title="历史"></mt-header>
hahaha
</div>
</template>

<script>
import {CHANGE_ACTIVE_MENU, MENU_HISTORY} from '../common/constants/constants'

export default {
  name: 'History',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$store.commit(CHANGE_ACTIVE_MENU, MENU_HISTORY)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
