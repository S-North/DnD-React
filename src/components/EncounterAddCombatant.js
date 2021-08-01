import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { diceRoll } from '../Maths';

const EncounterAddCombatant = ({ selected }) => {
    const [ combatant, setCombatant ] = useState(selected);
    const [ hitDice, setHitDice ] = useState(combatant.hitDice);
    if (!combatant.hitDice) {
        // useState is async. To force completion before calling next function, use the callback function.
        setCombatant({...combatant, "hitDice": {hdBonus: "0", hdDice: "6", hdNumber: "1"}}, () => {
            setHitDice(combatant.hitDice, () => {
                // another callback function, keep stacking them! :) but not really, could get messy real quick
            });
        })
    }
    const [ traits, setTraits ] = useState(combatant.traits);
    const [ actions, setActions ] = useState(combatant.actions);
    const [ legendary, setLegendary ] = useState(combatant.legendaryActions);
    const [ selection, setSelection ] = useState();
    const [ windows, setWindows ] = useState({"main": true, "traits": true, "traitEdit": false, "traitAdd": false, "actions": true, "actionEdit": false, "legendary": true, "legendaryAdd": false, "legendaryEdit": false})


    return (
        <>
        <div className="section">
        <div className="widget">
            
            <p>Name</p>
            <input 
                type="text" 
                placeholder="name" 
                value={ combatant.name } 
                onChange={(e) => {setCombatant({...combatant, "name": e.target.value})}} />
            
            <p>Description</p>
            <textarea 
                rows="10" 
                type="text" 
                placeholder="description" 
                value={ combatant.description } 
                onChange={(e) => {setCombatant({...combatant, "description": e.target.value})}} />
            
            <div className="flex-row">
                <input 
                    type="text" 
                    placeholder="type" 
                    value={ combatant.type } 
                    onChange={(e) => {setCombatant({...combatant, "type": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="ac" 
                    value={ combatant.ac } 
                    onChange={(e) => {setCombatant({...combatant, "ac": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="cr" 
                    value={ combatant.cr } 
                    onChange={(e) => {setCombatant({...combatant, "cr": e.target.value})}} />
            </div>

            <p>Ability Scores</p>
            <div className="flex-row">
                <input 
                    type="number" 
                    placeholder="str" 
                    value={ combatant.str } 
                    onChange={(e) => {setCombatant({...combatant, "str": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="dex" 
                    value={ combatant.dex } 
                    onChange={(e) => {setCombatant({...combatant, "dex": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="con" 
                    value={ combatant.con } 
                    onChange={(e) => {setCombatant({...combatant, "con": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="int" 
                    value={ combatant.int } 
                    onChange={(e) => {setCombatant({...combatant, "int": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="wis" 
                    value={ combatant.wis } 
                    onChange={(e) => {setCombatant({...combatant, "wis": e.target.value})}} />
                <input 
                    type="number" 
                    placeholder="cha" 
                    value={ combatant.cha } 
                    onChange={(e) => {setCombatant({...combatant, "cha": e.target.value})}} />
            </div>

            <p>Hit Dice</p>
            {combatant.hitDice && <div className="flex-row">
                <input 
                    type="number" 
                    value={ hitDice.hdNumber } 
                    onChange={(e) => {setHitDice({...hitDice, "hdNumber": e.target.value})}} />d
                <input 
                    type="number" 
                    value={ hitDice.hdDice } 
                    onChange={(e) => {setHitDice({...hitDice, "hdDice": e.target.value})}} />+
                <input 
                    type="number" 
                    value={ hitDice.hdBonus } 
                    onChange={(e) => {setHitDice({...hitDice, "hdBonus": e.target.value})}} />
                <div className="btn green" onClick={() => {setCombatant({...combatant, "hp": diceRoll(hitDice.hdNumber, hitDice.hdDice, hitDice.hdBonus)[2]})}}>=</div>
                <input 
                type="number" 
                placeholder="str" 
                value={ combatant.hp } 
                onChange={(e) => {setCombatant({...combatant, "hp": e.target.value})}} />
            </div>}
        </div>

{/* the section for traits */}
        <div className="widget">
            
            {/* button to add new trait */}
            {(!windows.traitAdd && !windows.traitEdit) && 
                <div
                style={{"float": "right"}}
                className="btn green" 
                onClick={() => {setWindows({...windows, "traitAdd": true})}}>+
                </div>}
            <h1>Traits ({traits.length})</h1>
            
            {/* list of traits. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}
            {(traits && !windows.traitAdd && !windows.traitEdit) && traits
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((trait) => (
                    <div className="flex-row">
                        
                        <div
                            className="description"
                            key={trait.id} 
                            style={{"cursor": "pointer"}} 
                            onClick={(e) => {setSelection(trait); setWindows({...windows, "traitEdit": true})}}><strong>{trait.name}:</strong> {trait.description}
                            </div>
                        <button style={{"float": "right"}} className="btn red" onClick={() => {
                            setTraits([...traits.filter((i) => {return i.id !== trait.id})])
                        }}>-</button>
                    </div>
            ))}

            {/* edit existing trait, then update the 'traits' state */}
            {windows.traitEdit && <div>
                <input 
                    required 
                    type="text" 
                    value={selection.name} 
                    onChange={(e) => {setSelection({...selection, "name": e.target.value})}} />
                <textarea 
                    required 
                    rows="10" 
                    type="text" 
                    value={selection.description} 
                    onChange={(e) => {setSelection({...selection, "description": e.target.value})}} />
                <div 
                    className="btn blue" 
                    onClick={() => {setTraits([...traits.filter((trait) => {return trait.id !== selection.id}), selection], setWindows({...windows, "traitEdit": false}))}}>Save</div>
            </div>}

            {/* add new trait */}
            {windows.traitAdd && <div>
                <input 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "name": e.target.value})}} />
                <textarea 
                    rows="10" 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "description": e.target.value})}} />
                <div 
                    className="btn blue" 
                    onClick={() => {setSelection({...selection, "id": uuidv4()}, setTraits([...traits, selection], setWindows({...windows, "traitAdd": false})))}}>Save</div>
            </div>}
            
        </div>

{/* the section for actions */}
        <div className="widget">

            {/* button to add new actions */}
            {(!windows.actionAdd && !windows.actionEdit) && 
                <div
                style={{"float": "right"}}
                className="btn green" 
                onClick={() => {setWindows({...windows, "actionAdd": true})}}>+
                </div>}
            <h1>Actions ({actions.length})</h1>

            {/* list of actions. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}
            {(actions && !windows.actionAdd && !windows.actionEdit) && actions
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((action) => (
                    <div className="flex-row">
                        
                        <div
                            className="description"
                            key={action.id} 
                            style={{"cursor": "pointer"}} 
                            onClick={(e) => {setSelection(action); setWindows({...windows, "actionEdit": true})}}><strong>{action.name}:</strong> {action.description}
                            </div>
                        <button style={{"float": "right"}} className="btn red" onClick={() => {
                            setActions([...actions.filter((i) => {return i.id !== action.id})])
                        }}>-</button>
                    </div>
            ))}
            
            {/* edit existing actions, then update the 'actions' state */}
            {windows.actionEdit && <div>
                <input 
                    required 
                    type="text" 
                    value={selection.name} 
                    onChange={(e) => {setSelection({...selection, "name": e.target.value})}} />
                <textarea 
                    required 
                    rows="10" 
                    type="text" 
                    value={selection.description} 
                    onChange={(e) => {setSelection({...selection, "description": e.target.value})}} />
                <div 
                    className="btn blue" 
                    onClick={() => {setActions([...actions.filter((action) => {return action.id !== selection.id}), selection], setWindows({...windows, "actionEdit": false}))}}>Save</div>
            </div>}

            {/* add new legendary */}
            {windows.actionAdd && <div>
                <input 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "name": e.target.value})}} />
                <textarea 
                    rows="10" 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "description": e.target.value})}} />
                <div 
                    className="btn blue" 
                    onClick={() => {setSelection({...selection, "id": uuidv4()}, setActions([...actions, selection], setWindows({...windows, "actionAdd": false})))}}>Save</div>
            </div>}

        </div>

{/* the section for legendary actions */}
        <div className="widget">

            {/* button to add new legendary actions */}
            {(!windows.legendaryAdd && !windows.legendaryEdit) && 
                <div
                style={{"float": "right"}}
                className="btn green" 
                onClick={() => {setWindows({...windows, "legendaryAdd": true})}}>+
                </div>}

            <h1>Legendary ({legendary ? legendary.length : 0})</h1>
            <p>{ combatant.legendary.description }</p>

            {/* list of actions. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}

            {/* TODO: all traits, actions & legendary must have a unique id (uuid) for delete and update to work */}
            {(legendary && !windows.legendaryAdd && !windows.legendaryEdit) && legendary
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((legend) => (
                    <div className="flex-row">
                        <div
                            className="description"
                            key={legend.id} 
                            style={{"cursor": "pointer"}} 
                            onClick={(e) => {setSelection(legend); setWindows({...windows, "legendaryEdit": true})}}><strong>{legend.name}:</strong> {legend.description}
                        </div>
                        <button style={{"float": "right"}} className="btn red" onClick={() => {
                            setLegendary([...legendary.filter((i) => {return i.id !== legend.id})])
                        }}>-</button>
                    </div>
            ))}
        </div>
        </div>
        </>
    );
}
 
export default EncounterAddCombatant;