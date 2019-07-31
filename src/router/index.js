import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import OrderList from '../views/OrderList'
import ParkFetchCar from '../views/ParkFetchCar'
import History from '../views/History'
import MyProfile from '../views/MyProfile'
import Login from '../views/Login'
import ParkingLotList from '../views/ParkingLotList'
import OrderDetail from '../views/ParkCarDetail'
import ParkingLotsDetail from '../views/ParkLotsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/order-list',
          name: 'Order',
          component: OrderList
        },
        {
          path: '/park-fetch',
          name: 'ParkFetchCar',
          component: ParkFetchCar
        },
        {
          path: '/history',
          name: 'History',
          component: History
        },
        {
          path: '/my-profile',
          name: 'MyProfile',
          component: MyProfile
        }
      ],
      redirect: '/order-list'
    },
    {
      path: '/order-detail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/parking-lots',
      name: 'ParkingLotList',
      component: ParkingLotList
    },
    {
      path: '/parking-lots-detail',
      name: 'ParkingLotDetail',
      component: ParkingLotsDetail
    }
  ]
})
