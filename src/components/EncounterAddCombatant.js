import { useState } from "react";

const EncounterAddCombatant = ({ selected }) => {
const [ combatant, setCombatant ] = useState(selected);
const [ hitDice, setHitDice ] = useState(combatant.hitDice);
const [ traits, setTraits ] = useState(combatant.traits);
const [ actions, setActions ] = useState(combatant.actions);
const [ legendary, setLegendary ] = useState(combatant.legendaryActions);
console.log(legendary)

    return (
        <>
        <div className="section">
        <div className="widget">
            <p>Name</p>
            <input type="text" placeholder="name" value={ combatant.name } onChange={(e) => {setCombatant({...combatant, "name": e.target.value})}} />
            <p>Description</p>
            <textarea rows="10" type="text" placeholder="description" value={ combatant.description } onChange={(e) => {setCombatant({...combatant, "description": e.target.value})}} />
            <div className="flex-row">
                <input type="text" placeholder="type" value={ combatant.type } onChange={(e) => {setCombatant({...combatant, "type": e.target.value})}} />
                <input type="number" placeholder="ac" value={ combatant.ac } onChange={(e) => {setCombatant({...combatant, "ac": e.target.value})}} />
                <input type="number" placeholder="cr" value={ combatant.cr } onChange={(e) => {setCombatant({...combatant, "cr": e.target.value})}} />
            </div>
            <p>Ability Scores</p>
            <div className="flex-row">
                <input type="number" placeholder="str" value={ combatant.str } onChange={(e) => {setCombatant({...combatant, "str": e.target.value})}} />
                <input type="number" placeholder="dex" value={ combatant.dex } onChange={(e) => {setCombatant({...combatant, "dex": e.target.value})}} />
                <input type="number" placeholder="con" value={ combatant.con } onChange={(e) => {setCombatant({...combatant, "con": e.target.value})}} />
                <input type="number" placeholder="int" value={ combatant.int } onChange={(e) => {setCombatant({...combatant, "int": e.target.value})}} />
                <input type="number" placeholder="wis" value={ combatant.wis } onChange={(e) => {setCombatant({...combatant, "wis": e.target.value})}} />
                <input type="number" placeholder="cha" value={ combatant.cha } onChange={(e) => {setCombatant({...combatant, "cha": e.target.value})}} />
            </div>
            <p>Hit Dice</p>
            {hitDice && <div className="flex-row">
                <input type="number" placeholder="str" value={ hitDice.hdNumber } onChange={(e) => {setHitDice({...combatant, "hdNumber": e.target.value})}} />d
                <input type="number" placeholder="str" value={ hitDice.hdDice } onChange={(e) => {setHitDice({...combatant, "hdDice": e.target.value})}} />+
                <input type="number" placeholder="str" value={ hitDice.hdBonus } onChange={(e) => {setHitDice({...combatant, "hdBonus": e.target.value})}} />=
                <input type="number" placeholder="str" value={ combatant.hp } onChange={(e) => {setCombatant({...combatant, "hp": e.target.value})}} />
            </div>}
        </div>
        <div className="widget">
            {traits && traits.map((trait) => (
                <p><strong>{trait.name}:</strong> {trait.description}</p>
            ))}
        </div>
        <div className="widget">
            <h1>Actions</h1>
            {actions && actions.map((action) => (
                <p><strong>{action.name}:</strong> {action.description}</p>
            ))}
        </div>
        {legendary && <div className="widget">
            <h1>Legendary</h1>
            <p>{ combatant.legendary.description }</p>
            {legendary.map((legend) => (
                <p><strong>{legend.name}:</strong> {legend.description}</p>
            ))}
        </div>}
        </div>
        </>
    );
}
 
export default EncounterAddCombatant;