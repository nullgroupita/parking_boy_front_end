import axios from 'axios'
import cookies from 'vue-cookies'

axios.interceptors.request.use(
  config => {
    config.baseURL = 'http://18.179.142.236:9000'
    config.withCredentials = true
    config.timeout = 5000
    let token = cookies.get('token')
    if (token) {
      config.headers = {
        'token': token
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

async function getAllOrders () {
  try {
    let response = await axios.get('/orders')
    return response.data || []
  } catch (e) {
    console.log(e)
  }
}

async function getParkingLotByBoyId (id) {
  try {
    let response = await axios.get(`/employees/${id}/parking-lots`)
    return response.data || []
  } catch (e) {
    console.log(e)
  }
}

async function login (params) {
  try {
    const response = await axios.post('/login', params)
    if (response.data.retCode === 200) {
      // set token
      cookies.set('token', response.data.data)
      return true
    }
    return false
  } catch (e) {
    console.log(e)
  }
}

const api = {
  getAllOrders,
  getParkingLotByBoyId
  login
}
export default api
