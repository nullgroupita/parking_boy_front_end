import axios from 'axios'

axios.defaults.baseURL = 'http://18.179.142.236:9000'

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

const api = {
  getAllOrders,
  getParkingLotByBoyId
}
export default api
