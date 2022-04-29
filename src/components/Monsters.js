import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

import { firestore as db } from '../Firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

import { truncate } from "../utils";
import { FaEdit, FaWindowClose, FaDiceSix } from 'react-icons/fa';
import { monsterTemplate, sizes, types, crRange, sensesList, damageTypes, conditions, languagesList, abilityList, skillList } from "../Forms";
import { diceRoll, abilityModifier, crToXp } from "../Maths";

import Nav from "./Nav";
import Toolbar from "./Toolbar";

const Monsters = () => {
    const { settings } = useContext(AppContext);
    const [ monsters, setMonsters ] = useState();
    const [ modal, setModal ] = useState({on: false, view: ""});
    const [ selected, setSelected ] = useState();

    useEffect(() => {
        const collectionRef= collection(db, "monsters")
        // filter and sort here
        const q = query(collectionRef, orderBy("name", "asc"))
        const unsub = onSnapshot(q, (snapshot) => {
          setMonsters(
            snapshot.docs.map(
              doc => (({...doc.data(), id: doc.id}))
            )
          )
        })
        return unsub
      }, [])

    const editMonster = (monster) => {
        if (monster.id) {console.log(`edit monster ${monster}`)}
        else if (!monster.id) {console.log(`add monster ${monster}`)}
         
    }

    const deleteMonster = (monster) => {
        console.log(monster)
    }

    return (
        <>
        {settings.list.toolbarOpen && <Toolbar></Toolbar>}
        <Nav location="monsters"></Nav>

        <main>
            {/* modal window */}
            {modal.on && <div id="modal-window" class="modal">
                {/* Modal content */}
                    <div class="modal-content">
                        <span class="close" onClick={() => {setModal({"on": false, "type": ""})}}>&times;</span>
                        {modal.view === "edit" &&
                        <>
                        <MonsterForm selected={selected} setSelected={setSelected} update={editMonster}></MonsterForm>
                        </>}
                        {modal.view === "view" &&
                        <>
                        <MonsterView monster={selected}></MonsterView>
                        </>}
                    </div>
                </div>}

            <section>
                <div className="one-column">
                    <h2>Monsters</h2>
                    <MonsterList monsters={monsters} addMonster={editMonster} deleteMonster={deleteMonster} setSelected={setSelected} setModal={setModal}></MonsterList>
                </div>
            </section>
        </main>
        </>
    );
}

const MonsterList = ({ monsters, addMonster, deleteMonster, setSelected, setModal }) => {
    return (
        <>
        {<button className="green" onClick={() => {setSelected(monsterTemplate); setModal({on:true, view: "edit"})}}>New Monster</button>}

        {monsters && monsters.map(monster => (
            <div key={monster.id} className="list-item">
                <div key={monster.id} style={{"cursor": "pointer"}} onClick={() => {setSelected(monster); setModal({on:true, view: "view"})}}>
                    <div className="link">
                            <h2>{monster.name}</h2>
                            <em>{truncate(monster.description, 50)}</em>
                    </div>
                </div>
                <div>
                    <FaWindowClose 
                        style={{"cursor": "pointer"}} 
                        color="red"
                        onClick={() => {deleteMonster("delete monster")}} />

                    <FaEdit
                        style={{"cursor": "pointer"}} 
                        color="grey"
                        onClick={() => {setSelected(monster); setModal({on:true, view: "edit"})}} />

                </div>
            </div>
        ))}
        </>
    );
}

const MonsterView = ({ monster }) => {
    return (
        <>
        <h2>Monster View</h2>
        {monster && <h3>{monster.name}</h3>}
        </>
    );
}

const MonsterForm = ({ selected, setSelected, update}) => {
    return (
        <>
        {selected &&<form onSubmit={(e) => {e.preventDefault(); update(selected)}}>
        <div className="flex-row">
            <h2>Monster Form</h2>
            <button className="green" type="submit">Submit</button>
        </div>

            <label htmlFor="name">Name:</label>
            <input id="name" type="text" required placeholder="name"
                value={ selected.name } 
                onChange={(e) => {setSelected({...selected, "name": e.target.value})}} />

            <div className="flex-row">

                <label htmlFor="type">Size:</label>
                <select name="size" id="size" value={selected.size} onChange={e => {setSelected({...selected, "size": e.target.value})}}>
                    {sizes.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>

                <label htmlFor="type">Type:</label>
                <select name="type" id="" value={selected.type} onChange={e => {setSelected({...selected, "type": e.target.value})}}>
                    {types.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>

                <label htmlFor="ac">AC:</label>
                <input id="ac" type="number" placeholder="ac" required
                    value={ selected.ac } 
                    onChange={(e) => {setSelected({...selected, "ac": e.target.value})}} />            
            </div>

            <label htmlFor="descr">Description: </label>
            <textarea id="descr" rows="10" type="text" placeholder="description" 
                value={ selected.description } 
                onChange={(e) => {setSelected({...selected, "description": e.target.value})}} />

            {selected && selected.hitDice && 
            <div className="flex-row">
                <label htmlFor="dice">Hit Dice:</label>
                <input id="dice" type="number" placeholder="dice" required
                    value={ selected.hitDice.hdDice }
                    onChange={(e) => {setSelected({...selected, "hitDice": {...selected.hitDice, "hdDice": e.target.value}})}} />

                <label htmlFor="sides"> d </label>
                <input id="sides" type="number" placeholder="sides" required
                    value={ selected.hitDice.hdSides }
                    onChange={(e) => {setSelected({...selected, "hitDice": {...selected.hitDice, "hdSides": e.target.value}})}} />
                
                <label htmlFor="bonus"> + </label>
                <input id="bonus" type="number" placeholder="bonus" required 
                    value={ selected.hitDice.hdBonus }
                    onChange={(e) =>            {setSelected({...selected, "hitDice": {...selected.hitDice, "hdBonus": e.target.value}})}} />
                
                
                <FaDiceSix className="tooltip" title="Roll hitpoints" color="green" style={{"width": "20ch", "height": "30px"}} 
                    onClick={() => {setSelected({...selected, "maxHp": diceRoll(selected.hitDice.hdDice, selected.hitDice.hdSides, selected.hitDice.hdBonus)[2]})}}></FaDiceSix>
                <label htmlFor="hp">HP:</label>
                <input id="maxHp" type="number" placeholder="HP" required
                    value={ selected.maxHp }
                    onChange={(e) => {setSelected({...selected, "maxHp": e.target.value})}} />
            </div>}

            <div className="flex-row">
                <label htmlFor="speed">Speed:</label>
                <input id="speed" type="number" placeholder="speed" required
                    value={ selected.speed }
                    onChange={(e) => {setSelected({...selected, "speed": e.target.value})}} />

                <label htmlFor="cr">Challenge:</label>
                <select name="cr" id="" 
                    value={selected.cr} 
                    onChange={e => {setSelected({...selected, cr: e.target.value, xp: crToXp(e.target.value)}); }}>
                    {crRange.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>

                <label htmlFor="xp">XP:</label>
                <input id="xp" type="number" placeholder="xp" required
                    value={ selected.xp }
                    onChange={(e) => {setSelected({...selected, "xp": e.target.value})}} />
            </div>

            <div className="flex-checkboxes">
                {sensesList.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.senses.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.senses.includes(e.target.value) ?
                                setSelected({...selected, "senses": [...selected.senses.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "senses": [...selected.senses, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>

            <div className="flex-row">
                <div className="ability-box">
                    <label>Str</label>                                                                   
                    <input placeholder="str" type="number" required
                        value={ selected.str }                            
                        onChange={(e) => {setSelected({...selected, "str": e.target.value})}} />
                    <p>{selected.str > 11 ? `+ ${abilityModifier(selected.str)}` : abilityModifier(selected.str)}</p>
                </div>

                <div className="ability-box">
                    <label>Dex</label>                                                                   
                    <input placeholder="dex" type="number" required
                        value={ selected.dex }
                        onChange={(e) => {setSelected({...selected, "dex": e.target.value})}} />
                    <p>{selected.dex > 11 ? `+ ${abilityModifier(selected.dex)}` : abilityModifier(selected.dex)}</p>
                </div>

                <div className="ability-box">
                    <label>Con</label>                                                                   
                    <input placeholder="con" type="number" required
                        value={ selected.con }                            
                        onChange={(e) => {setSelected({...selected, "con": e.target.value})}} />
                    <p>{selected.con > 11 ? `+ ${abilityModifier(selected.con)}` : abilityModifier(selected.con)}</p>
                </div>

                <div className="ability-box">
                    <label>Int</label>                                                                   
                    <input placeholder="int" type="number" required
                        value={ selected.int }                            
                        onChange={(e) => {setSelected({...selected, "int": e.target.value})}} />
                    <p>{selected.int > 11 ? `+ ${abilityModifier(selected.int)}` : abilityModifier(selected.int)}</p>
                </div>

                <div className="ability-box">
                    <label>Wis</label>                                                                   
                    <input placeholder="wis" type="number" required
                        value={ selected.wis }                            
                        onChange={(e) => {setSelected({...selected, "wis": e.target.value})}} />
                    <p>{selected.wis > 11 ? `+ ${abilityModifier(selected.wis)}` : abilityModifier(selected.wis)}</p>
                </div>

                <div className="ability-box">
                    <label>Char</label>                                                                   
                    <input placeholder="cha" type="number" required
                        value={ selected.cha }                            
                        onChange={(e) => {setSelected({...selected, "cha": e.target.value})}} />
                    <p>{selected.cha > 11 ? `+ ${abilityModifier(selected.cha)}` : abilityModifier(selected.cha)}</p>
                </div>
            </div>

            <hr/><h2>Saves</h2><br />
            <div className="flex-checkboxes">
                {abilityList.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.saves.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.saves.includes(e.target.value) ?
                                setSelected({...selected, "saves": [...selected.saves.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "saves": [...selected.saves, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>

            <hr/><h2>Languages</h2><br />
            <div className="flex-checkboxes">
                {languagesList.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.languages.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.languages.includes(e.target.value) ?
                                setSelected({...selected, "languages": [...selected.languages.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "languages": [...selected.languages, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>

            <hr/><h2>Skils</h2><br />
            <div className="flex-checkboxes">
                {skillList.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.skills.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.skills.includes(e.target.value) ?
                                setSelected({...selected, "skills": [...selected.skills.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "skills": [...selected.skills, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>
            
            <hr/><h2>Vulnerabilities</h2><br />
            <div className="flex-checkboxes">
                {damageTypes.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.vulnerabilities.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.vulnerabilities.includes(e.target.value) ?
                                setSelected({...selected, "vulnerabilities": [...selected.vulnerabilities.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "vulnerabilities": [...selected.vulnerabilities, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>

            <hr/><h2>Resistances</h2><br />
            <div className="flex-checkboxes">
                {damageTypes.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.resistances.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.resistances.includes(e.target.value) ?
                                setSelected({...selected, "resistances": [...selected.resistances.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "resistances": [...selected.resistances, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>

            <hr/><h2>Immuities</h2><br />
            <div className="flex-checkboxes">
                {damageTypes.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.damageImmunity.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.damageImmunity.includes(e.target.value) ?
                                setSelected({...selected, "damageImmunity": [...selected.damageImmunity.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "damageImmunity": [...selected.damageImmunity, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>
            <br />
            <div className="flex-checkboxes">
                {conditions.map((c) => (
                <div key={c} className="checkboxs">
                        <input title={c} style={{"cursor": "pointer"}} type="checkbox" name={c} 
                            checked={selected.conditionImmunity.includes(c)} 
                            value={c} 
                            onChange={(e) => {selected.conditionImmunity.includes(e.target.value) ?
                                setSelected({...selected, "conditionImmunity": [...selected.conditionImmunity.filter(f => { return f !== e.target.value})]})
                                : setSelected({...selected, "conditionImmunity": [...selected.conditionImmunity, e.target.value]})}} />
                        <label htmlFor={c}>{c}</label>
                </div>
                ))}
            </div>
        </form>}
        </>
    );
}
export default Monsters;
export { MonsterList, MonsterView, MonsterForm }