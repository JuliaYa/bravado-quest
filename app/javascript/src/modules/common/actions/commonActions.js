import commonTypes from './commonTypes'

import axios from 'axios'

export function loadCards() {
  const url = '/users.json';
  const request = axios({
    method: 'get',
    url: url,
    withCredentials: true,
    responseType: 'json',
    headers: []
  });
  return {
    type: commonTypes.LOAD_CARDS,
    payload: request
  };
}

export function loadCardsSuccess(resp) {
  return {
    type: commonTypes.LOAD_CARDS_SUCCESS,
    payload: resp.data
  };
}

export function loadCardsFailure(error) {
  return {
    type: commonTypes.LOAD_CARDS_FAILURE,
    payload: error
  }
}