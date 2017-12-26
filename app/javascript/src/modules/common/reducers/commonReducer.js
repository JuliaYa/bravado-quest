/* eslint import/prefer-default-export: 0 */

import commonTypes from '../actions/commonTypes'

const initialState = {cards: [], error: null}

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonTypes.LOAD_CARDS:
      return {...state, cards: []};

    case commonTypes.LOAD_CARDS_SUCCESS:
      const new_state = {cards: action.payload, error: null}
      return new_state;

    case commonTypes.LOAD_CARDS_FAILURE:
      return {...state, error: action.payload.error};
    
    default: return state
  }
}