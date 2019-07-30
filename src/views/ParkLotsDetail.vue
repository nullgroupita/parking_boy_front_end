<template>
<div>
  <mt-header fixed title="订单">
    <router-link to="/my-profile" slot="left">
      <mt-button>
        <img src="../assets/img/icon_left.svg" height="20" width="20" slot="icon">返回
      </mt-button>
    </router-link>
  </mt-header>
    <el-row v-for="(item, index) in $store.state.user.parkingLots" :key="index" class="item-content">
      <el-col :span="5">
        <img src="../assets/img/P.svg" class="item-icon">
      </el-col>
      <el-col :span="19" class="item-detail">
        <el-row class="item-title">
          {{item.name}}({{item.capacity}})
        </el-row>
        <el-row>
          <el-col :span="24">
            位置:{{item.position}}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      loading: false,
      list: [
        {
          id: '1',
          parkingLotName: 'parkLot1',
          position: '珠海市香洲区唐家停车场',
          capacity: 30
        },
        {
          id: '2',
          parkingLotName: 'parkLot2',
          position: '珠海市香洲区唐家停车场',
          capacity: 20
        }
      ]
    }
  },
  methods: {
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
    margin-top:15%;
  }

  .item-title {
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }

  .item-status-type {
    color: #a3a1a1;
  }

  .item-detail {
    text-align: left;
    line-height: 22px;
    font-size: 16px;
    list-style-type: none;
    margin-bottom: 5px;
    margin-top: 7px;
  }
</style>
