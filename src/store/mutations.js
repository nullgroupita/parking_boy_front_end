import {CHANGE_ACTIVE_MENU, GET_EMPLOYEE_INFORMATION, CURRENT_ORDER} from '../common/constants/constants'

const mutations = {
  [GET_EMPLOYEE_INFORMATION] (state, data) {
    state.user = data
  },
  [CHANGE_ACTIVE_MENU] (state, data) {
    state.activeMenu = data
  },
  [CURRENT_ORDER] (state, order) {
    state.current_order = order
  }
}

export default mutations
