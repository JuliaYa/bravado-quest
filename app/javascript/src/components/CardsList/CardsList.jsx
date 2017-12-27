import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as JsSearch from 'js-search'

import './CardsList.scss'
import Card from '../Card/Card.jsx'

/* card
{"name":"Ms. Alfonzo Stoltenberg",
"email":"keven@grady.net",
"title":"Direct Implementation Producer",
"city":"Norvalville",
"address":"9138 Stiedemann Ports",
"avatar":"https://robohash.org/possimusdoloresid.png?size=300x300\u0026set=set1"}
*/
class CardsList extends Component {
  constructor(props){
    super(props);
    
    this.state = {search: null, cards_loaded: false, displayed_cards: []};
  }

  initSearch(cards){
    let search = new JsSearch.Search('avatar');
    search.addIndex('name','email','title','city','address');
    search.addDocuments(cards);
    this.setState({search: search});
  }

  filterCards(filter){
    if(!this.state.search) return;
    let filtered_cards = this.state.search.search(filter);
    console.log(filtered_cards);
    const displayed_cards = filtered_cards.slice(0,19);
    this.setState({displayed_cards: displayed_cards});
  }

  displayCards(){
    const cards = this.state.displayed_cards;
    console.log(this.state.displayed_cards);
    if(cards.length == 0){
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className='cards-list'>
        {cards.map(card => (
          <Card
            card={card}
            filter={this.props}
            key={card.name}
          />
        ))}
      </div>)
  }

  componentDidMount(){
    this.props.loadCards();
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    if(!this.state.cards_loaded && newProps.cards.length > 0){
      this.initSearch(newProps.cards);
      const displayed_cards = newProps.cards.slice(0,19);
      this.setState({cards_loaded: true, displayed_cards: displayed_cards});
    }
    this.filterCards(newProps.filter);
  }

  render(){
    const { cards, error } = this.props;

    if(error){
      return (
        <p>Some error happend, sorry.</p>
      )
    }
    
    return this.displayCards(); 
  }

}
CardsList.propTypes = {
  loadCards: PropTypes.func.isRequired
}

export default CardsList;