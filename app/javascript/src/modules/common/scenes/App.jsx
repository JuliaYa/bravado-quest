/* eslint jsx-a11y/href-no-hash: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as commonActions from '../../common/actions/commonActions'
import '../../../resources/assets/scss/main.scss'

import SearchBar from '../../../components/SearchBar/SearchBar.jsx'
import CardsListContainer from '../../../components/CardsList/CardsListContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <SearchBar/>
        <CardsListContainer/>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any,
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
