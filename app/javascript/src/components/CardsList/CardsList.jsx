import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as JsSearch from 'js-search'
import InfiniteScroll from 'react-infinite-scroll-component'

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
    
    this.state = {search: null, cards_loaded: false, filtered_cards: [], displayed_cards: []};
    this.showMore = this.showMore.bind(this);
  }

  initSearch(cards){
    let search = new JsSearch.Search('avatar');
    search.addIndex('name','email','title','city','address');
    search.addDocuments(cards);
    this.setState({search: search});
  }

  getCards(cards){
    return cards.map((card, idx) => (
      <Card
        card={card}
        filter={this.props.filter}
        key={idx}
      />
    ));
  }

  showMore(){
    if(!this.state.cards_loaded) return [];
    const last_item = this.state.displayed_cards.length === 0 ? 0 : this.state.displayed_cards.length - 1;
    let new_cards = this.getCards(this.state.filtered_cards.slice(0, last_item+10));
    let upd = new_cards;
    setTimeout(() => {
      this.setState({displayed_cards: upd});
    }, 500);
  }

  refresh(component){
    return component.state.displayed_cards;
  }

  hasMore(component){
    return false
    return component.state.displayed_cards.length === component.state.filtered_cards.length;
  }

  filterCards(filter){
    if(!this.state.search) return;
    let filtered_cards = this.state.search.search(filter);
    this.setState({filtered_cards: filtered_cards});
  }

  componentDidMount(){
    this.props.loadCards();
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    if(!this.state.cards_loaded && newProps.cards.length > 0){
      this.initSearch(newProps.cards);
      this.setState({cards_loaded: true, filtered_cards: newProps.cards, displayed_cards: this.getCards(this.state.filtered_cards.slice(0, 10))});
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
    return <InfiniteScroll
            next={this.showMore()}
            height='700'
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p></p>}>
            {this.state.displayed_cards}
          </InfiniteScroll>
  }

}
CardsList.propTypes = {
  loadCards: PropTypes.func.isRequired
}

export default CardsList;