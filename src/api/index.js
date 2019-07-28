import axios from 'axios'

axios.defaults.baseURL = 'http://18.179.142.236:9000'

async function getAllOrders () {
  try {
    let response = await axios.get('/Orders')
    return response.data || []
  } catch (e) {
    console.log(e)
  }
}

const api = {
  getAllOrders
}
export default api
