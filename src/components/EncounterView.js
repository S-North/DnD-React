import { useLocation } from "react-router";
import { useState } from "react";
import ItemList from "./ItemList";
import CombatantList from "./CombatantList";

const EncounterView = ({ monsters, players, notes, deleteItem, addItem }) => {
    const collection = "encounters";
    const location = useLocation();
    const encounter = location.state.item;
    const config = location.state.config;
    const [ combatList, setCombatList ] = useState([]);
    if (monsters) {console.log(monsters)};
    console.log(encounter);

    return (
        <>
            <div className="main-header">
                <button className="btn red float-right" onClick={ () => deleteItem(encounter.id, collection) }>-</button>
                    <h1>Encounter: { encounter.name }</h1>
                    <p>{ encounter.description }</p>
            </div>
            <div className="section">
                <CombatantList 
                    title="Combatants"
                    description="Use the button above to add combatants"
                    buttonText="New Combatant"
                    items={ encounter.combatList }
                    // monsters={ monsters }
                    route="/combatant"
                    addItem={ addItem }
                    campaignId={ encounter.campaignId }
                    adventureId={ encounter.adventureId }
                    encounterId={ encounter.id }
                    monsters={ monsters }
                />

                <ItemList 
                    title="Encounter NPCs"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New NPC"
                    items={ players.filter((player) => {return player.encounterId === encounter.id && player.npc === "true"}) }
                    route="/character"
                    addItem={ addItem }
                    encounterId={ encounter.id }
                />
                <ItemList 
                    title="Adventure Notes"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Note"
                    items={ notes.filter((notes) => {return notes.encounterId === encounter.id})  }
                    route="/note"
                    addItem={ addItem }
                    encounterId={ encounter.id }
                />
            </div>
        </>
    )
}

export default EncounterView;