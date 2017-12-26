import { combineReducers} from 'redux'

import { commonReducer} from './modules/common/reducers/commonReducer'

const rootReducer = combineReducers({
  common: commonReducer
})

export default function root(state, action) {
  return rootReducer(state, action)
}