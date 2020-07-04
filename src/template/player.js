import React from 'react';
import PlayerCards from './cards';
import PropTypes from 'prop-types';

function Player({ name, cards, isWinner }) {
  return (
    <div className={`player ${isWinner ? 'winner' : ''}`}>
    	<div className={`player-info`}>
	    	<h2>{ name }</h2>
	    	{isWinner && <span className={`winning-text`}>Winner!</span>}
    	</div>
    	<div className={`cards`}>
    		<PlayerCards cards={ cards } />
    	</div>
    </div>
  );
}

export default Player;

Player.propTypes = {
	name: PropTypes.string.isRequired,
	isWinner: PropTypes.bool.isRequired,
	cards: PropTypes.array.isRequired
}