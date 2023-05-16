import React from 'react'

export default function Player({ playerInfo, changePlayerInfo }) {
    return (
        <div class="player_class" style={{display:'table-row'}}>

            <div style={{display:'table-cell', margin:'3px 0 0 0 '}}>{playerInfo.number}</div>
            <div style={{display:'table-cell'}}>{playerInfo.name}</div>
            <div style={{display:'table-cell'}}>{playerInfo.position}</div>


            <div className="control_butttons"  style={{display:'table-cell', verticalAlign: 'center'}}>

                <button onClick={() => { changePlayerInfo({ ...playerInfo, spikes: ++playerInfo.spikes, total: ++playerInfo.total }) }} type="button" class="btn btn-outline-primary btn-lg" style={{ margin: '10px 0 0 50px' }}>Spike</button>
                <button onClick={() => { changePlayerInfo({ ...playerInfo, blocks: ++playerInfo.blocks, total: ++playerInfo.total }) }} type="button" class="btn btn-outline-primary btn-lg" style={{ margin: '10px 0 0 10px' }}>Block</button>
                <button onClick={() => { changePlayerInfo({ ...playerInfo, aces: ++playerInfo.aces, total: ++playerInfo.total }) }} type="button" class="btn btn-outline-primary btn-lg" style={{ margin: '10px 0 0 10px' }}>Ace</button>
            </div>

            <div style={{display:'table-cell'}}>{playerInfo.total}</div>
        </div>
    )
}
