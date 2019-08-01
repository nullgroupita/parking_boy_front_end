<template>
<div>
  <mt-header fixed title="停车单详情">
    <router-link to="/park-fetch" slot="left">
      <mt-button>
        <img src="../assets/img/icon_left.svg" height="20" width="20" slot="icon">返回
      </mt-button>
    </router-link>
  </mt-header>

  <el-row>
    <el-col :span="5">
      <img src="../assets/img/car.svg" class="item-icon">
    </el-col>
    <el-col :span="19" class="item-detail">
      <el-row class="item-title">
        {{order.carNumber}}
      </el-row>
      <el-row>
        <el-col :span="24">
          预约时间：{{new Date(order.fetchingTime*1000).toLocaleDateString()+ new Date(order.fetchingTime*1000).toLocaleTimeString()}}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15">
          停车场：{{order.parkingLotPosition}}
        </el-col>
      </el-row>
      <el-row>位置：{{order.fetchPosition}}</el-row>
      <el-row>订单状态:{{(order.status===1 || order.status===4)?'未取车':(order.status===2 || order.status=== 5 )?'已取车':'已停车'}}</el-row>
    </el-col>
  </el-row>
  <div style="margin-top: 15%">
    <mt-button size="large" type="primary" style="margin-top: 20%" v-if="order.status===1 || order.status===4" @click="fetchCar">前往取车</mt-button>
    <mt-button size="large" type="primary" style="margin-top: 20%" v-if="order.status===2 || order.status===5" @click="fetchCar">已停车</mt-button>
  </div>
</div>
</template>

<script>
import api from '../api'
import cookies from 'vue-cookies'
export default {
  name: 'ParkFetchCar',
  data () {
    return {
      order: {},
      status: '',
      orderId: ''
    }
  },
  methods: {
    async fetchCar () {
      let queryObject = {
        orderId: this.$store.state.current_order.id
      }
      let response = await api.updateOrder(queryObject)

      if (response.retCode === 200) {
        this.order = response.data
        cookies.set('current_order', this.order)
        if (this.order.status === 3 || this.order.status === 6) {
          this.$router.push('park-fetch')
        }
      }
    }
  },
  mounted () {
    this.order = this.$route.params.order
    this.orderId = this.$route.params.orderId
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 15px;
  }

  .item-icon {
    width: 85%;
    margin-top: 24px;
  }

  .item-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
  }

  .icon-back {
    font-size: 20px;
  }

  .item-status-type {
    color: #a3a1a1;
  }

  .item-detail {
    text-align: left;
    line-height: 16px;
    font-size: 0.7em;
    list-style-type: none;
    margin-bottom: 5px;
    padding-left: 10px;
  }

</style>
