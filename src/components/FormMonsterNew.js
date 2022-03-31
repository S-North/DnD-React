import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { types, damageTypes, conditions } from "../Forms";
import { diceRoll } from '../Maths';

const EditListItem = ({ selected, setSelected, item, type, panes, setPanes }) => {
    // item is the object being edited, selected in the current monster object, type e.g. trait, action, language, etc
    const [ update, setUpdate ] =useState(item)
    
    return (
        <>
            {type === "trait" &&
                <>
                    <input required type="text" 
                        value={update.name} 
                        onChange={(e) => {setUpdate({...update, "name": e.target.value})}} />
                    <textarea required rows="10" type="text" 
                        value={update.description} 
                        onChange={(e) => {setUpdate({...update, "description": e.target.value})}} />
                    <div className="btn blue" 
                        onClick={() => {updateItem("edit", "trait", selected, setSelected, [...selected.traits.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div></>}
            
            {type === "action" &&
                <>
                    <input required type="text" 
                        value={update.name} 
                        onChange={(e) => {setUpdate({...update, "name": e.target.value})}} />
                    <textarea required rows="10" type="text" 
                        value={update.description} 
                        onChange={(e) => {setUpdate({...update, "description": e.target.value})}} />
                    <input required type="number" 
                        value={update.attack} 
                        onChange={(e) => {setUpdate({...update, "attack": e.target.value})}} />
                    <div className="flex-row">
                        <input required type="number" 
                            value={update.damage.number} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "number": e.target.value}})}} />
                        <input required type="number"
                            value={update.damage.dice} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "dice": e.target.value}})}} />
                        <input required type="number" 
                            value={update.damage.bonus} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "bonus": e.target.value}})}} />
                    </div>
                    <div className="btn blue" 
                        onClick={() => {updateItem("edit", "action", selected, setSelected, [...selected.actions.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div></>}
        </>
    );
}

const CheckboxArray = ({ array, setMonster, selection, monster, listName }) => {
    const [ data, setData ] = useState()
    useEffect(() => {
        setData(selection)
        console.log(selection)
        console.log(listName)
      return () => {}
    }, [monster])
    
    const checkHandler = (e) => {
        switch (listName) {
            default: break
            case "resistances":
                data.includes(e.target.value) ?
                    setMonster({...monster, "resistances": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "resistances": [...data, e.target.value]})
                break
            case "vulnerabilities":
                data.includes(e.target.value) ?
                    setMonster({...monster, "vulnerabilities": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "vulnerabilities": [...data, e.target.value]})
                break
            case "conditions":
                data.includes(e.target.value) ?
                    setMonster({...monster, "conditions": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "conditions": [...data, e.target.value]})
                break

        }
    }
    return (
        <>
        <p>Resistances</p>
        {data && array.map((c) => (
            <div key={c}>
                <div className="flex-row">
                    <p>{c}</p>
                    <label htmlFor={c}></label>
                    <input
                        type="checkbox" 
                        name={c} 
                        checked={data.includes(c)} 
                        value={c} 
                        onChange={(e) => checkHandler(e)} />
                </div>
            </div>
        ))}    
        </>
    );
}

const updateItem = (action, target, selected, setSelected, update, panes, setPanes) => {
    console.log(update);
    if (target === "trait") {
        console.log({...selected, "traits": update})
        setSelected({...selected, "traits": update})
        setPanes({...panes, "editTrait": false, "addTrait": false})
    } else if (target ==="action") {
        console.log({...selected, "traits": update})
        setSelected({...selected, "actions": update})
        setPanes({...panes, "editAction": false, "addAction": false})
    }
}

const FormMonsterNew = ({ monsters, monster, dbUpdate }) => {
    console.log(conditions)
    // console.log(damageTypes)
    const [ selected, setSelected ]                     = useState()
    const [ senses, setSenses ]                         = useState();
    const [ languages, setLanguages ]                   = useState();
    const [ vulnerabilities, setVulnerabilities ]       = useState();
    const [ resistances, setResistances ]               = useState();
    const [ damageImmunity, setDamageImmunity ]         = useState();
    const [ conditionImmunity, setConditionImmunity ]   = useState();
    const [ traits, setTraits ]                         = useState();
    const [ actions, setActions ]                       = useState();
    const [ legendary, setLegendary ]                   = useState();
    const [ legendaryActions, setLegendaryActions ]     = useState();
    const [ panes, setPanes ]                           = useState({
                                                            "addTrait": false, 
                                                            "editTrait": false,
                                                            "addAction": false,
                                                            "editAction": false
                                                        })
    const [ item, setItem ]                             = useState() // temporary state for miscelaneous item beingediting

    useEffect(() => {
        console.log("monster updated")
        if (monster && monster.id) {
            setSelected(monster)
        }
      return () => {}
    }, [monster])

    useEffect(() => {
        if (selected && selected.senses)                {setSenses(selected.senses)}
        if (selected && selected.languages)             {setLanguages(selected.languages)}
        if (selected && selected.vulnerabilities)       {setVulnerabilities(selected.vulnerabilities)}
        if (selected && selected.resistances)           {setResistances(selected.resistances)}
        if (selected && selected.damageImmunity)        {setDamageImmunity(selected.damageImmunity)}
        if (selected && selected.conditionImmunity)     {setConditionImmunity(selected.conditionImmunity)}
        if (selected && selected.traits)                {setTraits(selected.traits)}
        if (selected && selected.actions)               {setActions(selected.actions)}
        if (selected && selected.legendary)             {setLegendary(selected.legendary)}
        if (selected && selected.legendaryActions)      {setLegendaryActions(selected.legendaryActions)}
      return () => {}
    }, [selected])
    


    return (
        <>
            <div className="widget">
{/* Title section */}
                <div className="section">
                    <h3>Monster Edit</h3>
                </div>

{/* Basic details */}
                {selected && <div className="">
                <CheckboxArray array={damageTypes} monster={selected} selection={selected.resistances} listName="resistances" setMonster={setSelected}></CheckboxArray>
                <CheckboxArray array={damageTypes} monster={selected} selection={selected.vulnerabilities} listName="vulnerabilities" setMonster={setSelected}></CheckboxArray>
                <CheckboxArray array={conditions} monster={selected} selection={selected.conditions} listName="conditions" setMonster={setSelected}></CheckboxArray>

                    <label htmlFor="name">Name:</label>
                    <input id="name"
                        type="text" 
                        placeholder="name"
                        value={ selected.name } 
                        onChange={(e) =>                {setSelected({...selected, "name": e.target.value})}} />
                    
                    <label htmlFor="descr">Description: </label>
                    <textarea id="descr"
                        rows="10" 
                        type="text" 
                        placeholder="description" 
                        value={ selected.description } 
                        onChange={(e) =>                {setSelected({...selected, "description": e.target.value})}} />
                    
                    <div className="flex-row">
                        <label htmlFor="cr">CR:</label>
                        <input id="cr"
                            type="number" 
                            placeholder="cr"
                            value={ selected.cr } 
                            onChange={(e) =>            {setSelected({...selected, "cr": e.target.value})}} />
                        
                        <label htmlFor="ac">AC:</label>
                        <input id="ac"
                            type="number" 
                            placeholder="ac"
                            value={ selected.ac } 
                            onChange={(e) =>            {setSelected({...selected, "ac": e.target.value})}} />
    
                        <label htmlFor="hp">HP:</label>
                        <input id="hp" type="number" placeholder="hp" value={ selected.hp }
                            onChange={(e) =>            {setSelected({...selected, "hp": e.target.value})}} />
                    
                        <label htmlFor="speed">Speed:</label>
                        <input id="speed" type="number" placeholder="speed" value={ selected.speed }
                            onChange={(e) =>            {setSelected({...selected, "speed": e.target.value})}} />
                    </div>

{/* Senses */}
                    {senses && <p>{senses}</p>}

{/* Languages */}

{/* Stats */}
                    <div className="flex-row">
                        <input  placeholder="str" type="number" value={ selected.str }                            
                            onChange={(e) =>            {setSelected({...selected, "str": e.target.value})}} />
                        <input  placeholder="dex" type="number" value={ selected.dex }
                            onChange={(e) =>            {setSelected({...selected, "dex": e.target.value})}} />
                        <input placeholder="con" type="number" value={ selected.con }
                            onChange={(e) =>            {setSelected({...selected, "con": e.target.value})}} />
                        <input placeholder="int" type="number" value={ selected.int }
                            onChange={(e) =>            {setSelected({...selected, "int": e.target.value})}} />
                        <input placeholder="wis" type="number" value={ selected.wis } 
                            onChange={(e) =>            {setSelected({...selected, "wis": e.target.value})}} />
                        <input placeholder="cha" type="number" value={ selected.cha } 
                           onChange={(e) =>             {setSelected({...selected, "cha": e.target.value})}} />
                    </div>


{/*                 For the following add/edit arrays. Can I write a function to do this generically?
                    e.g. > 
*/}

{/* Traits */}
                    <hr />
                    <div className="section">
                        <p>Traits</p>
                        {(panes.addTrait === false && panes.editTrait === false) &&
                            <div
                                style={{"float": "right", "cursor": "pointer"}}
                                className="green"
                                onClick={() => {setItem({"id": uuidv4()}, setPanes({...panes, "addTrait": true}))}}>Add New</div>}
                    </div>
                    
    {/* add */}
                    {panes.addTrait === true && 
                        <EditListItem 
                            item={{"id": uuidv4(), "name": "", "description":""}} 
                            type="trait"
                            selected={selected}
                            setSelected={setSelected} 
                            panes={panes} 
                            setPanes={setPanes}>
                        </EditListItem>}

    {/* edit */}                    
                    {panes.editTrait === true && 
                        <EditListItem 
                            item={item}
                            type="trait"
                            selected={selected} 
                            setSelected={setSelected} 
                            panes={panes} 
                            setPanes={setPanes}>
                        </EditListItem>}

    {/* list & delete */}
                    {traits && (panes.addTrait === false && panes.editTrait === false) && traits
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                        .map((trait) => (
                            <div
                                key={trait.id}
                                className="flex-row">
                                
                                <div
                                    className="description" 
                                    style={{"cursor": "pointer"}} 
                                            onClick={() => {setItem(trait); setPanes({...panes, "editTrait": true, })}}>
                                            
                                            
                                        <strong>{trait.name}:</strong> {trait.description}
                                </div>

                                {/* Delete button */}
                                <button style={{"float": "right"}} className="btn red" onClick={() => {
                                    setTraits([...traits.filter((i) => {return i.id !== trait.id})])
                                }}>
                                    Delete</button>
                            </div>
                        ))
                    }

                    
{/* Actions */}
                    <hr />
                    <div className="section">
                        <p>Actions</p>
                        {(panes.addAction === false && panes.editAction === false) &&
                            <div
                                style={{"float": "right", "cursor": "pointer"}}
                                className="green"
                                onClick={() => {
                                    setItem({"id": uuidv4(),"name": "", "description": "", "attack": "", "damage": {bonus: "", dice: "", number: "", type: ""}}, 
                                    setPanes({...panes, "addAction": true}))}}>Add New</div>}
                    </div>
                    
    {/* add */}
                    {/* {panes.addAction == true &&
                        // store input in {temp} state, then setActions with the temp data. Clear the temp state *** not working
                        <div> 
                            <input type="text" onChange={(e) => {setTemp({...temp, "name": e.target.value})}} />
                            <textarea type="text" rows="10" onChange={(e) => {setTemp({...temp, "description": e.target.value})}} />
                            <div className="btn blue" onClick={() => {setTemp({...temp, "id": uuidv4()}, setActions([...actions, temp], setTemp({}), setPanes({...panes, "addAction": false})))}}>Save</div>
                        </div>} */}

{/* add */}
                    {panes.addAction === true && 
                        <EditListItem 
                            item={{"id": uuidv4(),"name": "", "description": "", "attack": "", "damage": {bonus: "", dice: "", number: "", type: ""}}}
                            type="action"
                            selected={selected} 
                            setSelected={setSelected} 
                            panes={panes} 
                            setPanes={setPanes}>
                        </EditListItem>}

{/* edit */}                    
                    {panes.editAction === true && 
                        <EditListItem 
                            item={item}
                            type="action"
                            selected={selected} 
                            setSelected={setSelected} 
                            panes={panes} 
                            setPanes={setPanes}>
                        </EditListItem>}
    
    
    
    {/* list & delete */}
                    {traits && (panes.addAction === false && panes.editAction === false) && actions
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                        .map((action) => (
                            <div
                                key={action.id}
                                className="flex-row">
                                
                                <div
                                    className="description" 
                                    style={{"cursor": "pointer"}} 
                                    onClick={(e) => {setItem(action); setPanes({...panes, "editAction": true, })}}>
                                        <strong>{action.name}:</strong> {action.description}
                                </div>

                                {/* Delete button */}
                                <button style={{"float": "right"}} className="btn red" onClick={() => {
                                    setActions([...actions.filter((i) => {return i.id !== action.id})])
                                }}>
                                    Delete</button>
                            </div>
                        ))
                    }
                </div>}
            </div>
        </>
    );
}
 
export default FormMonsterNew;
