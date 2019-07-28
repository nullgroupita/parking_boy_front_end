<template>
<div>
  <mt-header fixed title="订单"></mt-header>
  <el-row v-for="(item, index) in list" :key="index" class="item-content" @click.native="grabOrder(item.id)">
    <el-col :span="5">
      <img src="../assets/img/car.svg" class="item-icon">
    </el-col>
    <el-col :span="19" class="item-detail">
      <el-row class="item-title">
        {{item.carNumber}}
        {{item.status === 0 ? '(parking)' : '(fetching)'}}
      </el-row>
      <el-row>
        <el-col :span="15">
          {{item.parkingTime}}
        </el-col>
        <el-col :span="9" class="item-status-type">
          Grab the order
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
export default {
  name: 'OrderList',
  data () {
    return {
      loading: false,
      list: [],
      parkingBoyId: '1'
    }
  },
  methods: {
    grabOrder (orderId) {
      this.$router.push({name: 'ParkingLotList', params: {orderId: orderId, parkingBoyId: this.parkingBoyId}})
    },
    async getAllOrders () {
      this.list = await api.getAllOrders()
    }
  },
  mounted () {
    this.getAllOrders()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 15px;
    border-bottom: 1px solid #a3a1a1;
  }

  .item-icon {
    width: 50%;
    margin-top: 20%;
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
