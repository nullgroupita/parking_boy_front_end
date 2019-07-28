
import api from '../api/index'
import {GET_EMPLOYEE_INFORMATION} from '../common/constants/constants'

const actions = {
  async [GET_EMPLOYEE_INFORMATION] (context) {
    let data = await api.getParkingBoyInformation()
    console.log('action' + data)
    console.log(data)
    context.commit(GET_EMPLOYEE_INFORMATION, data)
  }
}
export default actions
