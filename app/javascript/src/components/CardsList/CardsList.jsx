import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as JsSearch from 'js-search'
import { List, AutoSizer } from 'react-virtualized'
import reactStringReplace from 'react-string-replace'

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
    
    this.state = {
      //data
      search: null,
      cards_loaded: false,
      filtered_cards: [],
      cards: [],
      //virtual list
      listHeight: 500,
      listRowHeight: 145,
      overscanRowCount: 5,
      scrollToIndex: undefined
    };

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  initSearch(cards){
    let search = new JsSearch.Search('avatar');
    search.addIndex('name','email','title','city','address');
    search.addDocuments(cards);
    this.setState({search: search});
  }

  rowRenderer({index, isScrolling, key, style}){
    const card = this.state.filtered_cards[index];
    return(
      <Card key={key} style={style} card={card} filter={this.props.filter}/>
    );
  }

  filterCards(filter){
    if(!this.state.search) return;
    let filtered_cards;
    if(filter === "") {
      filtered_cards = this.props.cards;
    }else{
      filtered_cards = this.state.search.search(filter);
    }
    this.setState({filtered_cards: filtered_cards, scrollToIndex: 0});
  }

  componentDidMount(){
    this.props.loadCards();
  }

  componentWillReceiveProps(newProps){
    if(!this.state.cards_loaded && newProps.cards.length == 0) return;
    if(!this.state.cards_loaded && newProps.cards.length > 0){
      this.initSearch(newProps.cards);
      this.setState({cards_loaded: true, cards: newProps.cards, filtered_cards: newProps.cards});
    }else{
      this.filterCards(newProps.filter);
    }
  }

  render(){
    const { error} = this.props;
    if(error){
      return (
        <p>Some error happend, sorry.</p>
      )
    }

    if(!this.state.cards_loaded){
      return <div className='loader'>Loading...</div>
    }

    const {
      listHeight,
      listRowHeight,
      overscanRowCount,
      scrollToIndex,
      filtered_cards
    } = this.state;

    return <AutoSizer disableHeight>
            {({width}) => (
              <List
                ref="List"
                className="cards-list"
                height={listHeight}
                overscanRowCount={overscanRowCount}
                noRowsRenderer={() => {return <div className='no-cards'>Sorry, no cards by your request.</div>}}
                rowCount={filtered_cards.length}
                rowHeight={listRowHeight}
                rowRenderer={this.rowRenderer}
                scrollToIndex={scrollToIndex}
                width={width}
              />
            )}
          </AutoSizer>
  }

}
CardsList.propTypes = {
  loadCards: PropTypes.func.isRequired
}

export default CardsList;