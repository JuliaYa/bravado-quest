import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Card.scss'

class Card extends Component {
  constructor(props){
    super(props)

    this.state = this.props.card
  }
  
  render() {
    return (
      <div className='card'>
        <div className='avatar'>
          <img src={this.state.avatar}/>         
        </div>
        <div className='info'>
          <div className='email'>{this.state.email}</div>
          <div className='name'>{this.state.name}</div>
          <div className='title'>{this.state.title}</div>
          <div className='address'>{this.state.address}</div>
          <hr/>
          <button className='action-button'>mark as siutable</button>
        </div>
      </div>
    )
  }
} 

export default Card;