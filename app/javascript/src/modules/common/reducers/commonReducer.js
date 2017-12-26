/* eslint import/prefer-default-export: 0 */

import commonTypes from '../actions/commonTypes'

const initialState = {cards: [], error: null, filter: ''}

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonTypes.LOAD_CARDS:
      return {...state, cards: []};

    case commonTypes.LOAD_CARDS_SUCCESS:
      return {...state, cards: action.payload};

    case commonTypes.LOAD_CARDS_FAILURE:
      return {...state, error: action.payload.error};

    case commonTypes.SET_FILTER:
      return {...state, filter: action.payload};
    
    default: return state
  }
}