
export default class Action {

	static deck = {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥','♦','♠','♣'],   
    suitsColor: {
      '♠': 'black',
      '♣': 'black',
      '♦': 'red',
      '♥': 'red',
    },
  }

  static getCardDeck = () => {
      let id = 1,
        cards = [];

      for (let s = 0; s < this.deck.suits.length; s++) {
        for (let r = 0; r < this.deck.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.deck.ranks[r],
            suit: this.deck.suits[s],
            suitColor: this.deck.suitsColor[this.deck.suits[s]]
          };
          cards.push(card);
          id++;
        }
      }

    this.shuffleDeck(cards)
    
    return this.setCardsForPlayer(cards, 2)
  }

  static shuffleDeck = cards => {  
	  for(let i = cards.length - 1; i > 0; i--) {
	    const randomIndex = Math.floor(Math.random() * i),
	          temp = cards[i];
	   
		    cards[i] = cards[randomIndex];
		    cards[randomIndex] = temp;
		  }

		return cards
	}

	static setCardsForPlayer = (shuffledDeck, playerCount) => {
		const theConsignment = [],
				cardCntForPlayer = 5;

		for (let i = 0; i < playerCount; i++) {
				const playerCards = shuffledDeck.splice(cardCntForPlayer - cardCntForPlayer, cardCntForPlayer)
				theConsignment.push({
						name: `Player ${i || ''}`,
						cards: playerCards,
						coupleCnt: this.getCouples(playerCards),
						isWinner: false
				})
		}
		this.getWinner(theConsignment)
	  return theConsignment
	}

	static getCouples = cards => {
 		return Object.values(cards.reduce((acc, el) => {
		 				acc[el.rank] = (acc[el.rank] || 0) + 1
		 				return acc
		 			}, {}))
			 		.reduce((acc, item) => {
		 				if (item / 2 === 1) acc.push(item)
			 			if (item / 3 === 1) acc.push(item)
			 			if (item / 4 === 1) acc.push(item, item)
		 				return acc
					}, [])
			 		.length
	}

	static getWinner = players => {
		const max = Math.max(...players.map(elm => elm.coupleCnt)),
				winners = players.filter(el => el.coupleCnt === max);
		winners.length === 1 && (winners[0]['isWinner'] = true)
	}

}