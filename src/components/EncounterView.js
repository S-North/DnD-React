import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import CombatantList from "./CombatantList";
import SelectMonsters from "./SelectMonsters";
import SelectPlayers from "./SelectPlayers";
import EncounterAddCombatant from "./EncounterAddCombatant";
import Initiative from "./Initiative";

const EncounterView = ({ encounters, monsters, players, notes, deleteItem, addItem, dbUpdate }) => {
    const collection = "encounters";
    const location = useLocation();
    const [ windows, setWindows ] = useState({"list": true, "select": false, "add": false, "player": false, "detail": false, "npcs": true, "notes": true, "traits": true, "traitEdit": false, "traitAdd": false, "actions": true, "actionEdit": false, "legendary": true, "legendaryAdd": false, "legendaryEdit": false})
    const [ selected, setSelected ] = useState({})
    const [ encounter, setEncounter] = useState();

    useEffect(() => {
        setEncounter(encounters.filter((item) => {return item.id === location.state.item.id})[0]
        );
        return () => {}
    }, [encounters, location])


    return (
        <>
            {encounter && <div className="main-header">
                <button className="btn red float-right" onClick={ () => deleteItem(encounter.id, collection) }>-</button>
                <h1>Encounter: { encounter.name }</h1>
                <p>{ encounter.description }</p>
            </div>}

            <div className="section">
                {(windows.list && encounter) && <CombatantList 
                    items={ encounter.CombatantList }
                    route="/combatant"
                    addItem={ addItem }
                    // setCombatList={ setCombatList }
                    campaignId={ encounter.campaignId }
                    adventureId={ encounter.adventureId }
                    encounterId={ encounter.id }
                    monsters={ monsters }
                    players={ players }
                    windows={ windows }
                    setWindows={ setWindows }
                    dbUpdate={ dbUpdate }
                    itemStyle = "item-compact"
                />}
                {windows.select && <SelectMonsters
                    monsters={ monsters } 
                    setSelected={ setSelected } 
                    windows={ windows } 
                    setWindows={ setWindows }
                />}
                {windows.player && <SelectPlayers
                    players={ players.filter(player => {return player.campaignId === location.state.item.campaignId}) }
                    setSelected={ setSelected }
                    windows={ windows } 
                    setWindows={ setWindows }
                    encounter={ encounter }
                    setEncounter={ setEncounter }
                    dbUpdate={ dbUpdate }
                />}
                {windows.add && <EncounterAddCombatant
                    selected={ selected }
                    windows={ windows } 
                    setWindows={ setWindows }
                    encounter={ encounter}
                    dbUpdate={ dbUpdate }
                />}
                {windows.initiative && <Initiative
                    windows={ windows } 
                    setWindows={ setWindows }
                    encounter={ encounter}
                    dbUpdate={ dbUpdate }
                />}
                {(windows.npcs && encounter) && <ItemList 
                    title="Encounter NPCs"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New NPC"
                    items={ players.filter((player) => {return player.encounterId === encounter.id && player.npc === "true"}) }
                    route="/character"
                    addItem={ addItem }
                    encounterId={ encounter.id }
                />}
                {(windows.notes && encounter) && <ItemList 
                    title="Encounter Notes"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Note"
                    items={ notes.filter((notes) => {return notes.encounterId === encounter.id})  }
                    route="/note"
                    addItem={ addItem }
                    encounterId={ encounter.id }
                />}
            </div>
        </>
    )
}

export default EncounterView;