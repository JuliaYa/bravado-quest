import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import reactStringReplace from 'react-string-replace'

import './Card.scss'

class Card extends Component {
  constructor(props){
    super(props)

    this.state = this.props.card
  }

  highlight(text){
    if(this.props.filter.length == 0) return text;
    var parts = reactStringReplace(text, this.props.filter, (match, i) => (
      <em key={i}>{match}</em>
    ));
    return <div>{parts}</div>
  }
  
  render() {
    return (
      <div className='card' style={this.props.style} key={this.props.key}>
        <div className='content'>
          <div className='avatar'>
            <img src={this.state.avatar}/>         
          </div>
          <div className='info'>
            <div className='email'>{this.highlight(this.state.email)}</div>
            <div className='name'>{this.highlight(this.state.name)}</div>
            <div className='title'>{this.highlight(this.state.title)}</div>
            <div className='address'>{this.highlight(this.state.address)}</div>
            <hr/>
            <button className='action-button'>mark as siutable</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default Card;