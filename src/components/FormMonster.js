import { AppContext } from "../AppContext";
import { useState, useEffect, useContext } from "react";
import { MdRemoveCircle, MdOutlineNoteAdd, MdOutlineChevronLeft } from "react-icons/md";
import { FaDiceSix } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { types, damageTypes, conditions, crRange, sizes, sensesList, abilityList, skillList, skillToAbility } from "../Forms";
import { abilityModifier, diceRoll, calculateProficiencyBonus } from '../Maths';

const EditListItem = ({ selected, setSelected, item, type, panes, setPanes }) => {
    // item is the object being edited, selected in the current monster object, type e.g. trait, action, language, etc
    const [ update, setUpdate ] =useState(item)
    
    return (
        <>
            {type === "trait" &&
                <form>
                    <input required type="text" 
                        value={update.name} 
                        onChange={(e) => {setUpdate({...update, "name": e.target.value})}} />
                    <textarea required rows="10" type="text" 
                        value={update.description} 
                        onChange={(e) => {setUpdate({...update, "description": e.target.value})}} />
                    <div className="green-button" 
                        onClick={() => {updateItem("edit", "trait", selected, setSelected, [...selected.traits.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div>
                </form>}
            
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
                            value={update.damage.dice} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "dice": e.target.value}})}} />
                        <input required type="number"
                            value={update.damage.sides} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "sides": e.target.value}})}} />
                        <input required type="number" 
                            value={update.damage.bonus} 
                            onChange={(e) => {setUpdate({...update, "damage": {...update.damage, "bonus": e.target.value}})}} />
                        <select name="type" id="" 
                            value={update.damage.type} 
                            onChange={e => {setUpdate({...update, "damage": {...update.damage, "type": e.target.value}})}}>
                            {damageTypes.map(o => (
                                <option key={o} value={o}>{o}</option>
                            ))}
                        </select>
                    </div>
                    <div className="green-button" 
                        onClick={() => {updateItem("edit", "action", selected, setSelected, [...selected.actions.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div></>}
            
            {type === "legendary" &&
                <>
                    <input required type="text" 
                        value={update.name} 
                        onChange={(e) => {setUpdate({...update, "name": e.target.value})}} />
                    <textarea required rows="10" type="text" 
                        value={update.description} 
                        onChange={(e) => {setUpdate({...update, "description": e.target.value})}} />
                    <div className="green-button" 
                        onClick={() => {updateItem("edit", "legendary", selected, setSelected, [...selected.legendary.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div></>}
            {type === "legendaryActions" &&
                <>
                    <input required type="text" 
                        value={update.name} 
                        onChange={(e) => {setUpdate({...update, "name": e.target.value})}} />
                    <textarea required rows="10" type="text" 
                        value={update.description} 
                        onChange={(e) => {setUpdate({...update, "description": e.target.value})}} />
                    <label htmlFor="actions">Actions</label>
                    <input name="actions" reqired type="number"
                        value={update.actions} 
                        onChange={(e) => {setUpdate({...update, "actions": e.target.value})}} ></input>
                    <div className="green-button" 
                        onClick={() => {updateItem("edit", "legendaryActions", selected, setSelected, [...selected.legendaryActions.filter(f => { return f.id !== update.id}), {...update}], panes, setPanes)}}>Save</div></>}
            
            {/* {console.log(type)} */}
        </>
    );
}

const CheckboxArray = ({ array, setMonster, selection, monster, listName }) => {
    const [ data, setData ] = useState()
    useEffect(() => {
        setData(selection)
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
            case "damageImmunity":
                data.includes(e.target.value) ?
                    setMonster({...monster, "damageImmunity": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "damageImmunity": [...data, e.target.value]})
                break
            case "conditionImmunity":
                data.includes(e.target.value) ?
                    setMonster({...monster, "conditionImmunity": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "conditionImmunity": [...data, e.target.value]})
                break
            case "senses":
                data.includes(e.target.value) ?
                    setMonster({...monster, "senses": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "senses": [...data, e.target.value]})
                break
            case "skills":
                data.includes(e.target.value) ?
                    setMonster({...monster, "skills": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "skills": [...data, e.target.value]})
                break
            case "saves":
                data.includes(e.target.value) ?
                    setMonster({...monster, "saves": [...data.filter(f => { return f !== e.target.value})]})
                    : setMonster({...monster, "saves": [...data, e.target.value]})
                break
        }
    }
    return (
        <>
            <div className="flex-checkboxes">
                {data && array.map((c) => (
                <div key={c} className="checkboxs">
                        <input
                            title={c}
                            style={{"cursor": "pointer"}}
                            type="checkbox" 
                            name={c} 
                            checked={data.includes(c)} 
                            value={c} 
                            onChange={(e) => checkHandler(e)} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}    
            </div>
        </>
    );
}

const TagItemArray = ({ array }) => {

    return (
        <>
        <div className="tag-array">
        {array && array.map((l) => (
            <div key={l} className="tag">
                <div className="language">{l}</div>
                <div className="delete">
                    <img 
                        src="https://cdn.onlinewebfonts.com/svg/img_304350.png" 
                        alt="delete" 
                        width="15px" 
                        className="close"
                        onClick={() => {window.alert(`deleted ${l}`)}} />
                </div>
            </div>
        ))}
        <div className="add" onClick={() => {window.alert(`add new item`)}}>Add</div>
        </div>
        </>
    );
}

const updateItem = (action, target, selected, setSelected, update, panes, setPanes) => {
    if (target === "trait") {
        setPanes({...panes, "editTrait": false, "addTrait": false})
    } else if (target ==="action") {
        setSelected({...selected, "actions": update})
        setPanes({...panes, "editAction": false, "addAction": false})
    } else if (target ==="legendary") {
        setSelected({...selected, "legendary": update})
        setPanes({...panes, "editLegendary": false, "addLegendary": false})
    }
}

const FormMonster = ({ formAction, monsters, monster, dbUpdate }) => {
    const { skillList, settings, monsterBook, addItem, editItem } = useContext(AppContext);
    const [ selected, setSelected ]                     = useState();
    const [ senses, setSenses ]                         = useState();
    const [ languages, setLanguages ]                   = useState();
    const [ skills, setSkills ]                         = useState();
    // const [ conditions, setConditions]                  = useState();
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
                                                            "editAction": false,
                                                            "addLegendary": false,
                                                            "editLegendary": false,
                                                            "addLegendaryActions": false,
                                                            "editLegendaryActions": false
                                                        });
    const [ item, setItem ]                             = useState(); // temporary state for miscelaneous item beingediting

    useEffect(() => {
        setSelected(monster)
      return () => {}
    }, [monster])

    useEffect(() => {
        // if (selected && selected.senses)                {setSenses(selected.senses)}
        if (selected && selected.languages)             {setLanguages(selected.languages)}
        if (selected && selected.skills)                {setSkills(selected.skills)}
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
    
    const minimiseAll = () => {
        const detailsPanes = Array.from(document.getElementsByTagName("details"));
        detailsPanes.forEach((pane) => (console.log(pane)))
        detailsPanes.forEach((pane) => (pane.open = false))
    }

    return (
        <>
            {selected && <div id="details">
                <div className="columns">
                    <div className="column">
                        <button onClick={() => {dbUpdate(selected)}}>Save</button>
                        <button onClick={() => {minimiseAll()}}>Minimise</button>
                        <article data="basic-details">
                            <details open>
                                <summary>Basic Details</summary>
                                <form>
                                <label htmlFor="name">Name:</label>
                                <input id="name"
                                    type="text"
                                    required
                                    placeholder="name"
                                    value={ selected.name } 
                                    onChange={(e) =>                {setSelected({...selected, "name": e.target.value})}} />
                                
                                <div className="flex-row">
                                    <label htmlFor="type">Size:</label>
                                    <select name="size" id="" value={selected.size} onChange={e => {console.log(e.target.value); setSelected({...selected, "size": e.target.value})}}>
                                        {sizes.map(o => (
                                            <option key={o} value={o}>{o}</option>
                                        ))}
                                    </select> 
                                    <label htmlFor="type">Type:</label>
                                    <select name="type" id="" value={selected.type} onChange={e => {console.log(e.target.value); setSelected({...selected, "type": e.target.value})}}>
                                        {types.map(o => (
                                            <option key={o} value={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>
                                <label htmlFor="descr">Description: </label>
                                <textarea id="descr"
                                    rows="10" 
                                    type="text" 
                                    placeholder="description" 
                                    value={ selected.description } 
                                    onChange={(e) =>                {setSelected({...selected, "description": e.target.value})}} />

                                <div className="flex-row">                                    
                                    <label htmlFor="ac">AC:</label>
                                    <input id="ac"
                                        type="number" 
                                        placeholder="ac"
                                        value={ selected.ac } 
                                        onChange={(e) =>            {setSelected({...selected, "ac": e.target.value})}} />
                                    <label htmlFor="profbonus">Proficiency Bonus: {calculateProficiencyBonus(selected.cr)}</label>

                                    
                                </div>
                                <div className="flex-row">
                                    <label htmlFor="dice">Hit Dice:</label>
                                    <input id="dice" type="number" placeholder="hp" value={ selected.hitDice.hdDice }
                                        onChange={(e) =>            {setSelected({...selected, "hitDice": {...selected.hitDice, "hdDice": e.target.value}})}} />

                                    <label htmlFor="hp"> d </label>
                                    <input id="hp" type="number" placeholder="hp" value={ selected.hitDice.hdSides }
                                        onChange={(e) =>            {setSelected({...selected, "hitDice": {...selected.hitDice, "hdSides": e.target.value}})}} />
                                    
                                    <label htmlFor="hp"> + </label>
                                    <input id="hp" type="number" placeholder="hp" value={ selected.hitDice.hdBonus }
                                        onChange={(e) =>            {setSelected({...selected, "hitDice": {...selected.hitDice, "hdBonus": e.target.value}})}} />
                                    <FaDiceSix color="green" style={{"width": "20ch", "height": "30px"}} 
                                        onClick={() => {setSelected({...selected, "hp": diceRoll(selected.hitDice.hdDice, selected.hitDice.hdSides, selected.hitDice.hdBonus)[2]})}}></FaDiceSix>
                                    <label htmlFor="hp">HP:</label>
                                    <input id="hp" type="number" placeholder="hp" value={ selected.hp }
                                        onChange={(e) =>            {setSelected({...selected, "hp": e.target.value})}} />

                                </div>
                                <div className="flex-row">
                                    <label htmlFor="speed">Speed:</label>
                                    <input id="speed" type="number" placeholder="speed" value={ selected.speed }
                                        onChange={(e) =>            {setSelected({...selected, "speed": e.target.value})}} />

                                    <label htmlFor="cr">Challenge:</label>
                                    <select name="cr" id="" value={selected.cr} onChange={e => {console.log(e.target.value); setSelected({...selected, "cr": e.target.value})}}>
                                        {crRange.map(o => (
                                            <option key={o} value={o}>{o}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="xp">XP:</label>
                                    <input id="xp" type="number" placeholder="xp" value={ selected.xp }
                                        onChange={(e) =>            {setSelected({...selected, "xp": e.target.value})}} />
                                </div>
                                <CheckboxArray array={sensesList} monster={selected} selection={selected.senses} listName="senses" setMonster={setSelected}></CheckboxArray>                    

                                </form>
                            </details>
                        </article>
            
                        <article data="stats">
                            <details>
                                <summary>Abilities</summary>
                                <form className="flex-row">
                                <div className="ability-box">
                                    <label>Str</label>                                                                   
                                    <input placeholder="str" type="number" value={ selected.str }                            
                                        onChange={(e) =>            {setSelected({...selected, "str": e.target.value})}} />
                                    <p>{selected.str > 11 ? `+ ${abilityModifier(selected.str)}` : abilityModifier(selected.str)}</p>
                                </div>
                                <div className="ability-box">
                                    <label>Dex</label>                                                                   
                                    <input placeholder="dex" type="number" value={ selected.dex }
                                        onChange={(e) =>            {setSelected({...selected, "dex": e.target.value})}} />
                                    <p>{selected.dex > 11 ? `+ ${abilityModifier(selected.dex)}` : abilityModifier(selected.dex)}</p>

                                </div>
                                <div className="ability-box">
                                    <label>Con</label>                                                                   
                                    <input placeholder="con" type="number" value={ selected.con }                            
                                        onChange={(e) =>            {setSelected({...selected, "con": e.target.value})}} />
                                    <p>{selected.con > 11 ? `+ ${abilityModifier(selected.con)}` : abilityModifier(selected.con)}</p>
                                </div>
                                <div className="ability-box">
                                    <label>Int</label>                                                                   
                                    <input placeholder="int" type="number" value={ selected.int }                            
                                        onChange={(e) =>            {setSelected({...selected, "int": e.target.value})}} />
                                    <p>{selected.int > 11 ? `+ ${abilityModifier(selected.int)}` : abilityModifier(selected.int)}</p>
                                </div>
                                <div className="ability-box">
                                    <label>Wis</label>                                                                   
                                    <input placeholder="wis" type="number" value={ selected.wis }                            
                                        onChange={(e) =>            {setSelected({...selected, "wis": e.target.value})}} />
                                    <p>{selected.wis > 11 ? `+ ${abilityModifier(selected.wis)}` : abilityModifier(selected.wis)}</p>
                                </div>
                                <div className="ability-box">
                                    <label>Char</label>                                                                   
                                    <input placeholder="cha" type="number" value={ selected.cha }                            
                                        onChange={(e) =>            {setSelected({...selected, "cha": e.target.value})}} />
                                    <p>{selected.cha > 11 ? `+ ${abilityModifier(selected.cha)}` : abilityModifier(selected.cha)}</p>
                                </div>
                            </form>
                            </details>
                        </article>

                        <article data="languages">
                            <details>
                                <summary>Languages, Skills & Saves</summary>
                                <p>Languages</p>
                                <form><TagItemArray array={languages}></TagItemArray></form>
                                <hr/>
                                <p>Skills</p>
                                <form><CheckboxArray array={skillList} monster={selected} selection={selected.skills} listName="skills" setMonster={setSelected}></CheckboxArray></form>
                                <hr/>
                                <p>Saves</p>
                                <form><CheckboxArray array={abilityList} monster={selected} selection={selected.saves} listName="saves" setMonster={setSelected}></CheckboxArray></form>
                                {/* <TagItemArray array={skills}></TagItemArray> */}
                            </details>
                        </article>

                        <article data="vulnerability">
                            <details>
                                <summary>Vulnerabilities ({vulnerabilities && vulnerabilities.length})</summary>
                                <form><CheckboxArray array={damageTypes} monster={selected} selection={selected.vulnerabilities} listName="vulnerabilities" setMonster={setSelected}></CheckboxArray></form>                 
                            </details>
                        </article>

                        <article data="resistances">
                            <details>
                                <summary>Resistances ({resistances && resistances.length})</summary>
                                <form><CheckboxArray array={damageTypes} monster={selected} selection={selected.resistances} listName="resistances" setMonster={setSelected}></CheckboxArray></form>
                            </details>
                        </article>

                        <article data="damage-immunity">
                            <details>
                                <summary>Damage Immunity ({damageImmunity && damageImmunity.length})</summary>
                                <form><CheckboxArray array={damageTypes} monster={selected} selection={selected.damageImmunity} listName="damageImmunity" setMonster={setSelected}></CheckboxArray></form>
                            </details>
                        </article>

                        <article data="condition-immunity">
                            <details>
                                <summary>Condition Immunity ({conditionImmunity && conditionImmunity.length})</summary>
                                <form><CheckboxArray array={conditions} monster={selected} selection={selected.conditionImmunity} listName="conditionImmunity" setMonster={setSelected}></CheckboxArray></form>
                            </details>
                        </article>
                        
                        <article id="conditions">
                            <details>
                                <summary>Conditions ({conditions && selected.conditions.length})</summary>
                                <form><CheckboxArray array={conditions} monster={selected} selection={selected.conditions} listName="conditions" setMonster={setSelected}></CheckboxArray></form>
                            </details>
                        </article>

                        {senses && <p>{senses}</p>}
                    </div>
                    <div className="column"> 
                        <article data="traits">
                            <details id="traits">
                                <summary>Traits ({traits && traits.length})
                                    {(panes.addTrait === false && panes.editTrait === false) ?
                                    <MdOutlineNoteAdd 
                                        color="white"
                                        size="2ch"
                                        style={{"float": "right", "cursor": "pointer", "width": "5ch"}}                                        
                                        onClick={() => {
                                            setItem({"id": uuidv4()}, 
                                            setPanes({...panes, "addTrait": true})); 
                                            document.getElementById("traits").open = ""}}>Add New</MdOutlineNoteAdd>
                                    : <MdOutlineChevronLeft
                                        color="white"
                                        size="2ch"
                                        style={{"float": "right", "cursor": "pointer"}}
                                        onClick={() => {
                                            setItem({"id": uuidv4()}, 
                                            setPanes({...panes, "addTrait": false, "editTrait":false})); 
                                            document.getElementById("traits").open = ""}}>Cancel</MdOutlineChevronLeft>}
                                </summary>
                                {panes.addTrait === true && 
                                <EditListItem 
                                    item={{"id": uuidv4(), "name": "", "description":""}} 
                                    type="trait"
                                    selected={selected}
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {panes.editTrait === true && 
                                <EditListItem 
                                    item={item}
                                    type="trait"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {traits && (panes.addTrait === false && panes.editTrait === false) && selected.traits
                                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                                .map((t) => (
                                    <div
                                        key={t.id}
                                        className="flex-row">
                                        
                                        <div
                                            className="description" 
                                            style={{"cursor": "pointer"}} 
                                                    onClick={() => {setItem(t); setPanes({...panes, "editTrait": true, })}}>
                                                    
                                                    
                                                <strong>{t.name}:</strong> {t.description}
                                        </div>

                                        {/* Delete button */}
                                        <MdRemoveCircle title="remove" color="red" style={{"float": "right", "cursor": "pointer"}} onClick={() => {
                                            setSelected({...selected, "traits": [...traits.filter((i) => { return i.id !== t.id })]})
                                        }}>
                                            Delete</MdRemoveCircle>
                                    </div>
                                ))
                            }
                            {selected.traits.length === 0 && <em>Nothing here. Use the button in the header to add a trait.</em>}
                            </details>
                        </article>

                        <article data="actions">
                            <details id="actions">
                                <summary>Actions ({actions && actions.length})
                                {(panes.addAction === false && panes.editAction === false) ?
                                <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="green-button"
                                    onClick={() => {
                                        setItem({"id": uuidv4(),"name": "", "description": "", "attack": "", "damage": {bonus: "", sides: "", dice: "", type: ""}}, 
                                        setPanes({...panes, "addAction": true})); 
                                        document.getElementById("actions").open = false}}>Add New</div>
                                : <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="blue-button"
                                    onClick={() => {
                                        document.getElementById("actions").open = false; // this keeps the details open. Why open = false does this, I don't know!
                                        setItem({"id": uuidv4(),"name": "", "description": "", "attack": "", "damage": {bonus: "", sides: "", dice: "", type: ""}}, 
                                        setPanes({...panes, "addAction": false, "editAction":false}))}}>Cancel</div>}
                                </summary>

                                {panes.addAction === true && 
                                <EditListItem 
                                    item={{"id": uuidv4(),"name": "", "description": "", "attack": "", "damage": {bonus: "", sides: "", dice: "", type: ""}}}
                                    type="action"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {panes.editAction === true && 
                                <EditListItem 
                                    item={item}
                                    type="action"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {actions && (panes.addAction === false && panes.editAction === false) && selected.actions
                                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                                .map((a) => (
                                    <div
                                        key={a.id}
                                        className="flex-row">
                                        
                                        <div
                                            className="description" 
                                            style={{"cursor": "pointer"}} 
                                            onClick={(e) => {setItem(a); setPanes({...panes, "editAction": true, })}}>
                                                <strong>{a.name}:</strong> {a.description}
                                        </div>

                                        {/* Delete button */}
                                        <MdRemoveCircle title="remove" color="red" style={{"float": "right", "cursor": "pointer"}} onClick={() => {
                                            setSelected({...selected, "actions": [...actions.filter((i) => { return i.id !== a.id })]})
                                        }}>
                                            Delete</MdRemoveCircle>
                                    </div>
                                ))
                                }
                            {selected.actions.length === 0 && <em>Nothing here. Use the button in the header to add an action.</em>}
                            </details>
                        </article>
                        
                        <article>
                            <details id="legendary">
                                <summary>Legendary ({legendary && legendary.length})
                                {(panes.addLegendary === false && panes.editLegendary === false) ?
                                <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="green-button"
                                    onClick={() => {
                                        setItem({"id": uuidv4(),"name": "", "description": ""}, 
                                        setPanes({...panes, "addLegendary": true})); 
                                        document.getElementById("legendary").open = ""}}>Add New</div>
                                : <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="blue-button"
                                    onClick={() => {
                                        setItem({}, 
                                        setPanes({...panes, "addLegendary": false, "editLegendary":false}))}}>Cancel</div>}
                                </summary>

                                {panes.addLegendary === true && 
                                <EditListItem 
                                    item={{"id": uuidv4(),"name": "", "description": ""}}
                                    type="legendary"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {panes.editLegendary === true && 
                                <EditListItem 
                                    item={item}
                                    type="legendary"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {legendary && (panes.addLegendary === false && panes.editLegendary === false) && selected.legendary
                                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                                .map((l) => (
                                    <div
                                        key={l.id}
                                        className="flex-row">
                                        
                                        <div
                                            className="description" 
                                            style={{"cursor": "pointer"}} 
                                            onClick={(e) => {setItem(l); setPanes({...panes, "editLegendary": true, })}}>
                                                <strong>{l.name}:</strong> {l.description}
                                        </div>

                                        {/* Delete button */}
                                        <MdRemoveCircle title="remove" color="red" style={{"float": "right", "cursor": "pointer"}} onClick={() => {console.log(legendary);
                                            setSelected({...selected, "legendary": [...legendary.filter((i) => {return i.id !== l.id})]})
                                        }}>
                                            Delete</MdRemoveCircle>
                                    </div>
                                ))
                                }
                            {selected.legendary.length === 0 && <em>Nothing here. Use the button in the header to add legendary details.</em>}
                            </details>
                        </article>

                        <article>
                            <details id="legendaryActions">
                                <summary>Legendary ({legendaryActions && legendaryActions.length})
                                {(panes.addLegendaryActions === false && panes.editLegendaryActions === false) ?
                                <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="green-button"
                                    onClick={() => {
                                        setItem({"id": uuidv4(),"name": "", "description": ""}, 
                                        setPanes({...panes, "addLegendaryActions": true})); 
                                        document.getElementById("legendary").open = ""}}>Add New</div>
                                : <div
                                    style={{"float": "right", "cursor": "pointer"}}
                                    className="blue-button"
                                    onClick={() => {
                                        setItem({}, 
                                        setPanes({...panes, "addLegendaryActions": false, "editLegendaryActions":false}))}}>Cancel</div>}
                                </summary>

                                {panes.addLegendaryActions === true && 
                                <EditListItem 
                                    item={{"id": uuidv4(),"name": "", "description": ""}}
                                    type="legendaryActions"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {panes.editLegendary === true && 
                                <EditListItem 
                                    item={item}
                                    type="legendaryActions"
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    panes={panes} 
                                    setPanes={setPanes}>
                                </EditListItem>}

                                {legendaryActions && (panes.addLegendaryActions === false && panes.editLegendaryActions === false) && selected.legendaryActions
                                .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                                .map((l) => (
                                    <div
                                        key={l.id}
                                        className="flex-row">
                                        
                                        <div
                                            className="description" 
                                            style={{"cursor": "pointer"}} 
                                            onClick={(e) => {setItem(l); setPanes({...panes, "editLegendaryActions": true, })}}>
                                                <strong>{l.name}:</strong> {l.description}
                                        </div>

                                        {/* Delete button */}
                                        <MdRemoveCircle title="remove" color="red" style={{"float": "right", "cursor": "pointer"}} onClick={() => {console.log(legendary);
                                            setSelected({...selected, "legendaryActions": [...legendaryActions.filter((i) => {return i.id !== l.id})]})
                                        }}>
                                            Delete</MdRemoveCircle>
                                    </div>
                                ))
                                }
                            {selected.legendaryActions.length === 0 && <em>Nothing here. Use the button in the header to add legendary actions.</em>}
                            </details>
                        </article>
                    </div>
                </div>
            </div>}
        </>
    );
}
 
export default FormMonster;
export { CheckboxArray }
