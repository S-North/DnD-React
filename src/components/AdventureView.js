import { useLocation } from "react-router";
import ItemList from './ItemList';

const AdventureView = ({ encounters, addItem, deleteItem, campaignId, notes, players }) => {
    // console.log(deleteItem);
    const location = useLocation();
    const collection = "adventures";
    const adventure = location.state.item;
    console.log(`campaign: ${location.state.campaignId}, adventure: ${adventure.id}`)
    console.log(adventure.id);
    console.log(encounters.filter((encounter) => {return encounter.adventureId === adventure.id}))

    return (
        <>
            <div className="main-header">
            <button className="btn red float-right" onClick={ () => deleteItem(adventure.id, collection) }>Delete Adventure</button>
                <h1>Adventure: { adventure.name }</h1>
                <p>{ adventure.description }</p>
            </div>
            <div className="section">
                <ItemList 
                    title="Encounters"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Encounter"
                    items={ encounters.filter((encounter) => {return encounter.adventureId === adventure.id}) }
                    route="/encounter"
                    addItem={ addItem }
                    campaignId={ location.state.campaignId }
                    adventureId={ adventure.id }
                />
                <ItemList 
                    title="Adventure NPCs"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New NPC"
                    items={ players.filter((player) => {return player.adventureId === adventure.id && player.npc === "true"}) }
                    route="/character"
                    addItem={ addItem }
                    campaignId={ location.state.campaignId }
                    adventureId={ adventure.id }
                />
                <ItemList 
                    title="Adventure Notes"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Note"
                    items={ notes.filter((notes) => {return notes.adventureId === adventure.id})  }
                    route="/note"
                    addItem={ addItem }
                    campaignId={ location.state.campaignId }
                    adventureId={ adventure.id }
                />
            </div>
        </>
    );
}
 
export default AdventureView;