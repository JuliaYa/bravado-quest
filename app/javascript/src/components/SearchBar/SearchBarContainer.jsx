import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFilter } from '../../modules/common/actions/commonActions'
import SearchBar from './SearchBar'


const mapStateToProps = (state) => {
  return {
    filter: state.common.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {dispatch(setFilter(filter))}
  }
}

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default SearchBarContainer
