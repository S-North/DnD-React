import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import CombatantList from "./CombatantList";
import SelectMonsters from "./SelectMonsters";
import SelectPlayers from "./SelectPlayers";
import EncounterAddCombatant from "./EncounterAddCombatant";
import Initiative from "./Initiative";
import TurnOrder from "./TurnOrder"

const EncounterView = ({ campaign, adventure, encounters, monsters, players, notes, deleteItem, addItem, dbUpdate }) => {
    const collection = "encounters";
    const location = useLocation();
    const [ windows, setWindows ] = useState({"list": true, "select": false, "add": false, "player": false, "detail": false, "npcs": true, "notes": true, "traits": true, "traitEdit": false, "traitAdd": false, "actions": true, "actionEdit": false, "legendary": true, "legendaryAdd": false, "legendaryEdit": false, "turn": false})
    const [ selected, setSelected ] = useState({})
    const [ encounter, setEncounter] = useState();
    const [ initiativeList, setInitiativeList ] = useState({});
    // console.log(location.state.campaignId)

    useEffect(() => {
        setEncounter(encounters.filter((item) => {return item.id === location.state.item.id})[0]
        );
        return () => {}
    }, [encounters, location])


    return (
        <>
            {/* Title and delete button */}
            {encounter && <div className="main-header">
                <button className="btn red float-right" onClick={ () => deleteItem(encounter.id, collection) }>Delete Encounter</button>
                <h1>Encounter: { encounter.name }</h1>
                <p>{ encounter.description }</p>
            </div>}

            <div className="section">
                {/* Div displaying all current combatants */}
                {(windows.list && encounter) && <CombatantList 
                    items={ encounter.initiative }
                    route="/combatant"
                    addItem={ addItem }
                    campaignId={ encounter.campaignId }
                    adventureId={ encounter.adventureId }
                    encounterId={ encounter.id }
                    encounter={ encounter }
                    monsters={ monsters }
                    players={ players }
                    windows={ windows }
                    setWindows={ setWindows }
                    dbUpdate={ dbUpdate }
                    itemStyle = "item-compact"
                />}

                {/* Div displaying turn order */}
                {(windows.turn && encounter) && <TurnOrder 
                    items={ encounter.initiative }
                    route="/combatant"
                    addItem={ addItem }
                    campaignId={ encounter.campaignId }
                    adventureId={ encounter.adventureId }
                    encounterId={ encounter.id }
                    encounter={ encounter }
                    monsters={ monsters }
                    players={ players }
                    windows={ windows }
                    setWindows={ setWindows }
                    dbUpdate={ dbUpdate }
                    itemStyle = "item-compact"
                />}

                {/* Div to select monsters to add */}
                {windows.select && <SelectMonsters
                    monsters={ monsters } 
                    setSelected={ setSelected } 
                    windows={ windows } 
                    setWindows={ setWindows }
                />}

                {/* Div to select PCs to add */}
                {windows.player && <SelectPlayers
                    players={ players.filter(player => {return player.campaignId === location.state.item.campaignId}) }
                    setSelected={ setSelected }
                    windows={ windows } 
                    setWindows={ setWindows }
                    encounter={ encounter }
                    setEncounter={ setEncounter }
                    dbUpdate={ dbUpdate }
                    campaignId={ location.state.campaignId }
                    adventureId={ location.state.adventureId }
                />}

                {/* Div to select monsters to add */}
                {windows.add && <EncounterAddCombatant
                    selected={ selected }
                    windows={ windows }
                    setWindows={ setWindows }
                    encounter={ encounter}
                    dbUpdate={ dbUpdate }
                    initiative={initiativeList}
                    setInitiative={setInitiativeList}
                />}
                {windows.initiative && <Initiative
                    windows={ windows } 
                    setWindows={ setWindows }
                    encounter={ encounter}
                    setEncounter={ setEncounter }
                    dbUpdate={ dbUpdate }
                    players={ players }
                    campaignId={ encounter.campaignId }
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