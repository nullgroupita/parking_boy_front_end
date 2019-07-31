<template>
<div>
  <mt-header fixed title="订单"></mt-header>
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
import {CHANGE_ACTIVE_MENU, CURRENT_ORDER, MENU_ORDER_LIST} from '../common/constants/constants'
export default {
  name: 'OrderList',
  data () {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    async grabOrder (order) {
      this.$store.commit(CURRENT_ORDER, order)
      if (order.status === 0) {
        this.$router.push({name: 'ParkingLotList', params: {orderId: order.id}})
      } else {
        let queryObject = {
          orderId: order.id,
          parkingBoyId: this.parkingBoyId
        }
        let response = await api.updateOrder(queryObject)
        if (response.retCode === 200) {
          this.$toast({
            message: '抢单成功',
            iconClass: 'el-icon-success',
            duration: 500
          })
          this.$router.push({name: 'OrderDetail', params: {order: response.data, orderId: this.orderId}})
        }
      }
    },
    async getAllOrders () {
      this.list = await api.getAllOrders()
    }
  },
  mounted () {
    this.getAllOrders()
    this.$store.commit(CHANGE_ACTIVE_MENU, MENU_ORDER_LIST)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 15px;
    border-bottom: 1px solid #a3a1a1;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
  }

  .item-icon {
    position: relative;
    width: 50%;
    margin-top: 15%;
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
