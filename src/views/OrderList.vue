<template>
<div>
  <mt-header fixed title="订单"></mt-header>
    <el-row v-for="(item, index) in list" :key="index" class="item-content" @click.native="grabOrder(item)">
      <el-col :span="5">
        <img src="../assets/car.svg" class="item-icon">
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
          <el-col :span="9" class="item-status-type">Grab the order</el-col>
        </el-row>
        <el-row>{{item.fetchPosition}}</el-row>
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
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 0
        },
        {
          id: '2',
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 0
        },
        {
          id: '3',
          carNumber: 'C6936',
          parkingTime: '2019-08-01 10:10',
          fetchPosition: 'Baiyun airport',
          status: 1
        }
      ]
    }
  },
  methods: {
    grabOrder (order) {
      this.$alert(order.id + '=>' + order.carNumber)
    }
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
    font-size: 20px;
    line-height: 25px;
  }

  .item-status-type {
    color: #a3a1a1;
  }

  .item-detail {
    text-align: left;
    line-height: 22px;
    font-size: 18px;
    list-style-type: none;
     margin-bottom: 5px;
  }
</style>
