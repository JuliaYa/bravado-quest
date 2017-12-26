import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './SearchBar.scss'
import magnifier_img from './search.svg'


class SearchBar extends Component {
  
  onFilterChange (event){
    const val = event.target.value;
    if(val.length > 1){
      this.props.setFilter(val);
    }
  };

  render(){
    return (<div className='search-bar'>
      <label className='magnifier'>
        <img src={magnifier_img}/>
        <input type='text' onChange={this.onFilterChange.bind(this)} placeholder='Type something here...' />
      </label>
    </div>);
  }
}

SearchBar.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default SearchBar;