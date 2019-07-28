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
        {{item.status === 0 ? '(parking)' : '(fetching)'}}
      </el-row>
      <el-row>
        <el-col :span="15">
          {{item.parkingTime}}
        </el-col>
        <el-col :span="9" class="item-status-type">{{(item.status === 1||item.status===4)?'未取车':item.status===2?'正在停车':(item.status===5||item.status.status===3)?'正在还车':'已完成订单'}}</el-col>
      </el-row>
      <el-row>{{item.fetchPosition}}</el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {CHANGE_ACTIVE_MENU, MENU_PARK_FETCH} from '../common/constants/constants'

export default {
  name: 'ParkFetchCar',
  data () {
    return {
      list: [
        {
          id: '1',
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 2,
          parkingLot: 'one lot',
          position: 'jinwan'
        },
        {
          id: '2',
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 0,
          parkingLot: 'one lot',
          position: 'jinwan'
        },
        {
          id: '3',
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 4,
          parkingLot: 'one lot',
          position: 'jinwan'
        }
      ]
    }
  },
  methods: {
    showOrderDetail: function (item) {
      this.$router.push({name: 'OrderDetail', params: {order: item}})
    }
  },
  mounted () {
    this.$store.commit(CHANGE_ACTIVE_MENU, MENU_PARK_FETCH)
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
