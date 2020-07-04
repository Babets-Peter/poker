import React from 'react';
import PropTypes from 'prop-types';


function PlayerCards({ cards }) {
  return (
    cards.map((card, ind) => {
    	return (
    		<div className={`cards__card--info ${card.suitColor}`} key={ ind }>
	    	 <span className={`cards__card--info__suit cards__card--info__suit--top`}>{ card.suit }</span>
	       <span className={`cards__card--info__number`}>{ card.rank } </span>
	       <span className={`cards__card--info__suit cards__card--info__suit--bottom`}>{ card.suit }</span>
       </div>
       );
    }));
}

export default PlayerCards;

PlayerCards.propTypes = {
	cards: PropTypes.array.isRequired
}