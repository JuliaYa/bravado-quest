/* eslint import/prefer-default-export: 0 */

import * as commonTypes from './actions/commonTypes'

const initialState = {}

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}