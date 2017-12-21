import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './SearchBar.scss'
import magnifier_img from './search.svg'


class SearchBar extends Component {
  render(){
    return (<div className='search-bar'>
      <label className='magnifier'>
        <img src={magnifier_img}/>
        <input type='text' placeholder='Type something here...' />
      </label>
    </div>);
  }
}

SearchBar.propTypes = {}

export default SearchBar;