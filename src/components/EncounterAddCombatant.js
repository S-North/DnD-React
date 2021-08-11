import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { types } from "../Forms";
import { diceRoll } from '../Maths';

// Initiative: map monsters, add monster to new array named after initiative bonus.
// For each new array, roll initiative and set each monsters initiative to that value.
// Then do manual input of player initiative values

const EncounterAddCombatant = ({ selected, windows, setWindows, encounter, dbUpdate }) => {
    const [ multiple, setMultiple ] = useState(1);
    const mobList = encounter.mobList;
    const [ mob, setMob ] = useState("default");
    const [ mobSubmit, setMobSubmit] = useState("default");
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

    const handleSubmit = () => {
        if (mob === "new" & !mobSubmit) { window.confirm("no mob name"); return } // exit the function if new mob specified but no value provided

        const newCombatants = [] // store multible submited monsters here before submitting them
        let updatedEncounter = encounter;
        let group = "default";
        if (mob !== "new") {
            group = mob.toLowerCase()
        } else {
            group = mobSubmit.toLowerCase()
        }
        for (let i = 0; i < parseInt(multiple); i++) {
            let c = {...combatant, "enemy": true, "source": selected.id, "id": uuidv4(), "mob": group, "traits": [...traits], "actions": [...actions], "legendaryActions": [...legendary]};
            newCombatants.push(c);
            console.log(newCombatants);
            }

        if (mob === "new" & !mobList.includes(mobSubmit.toLowerCase()) ) {
            updatedEncounter = {...encounter, "mobList": [...mobList, mobSubmit.toLowerCase()], "CombatantList": [...encounter.CombatantList, ...newCombatants]}
        } else {
            updatedEncounter = {...encounter, "CombatantList": [...encounter.CombatantList, ...newCombatants]}
        }
        
        dbUpdate("encounters", updatedEncounter, encounter.id, "PUT");
        setWindows({...windows, "list": true, "npcs": true, "notes": true, "add": false, "traits": false, "actions": false, "legendary": false})
    }

    return (
        <>
        <div className="flex-row">
            <input
                type="number"
                required
                placeholder="# to add" 
                value={ multiple } 
                onChange={(e) => {setMultiple(e.target.value)}} />
            <select value={mob} onChange={(e) => {setMob(e.target.value)}}>
                {mobList
                    .filter((mob) => {return mob !== "players"})
                    .map(mob => (
                        <option key={mob} value={mob}>{mob}</option>
                ))}
            </select>
            {mob === "new" && <input 
                type="text" 
                placeholder="new mob" 
                onChange={(e) => {setMobSubmit(e.target.value)}} />}
            <div 
                className="btn green"
                onClick={() => {handleSubmit()}}
                >Add</div>
        </div>
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
                <select 
                    type='number'
                    placeholder="type"
                    value={ combatant.type } 
                    onChange={(e) => {setCombatant({...combatant, "type": e.target.value})}}>
                        {types && types
                        .filter((type) => {return type !== "All"}) // get rid of the "All" option
                        .map((type) => (
                            <option value={ type } key={ type }>{ type } </option>
                        ))}
                </select>
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
            <h2>Traits ({traits.length})</h2>
            
            {/* list of traits. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}
            {(traits && !windows.traitAdd && !windows.traitEdit) && traits
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((trait) => (
                    <div
                        key={trait.id}
                        className="flex-row">
                        
                        <div
                            className="description" 
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
            <h2>Actions ({actions.length})</h2>

            {/* list of actions. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}
            {(actions && !windows.actionAdd && !windows.actionEdit) && actions
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((action) => (
                    <div
                        key={action.id}
                        className="flex-row">
                        
                        <div
                            className="description"
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

            {/* add new action */}
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

            <h2>Legendary ({legendary ? legendary.length : 0})</h2>
            <p className="description">{ combatant.legendary.description }</p>

            {/* list of legendary actions. clicking a list item updates the 'selected' state & reveals the edit form. */}
            {/* Clicking the delete button */}

            {/* TODO: all traits, actions & legendary must have a unique id (uuid) for delete and update to work */}
            {(legendary && !windows.legendaryAdd && !windows.legendaryEdit) && legendary
                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                .map((legend) => (
                    <div
                        key={legend.id}
                        className="flex-row">
                            
                        <div
                            className="description"
                            style={{"cursor": "pointer"}} 
                            onClick={(e) => {setSelection(legend); setWindows({...windows, "legendaryEdit": true})}}><strong>{legend.name}:</strong> {legend.description}
                        </div>
                        <button style={{"float": "right"}} className="btn red" onClick={() => {
                            setLegendary([...legendary.filter((i) => {return i.id !== legend.id})])
                        }}>-</button>
                    </div>
            ))}

            {/* edit existing legendary actions, then update the 'actions' state */}
            {windows.legendaryEdit && <div>
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
                    onClick={() => {setLegendary([...legendary.filter((legend) => {return legend.id !== selection.id}), selection], setWindows({...windows, "legendaryEdit": false}))}}>Save</div>
            </div>}

            {/* add new legendary action */}
            {windows.legendaryAdd && <div>
                <input 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "name": e.target.value})}} />
                <textarea 
                    rows="10" 
                    type="text" 
                    onChange={(e) => {setSelection({...selection, "description": e.target.value})}} />
                <div 
                    className="btn blue" 
                    onClick={() => {
                        setSelection({...selection, "id": uuidv4()}, 
                        setLegendary([...legendary, selection], 
                        setWindows({...windows, "legendaryAdd": false})))}}>Save</div>
            </div>}
        </div>
        </div>
        </>
    );
}
 
export default EncounterAddCombatant;
