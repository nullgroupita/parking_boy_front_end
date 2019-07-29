<template>
<div>
  <mt-header fixed title="订单:选择停车场">
    <router-link to="/order-list" slot="left">
      <mt-button>
        <img src="../assets/img/icon_left.svg" height="20" width="20" slot="icon">返回
      </mt-button>
    </router-link>
  </mt-header>
  <el-row v-for="item in parkingLotList" :key="item.id" class="item-content" @click.native="selectParkingLot(item)">
    <el-col :span="2" class="icon-position"><img src="../assets/img/parking-box-line.svg" width="130%"></el-col>
    <el-col :span="14" style="margin-left: 10px; padding-bottom: 5px;">
      <el-row class="item-title">{{item.name}}</el-row>
      <el-row class="item-address">地点：{{item.postion}}</el-row>
    </el-col>
    <el-col :span="8" class="item-rate">
      {{item.nowAvailable}} / {{item.capacity}}
    </el-col>
  </el-row>
</div>
</template>

<script>
import api from '../api/index'
export default {
  data () {
    return {
      parkingLotList: [],
      orderId: '',
      parkingBoyId: this.$store.state.user.id
    }
  },
  methods: {
    async selectParkingLot (parkingLot) {
      let queryObject = {
        orderId: this.orderId,
        parkingBoyId: this.parkingBoyId,
        parkingLotId: parkingLot.id
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
    },
    async getParkingLotByBoyId (parkingBoyId) {
      let parkingLots = await api.getParkingLotByBoyId(parkingBoyId)
      if (parkingLots) {
        this.parkingLotList = parkingLots.filter(parkingLot => parkingLot.nowAvailable > 0)
      }
      if (this.parkingLotList.length === 0) {
        this.$toast({
          message: '当前没有可用的停车场',
          iconClass: 'el-icon-error',
          duration: 500
        })
        this.$router.push('/order-list')
      }
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
    // this.parkingBoyId = this.$route.params.parkingBoyId
    this.getParkingLotByBoyId(this.parkingBoyId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 20px;
    border-bottom: 1px solid #a3a1a1;
  }

  .item-title {
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-align: left;
  }

  .item-address {
    padding-left: 10px;
    text-align: left;
    font-size: 14px;
    color:  #a3a1a1;
  }

  .item-rate {
    font-size: 16px;
    line-height: 22px;
    color: #a3a1a1;
    text-align: end;
    padding-right: 15px;
    margin-left: -10px;
    padding-top: 5px;
  }
</style>
