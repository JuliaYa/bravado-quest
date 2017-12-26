import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './CardsList.scss'
import Card from '../Card/Card.jsx'

class CardsList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.loadCards();
  }

  componentWillReceiveProps(newProps){
    console.log(newProps)
  }

  render(){
    const { cards, error } = this.props

    var displayed_cards = [];

    if(error){
      return (
        <p>Some error happend, sorry.</p>
      )
    }

    if(cards.length > 0){
      displayed_cards = cards.slice(0,9)
      return (
        <div className='cards-list'>
          {displayed_cards.map(card => (
            <Card
              card={card}
              key={card.name}
            />
          ))}
        </div>)
    }else{
      return (
        <p>Loading...</p>
      )
    }  
  }

}
CardsList.propTypes = {
  loadCards: PropTypes.func.isRequired
}

export default CardsList;