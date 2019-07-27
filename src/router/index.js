import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import OrderList from '../views/OrderList'
import ParkFetchCar from '../views/ParkFetchCar'

Vue.use(Router)

export default new Router({
  routes: [
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
        }
      ]
    }
  ]
})
