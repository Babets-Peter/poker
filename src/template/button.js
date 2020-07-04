import React from 'react';
import PropTypes from 'prop-types';
import Action from '../action';

function Button({ getData }) {
  return (
    <div className={`button`}>
    	<button 
    		className={`shuffle-btn`}
    		onClick={() => getData(Action.getCardDeck()) }
    		>
    	  Deal cards
    	</button>
    </div>
  );
}

export default Button;

Button.propTypes = {
	getData: PropTypes.func.isRequired
}