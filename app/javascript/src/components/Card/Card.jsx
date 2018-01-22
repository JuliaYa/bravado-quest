import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import reactStringReplace from 'react-string-replace'

import './Card.scss'

class Card extends Component {
  constructor(props){
    super(props)
  }

  highlight(text){
    const filter = this.props.filter;
    if(!filter || filter.length == 0) return text;
    var parts = reactStringReplace(text, this.props.filter, (match, i) => (
      <em key={i}>{match}</em>
    ));
    return <div>{parts}</div>
  }
  
  render() {
    const card = this.props.card;
    
    return (
      <div className='card' style={this.props.style}>
        <div className='content'>
          <div className='avatar'>
            <img src={card.avatar}/>         
          </div>
          <div className='info-container'>
            <div className='info'>
              <div className='email'>{this.highlight(card.email)}</div>
              <div className='name'>{this.highlight(card.name)}</div>
              <div className='title'>{this.highlight(card.title)}</div>
              <div className='address'>{this.highlight(card.address)}</div>
            </div>
            {/* todo: make button work */}        
            <div className='button-container'>
              <span className='action-button'>mark as siutable</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Card;