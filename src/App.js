import React, { useState } from 'react';
import Button from './template/button';
import Player from './template/player';
import './App.scss';

function App() {
  const [ data, setData ] = useState(null);
  console.log('Players ====>', data)
  return (
    <div className={`app`}>
      <Button getData={ setData } />
      <div className={`table`}>
      <div className={`table-title`}>Poker challenge</div>
        {data && data.map((player, ind) => <Player name={player.name} cards={player.cards} isWinner={ player.isWinner } key={ ind } />)}
      </div>
    </div>
  );
}

export default App;