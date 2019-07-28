import {GET_EMPLOYEE_INFORMATION} from '../common/constants/constants'

const mutations = {
  [GET_EMPLOYEE_INFORMATION] (state, data) {
    state.user.name = data.name
    state.user.telephone = data.telephone
    state.user.parkingLots = data.parkingLots
  }
}

export default mutations
