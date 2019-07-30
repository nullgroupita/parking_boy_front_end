<template>
<div>
  <mt-header fixed title="历史"></mt-header>
  <el-row v-for="(item, index) in list" :key="index" class="item-content" @click.native="grabOrder(item)">
    <el-col :span="5">
      <img src="../assets/img/car.svg" class="item-icon">
    </el-col>
    <el-col :span="19" class="item-detail">
      <el-row class="item-title">
        {{item.carNumber}}
        {{item.status === 0 ? '(停车)' : '(取车)'}}
      </el-row>
      <el-row>
        <el-col :span="15">
          {{item.parkingTime}}
        </el-col>
        <el-col :span="9" class="item-status-type">
          抢单
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </el-row>
      <el-row>{{item.fetchPosition}}</el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
import api from '../api/index'
import {CHANGE_ACTIVE_MENU, MENU_HISTORY} from '../common/constants/constants'

export default {
  name: 'History',
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getAllOrdersByEmployeeId () {
      let finish = true
      let response = await api.getOrdersByEmployeeId(this.parkingBoyId, finish)
      if (response.retCode === 200) {
        console.log('orderData', response)
        this.list = response.data
      }
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
