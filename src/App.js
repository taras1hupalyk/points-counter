import React from 'react';
import { useState } from 'react';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import FlipCounter from './components/flip-counter';
import Player from './components/Player';
import PlayersTable from './components/PlayersTable';

import './style.css';



function App() {
  const [playersInfo, setPlayersInfo] = useState([])

  function changePlayerInfo(newPlayer) {
    let bufArr = [...playersInfo]
    let foundIndex = bufArr.findIndex(x => x.number === newPlayer.number)
    bufArr[foundIndex] = { ...newPlayer }
    setPlayersInfo(bufArr)
  }

  function addPlayer(submitedPlayer) {
    setPlayersInfo([...playersInfo, submitedPlayer])
  }
  return (
    <div className="App">
      <h1 className="some" style={{ textAlign: 'center' }} >hello some</h1>


      <div className="score-table" style={{ display: 'flex', justifyContent:'center' }}>
        <FlipCounter />
        <FlipCounter />

      </div>

      {
        playersInfo.map(
          (player) =>
            <Player playerInfo={player} changePlayerInfo={changePlayerInfo} />
        )
      }

      {playersInfo.length ? <PlayersTable players={playersInfo} /> : null}



      <AddPlayerForm submit={addPlayer} />

    </div>
  );
}

export default App;
