<template>
<div>
  <mt-header fixed title="停车单详情">
    <router-link to="/park-fetch" slot="left">
      <mt-button class="el-icon-arrow-left icon-back"></mt-button>
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
        <el-col :span="15">
          预约时间：{{order.parkingTime}}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15">
          停车场：{{order.parkingLot}}
        </el-col>
      </el-row>
      <el-row>位置：{{order.position}}</el-row>
      <el-row>订单状态:{{order.status===1?'未取车':order.status===2?'已取车':'已停车'}}</el-row>
    </el-col>
  </el-row>
  <div style="margin-top: 15%">
    <mt-button size="large" type="primary" style="margin-top: 20%" v-if="order.status===1">前往取车</mt-button>
    <mt-button size="large" type="primary" style="margin-top: 20%" v-if="order.status===2">已停车</mt-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ParkFetchCar',
  // props: {order: Object},
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      order: {
      }
    }
  },
  methods: {
  },
  mounted () {
    this.order = this.$route.params.order
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
