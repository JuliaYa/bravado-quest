import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './CardsList.scss'
import Card from '../Card/Card.jsx'

class CardsList extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.cards = [
           {"name":"Ms. Alfonzo Stoltenberg",
            "email":"keven@grady.net",
            "title":"Direct Implementation Producer",
            "city":"Norvalville",
            "address":"9138 Stiedemann Ports",
            "avatar":"https://robohash.org/possimusdoloresid.png?size=300x300\u0026set=set1"
          },
          {"name":"Lelia Willms",
          "email":"clementina_ryan@dooley.com",
          "title":"Internal Security Assistant",
          "city":"Melisaton",
          "address":"166 Waters Falls",
          "avatar":"https://robohash.org/perferendissapienteodit.png?size=300x300\u0026set=set1"}
    ]
  }
  render(){
    return (
      <div className='cards-list'>
        {this.state.cards.map(card => (
          <Card
            card={card}
            key={card.name}
          />
        ))}
      </div>)
  }
}
CardsList.propTypes = {
}

export default CardsList;