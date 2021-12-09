import React from 'react'

export default function Player({playerInfo, changePlayerInfo }) {
    return (
        <div style={{display: 'flex' , margin: '10px'}}>
            <h3 style={{margin: '5px 4px', verticalAlign:'bottom'}}>{playerInfo.number}</h3>
            <h3 style={{margin: '5px 4px', verticalAlign:'bottom'}}>{playerInfo.name}</h3>
            <h3 style={{margin: '5px 4px', verticalAlign:'bottom'}}>{playerInfo.position}</h3>
            <button onClick={()=> {changePlayerInfo({...playerInfo, spikes: ++playerInfo.spikes , total: ++playerInfo.total})}} type="button" class="btn btn-outline-primary btn-lg" style={{margin:'0 0 0 50px'}}>Spike</button>
            <button onClick={()=> {changePlayerInfo({...playerInfo, blocks: ++playerInfo.blocks , total: ++playerInfo.total})}} type="button" class="btn btn-outline-primary btn-lg" style={{margin:'0 0 0 10px'}}>Block</button>
            <button onClick={()=> {changePlayerInfo({...playerInfo, aces: ++playerInfo.aces , total: ++playerInfo.total})}} type="button" class="btn btn-outline-primary btn-lg" style={{margin:'0 0 0 10px'}}>Ace</button>

            <h3 style={{margin:'8px 50px'}} >{playerInfo.total}</h3>
        </div>
    )
}
