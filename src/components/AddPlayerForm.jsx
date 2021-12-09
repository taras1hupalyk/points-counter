import React, {useState} from 'react'
import { Form , Input} from 'reactstrap'


export default function AddPlayerForm({submit}) {
    const [editedPlayer, setEditedPlayer] = useState({number:0, name:'', position:'', total:0, blocks:0, spikes:0, aces:0 })
    return (
        <div>
            <Form id="player-form"  style={{margin: '10px 10px'}}>
                <Input value={editedPlayer.number} onChange={e => setEditedPlayer({...editedPlayer, number: e.target.value})} size="lg" className="mb-3" placeholder="Number"/>
                <Input value={editedPlayer.name} onChange={e => setEditedPlayer({...editedPlayer, name: e.target.value})} size="lg" className="mb-3" placeholder="Name"/>
                <Input value={editedPlayer.position} onChange={e => setEditedPlayer({...editedPlayer, position: e.target.value})} size="lg" className="mb-3" placeholder="Position"/>
            </Form>
            <button className="btn btn-success" onClick={()=> {submit(editedPlayer); editedPlayer.total=0}}>Add player</button>
        </div>
    )
}
