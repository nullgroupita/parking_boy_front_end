<template>
<div>
  <mt-header fixed title="停车地点"></mt-header>
  <el-row v-for="(item, index) in list" :key="index" class="item-content" @click.native="showOrderDetail(item)">
    <el-col :span="5">
      <img src="../assets/img/car.svg" class="item-icon">
    </el-col>
    <el-col :span="19" class="item-detail">
      <el-row class="item-title">
        {{item.carNumber}}
        {{(item.status===1||item.status===2) ? '(停车)' : '(取车)'}}
      </el-row>
      <el-row>
        <el-col :span="15">
          {{getLocalTime(item)}}
        </el-col>
        <el-col :span="9" class="item-status-type">{{(item.status === 1||item.status===4)?'未取车':item.status===2?'正在停车':(item.status===5||item.status.status===3)?'正在还车':'已完成订单'}}</el-col>
      </el-row>
      <el-row>
        <el-col :spa="12">
          {{item.fetchPosition}}
        </el-col>

      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
import api from '../api/index'
import {CHANGE_ACTIVE_MENU, CURRENT_ORDER, MENU_PARK_FETCH} from '../common/constants/constants'
export default {
  name: 'ParkFetchCar',
  data () {
    return {
      list: [],
      parkingBoyId: this.$store.state.user.id
    }
  },
  methods: {
    showOrderDetail: function (item) {
      this.$store.commit(CURRENT_ORDER, item)
      this.$router.push({name: 'OrderDetail', params: {order: item}})
    },
    async getAllUnCompletedOrders () {
      let finish = false
      let response = await api.getOrdersByEmployeeId(this.parkingBoyId, finish)
      if (response.retCode && response.retCode === 200) {
        this.list = response.data
      }
    },
    getLocalTime (item) {
      let time = item.status < 3 ? item.parkingTime : item.fetchingTime
      return new Date(time * 1000).toLocaleDateString() + new Date(time * 1000).toLocaleTimeString()
    }
  },
  mounted () {
    this.$store.commit(CHANGE_ACTIVE_MENU, MENU_PARK_FETCH)
    this.getAllUnCompletedOrders()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 15px;
  }

  .item-icon {
    width: 50%;
    margin-top: 5%;
  }

  .item-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
  }

  .item-status-type {
    color: #a3a1a1;
  }

  .item-detail {
    text-align: left;
    line-height: 22px;
    font-size: 12px;
    list-style-type: none;
    margin-bottom: 5px;
  }

</style>
