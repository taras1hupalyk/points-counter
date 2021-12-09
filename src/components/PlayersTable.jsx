import React from 'react'

export default function PlayersTable(props) {
    return (
        <div>
            <table className="table table-dark mb-0" style={{ borderRadius: '2px', margin: '5px 5px 5px 5px' }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="border-0">
              #
            </th>
            <th scope="col" className="border-0">
              Name
            </th>
            <th scope="col" className="border-0">
              Position
            </th>
            <th scope="col" className="border-0">
              Spikes
            </th>
            <th scope="col" className="border-0">
              Blocks
            </th>
            <th scope="col" className="border-0">
              Aces
            </th>
            <th scope="col" className="border-0">
              Total
            </th>
          </tr>
        </thead>

        { props.players.map(
                player =>(
        <tbody>
           <tr>
               <td>{player.number}</td>
               <td>{player.name}</td>
               <td>{player.position}</td>
               <td>{player.spikes}</td>
               <td>{player.blocks}</td>
               <td>{player.aces}</td>
               <td>{player.total}</td>
            </tr>  
        </tbody>
        ))  }
      </table>
        </div>
    )
}
