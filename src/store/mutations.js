import {CHANGE_ACTIVE_MENU, GET_EMPLOYEE_INFORMATION} from '../common/constants/constants'

const mutations = {
  [GET_EMPLOYEE_INFORMATION] (state, data) {
    state.user.name = data.name
    state.user.telephone = data.telephone
    state.user.parkingLots = data.parkingLots
  },
  [CHANGE_ACTIVE_MENU] (state, data) {
    state.activeMenu = data
  }
}

export default mutations
