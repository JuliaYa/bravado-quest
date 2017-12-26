import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCards, loadCardsSuccess, loadCardsFailure } from '../../modules/common/actions/commonActions';
import CardsList from './CardsList'

const mapStateToProps = (state) => {
  return {
    cards: state.common.cards,
    filter: state.common.filter
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadCards: () => {
      dispatch(loadCards()).then( response => {
        !response.error ? dispatch(loadCardsSuccess(response.payload)) : dispatch(loadCardsFailure(response.payload))
      });
    }
  }
}

const CardsListContainer = connect(mapStateToProps, mapDispatchToProps)(CardsList)

export default CardsListContainer
