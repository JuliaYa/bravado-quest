/* eslint jsx-a11y/href-no-hash: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as commonActions from '../../common/actions/commonActions'
import '../../../resources/assets/scss/main.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <h2>Test!</h2>
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
