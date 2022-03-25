import { useState } from "react";
const SelectPlayers = ({ players, encounter, setEncounter, windows, setWindows, dbUpdate }) => {
    console.log(encounter)

    const [ characters, setCharacters ] = useState([]);    
    const handleSelect = (e, player) => {
        if (e.target.checked) {setCharacters([...characters, player])} 
        else {setCharacters(characters.filter((character) => {return character.id !== player.id}))}
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const combatList = [...encounter.CombatantList];
        console.log(characters);
        characters.map((character) => {
            let found = false;
            encounter.CombatantList.map((listItem) => {
                if (listItem.id === character.id) {console.log(`${character.name} already in list as ${listItem.name}`);
                found = true}; return null 
            })
            if (found === false) {
                console.log(`charachter ${character.name} not found in combat list. Adding them`);
                combatList.push(character)
            }; return null
        })
        console.log(combatList)
        dbUpdate("encounters", {...encounter, "CombatantList": combatList}, encounter.id, "PUT")
        setWindows({...windows, "player": false, "list": true, "npcs": true, "notes": true})
    }
    return (
        <>
        <div className="widget">
            <form>
                {players && players.map((player) => (
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