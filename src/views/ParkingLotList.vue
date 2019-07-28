<template>
<div>
  <mt-header fixed title="订单:选择停车场">
    <router-link to="/order-list" slot="left">
      <mt-button class="el-icon-arrow-left icon-back"></mt-button>
    </router-link>
  </mt-header>
  <el-row v-for="item in parkingLotList" :key="item.id" class="item-content" @click.native="selectParkingLot(item)">
    <el-col :span="16" class="item-title">{{item.name}}</el-col>
    <el-col :span="8" class="item-rate">
      {{item.nowAvailable}} / {{item.capacity}}
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      parkingLotList: [
        {
          id: '1',
          name: 'ParkingLot-1',
          capacity: 30,
          nowAvailable: 10
        },
        {
          id: '2',
          name: 'ParkingLot-2',
          capacity: 20,
          nowAvailable: 5
        },
        {
          id: '3',
          name: 'ParkingLot-3',
          capacity: 50,
          nowAvailable: 30
        }
      ]
    }
  },
  methods: {
    selectParkingLot (parkingLot) {
      this.$toast({
        message: '抢单成功',
        iconClass: 'el-icon-success',
        duration: 500
      })
      console.log(parkingLot)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-content {
    margin-bottom: 20px;
  }

  .item-title {
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-align: left;
  }

  .item-rate {
    font-size: 16px;
    line-height: 22px;
    color: #a3a1a1;
    text-align: end;
    padding-right: 15px;
  }

  .icon-back {
    font-size: 20px;
  }
</style>
