import { useState } from "react";
const SelectPlayers = ({ campaignId, adventureId, players, encounter, setEncounter, windows, setWindows, dbUpdate }) => {
    console.log(campaignId)
    console.log(adventureId)

    // Who is already in the encounter?
    const inEncounter = encounter.initiative
        .filter(c => { return c.enemy === "pc" })
        .map(c => c.id)
    console.log(inEncounter)

    const [ characters, setCharacters ] = useState([]);
    console.log(characters)

    const handleSelect = (e, player) => {
        if (e.target.checked) {setCharacters([...characters, player])} 
        else {setCharacters(characters.filter((character) => {return character.id !== player.id}))}
    }
    
    // Add dem players!
    const handleSubmit = (e) => {
        e.preventDefault();
        const combatList = [...encounter.initiative];
        console.log(combatList);
        characters.map((character) => {
            let found = false;
            encounter.initiative.map((listItem) => {
                if (listItem.id === character.id) {console.log(`${character.name} already in list as ${listItem.name}`);
                found = true}; return null 
            })
            if (found === false) {
                console.log(`charachter ${character.name} not found in combat list. Adding them`);
                combatList.push({"name": character.name, "id": character.id, "enemy": "pc"})
            }; return null
        })
        console.log(combatList)
        dbUpdate("encounters", {...encounter, "initiative": [...combatList]}, encounter.id, "PUT")
        setWindows({...windows, "player": false, "list": true, "npcs": true, "notes": true})
    }

    return (
        <>
        <div className="widget">
            <form>
                {players && players.filter((player) => { return !inEncounter.includes(player.id)}).map((player) => (
                    <div className="flex-row">
                        <label style={{"cursor": "pointer"}}>
                            <input style={{"width": "auto", "minWidth": "auto"}} type="checkbox" onChange={(e) => {handleSelect(e, player)}}></input>
                        {player.name}</label>
                    <p></p>
                    </div>
                ))}
                <div className="flex-row">
                    <input type="button" className="btn submitButton grey" value="cancel" onClick={() => {setWindows({...windows, "player": false, "list": true, "npcs": true, "notes": true})}}></input>
                    <input type="button" className="btn submitButton green" value="save" onClick={(e) => {handleSubmit(e)}}></input>
                </div>
            </form>
            </div>
        </>
    );
}
 
export default SelectPlayers;