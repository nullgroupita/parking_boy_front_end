import {CHANGE_ACTIVE_MENU, GET_EMPLOYEE_INFORMATION} from '../common/constants/constants'

const mutations = {
  [GET_EMPLOYEE_INFORMATION] (state, data) {
    state.user = data
  },
  [CHANGE_ACTIVE_MENU] (state, data) {
    state.activeMenu = data
  }
}

export default mutations
