import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

import { firestore as db } from '../Firebase'
import { onSnapshot, collection, query, orderBy, serverTimestamp, addDoc, writeBatch, doc, limit, where, startAfter, endBefore, getDocs, getDoc } from 'firebase/firestore';
import { handleNew, handleDelete } from "../firebaseData";

import { truncate,importMonster } from "../utils";
import { FaEdit, FaWindowClose, FaDiceSix } from 'react-icons/fa';
import { monsterTemplate, sizes, types, crRange, sensesList, damageTypes, conditions, languagesList, abilityList, skillList } from "../Forms";
import monsterManual from "../MonsterImport";
import { diceRoll, abilityModifier, crToXp } from "../Maths";
import { v4 as uuidv4 } from 'uuid';

import Nav from "./Nav";
import Toolbar from "./Toolbar";
// import uuid4 from "uuid4";

const Monsters = () => {
    const { settings } = useContext(AppContext);
    const [ monsters, setMonsters ] = useState();
    const [ modal, setModal ] = useState({on: false, view: ""});
    const [ selected, setSelected ] = useState();

      const importMonsterManual = async (file) => {
          monsterManual.forEach(monster => {
              console.log(importMonster(monster))
          })

        const batch = writeBatch(db);
        const collectionRef = collection(db, "monsters") 
        monsterManual.forEach(monster => {
            console.log(importMonster(monster).traits)
            const payload = {...importMonster(monster), enemy: "monster", created: serverTimestamp(), modified: serverTimestamp()}
            const id = uuidv4()
            console.log(id)
            console.log(payload)
            batch.set(doc(collectionRef, id), payload)
        })
        await batch.commit();        
    }

    const uploadMonster = async (monster) => {
        console.log(`uploading monster...`)
        console.log(monster)
        const collectionRef = collection(db, "monsters")
        if (!monster.id) {
            console.log(`monster id not found, add as new`)
            console.log(monster)
            const now = serverTimestamp()
            console.log(now)
            const payload = {...monster, created: serverTimestamp(), modified: serverTimestamp()}
            console.log(payload)
            const docRef = await addDoc(collectionRef, payload)
            console.log(docRef.id)
        }
        setModal({on: false, type: ""})
    }

    const addMonster = (monster) => {
        console.log(monster)
    }

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
                    
                    <MonsterList importMonsterManual={importMonsterManual} monsters={monsters} addMonster={editMonster} deleteMonster={deleteMonster} setSelected={setSelected} setModal={setModal}></MonsterList>
                </div>
            </section>
        </main>
        </>
    );
}

const MonsterList = ({ addMonster, deleteMonster, setSelected, setModal, importMonsterManual }) => {
    const [ monsters, setMonsters ] = useState();
    const [ monsterQuery, setMonsterQuery ] = useState(
        {
            search: "Tarra",
            minCR: 0,
            maxCR: 30,
            type: "",
            itemsPerPage: 10,
            lastItem: 1,
            offset: 1
        }
    )
    
    const [ q, setQ ] = useState(query(collection(db, "monsters"), limit(monsterQuery.itemsPerPage), orderBy("name", "asc")))
    const [ firstItem, setFirstItem ] = useState()
    const [ lastItem, setLastItem ] = useState()

    useEffect(() => {
        console.log(q)
        console.log(monsterQuery)
        console.log(monsterQuery.minCR)

        const collectionRef= collection(db, "monsters")
        // filter and sort here
        console.log("filter updated")

        // const q = query(collectionRef, where("type", "==", "monstrosity"), where("cr", ">", monsterQuery.minCR), limit(monsterQuery.itemsPerPage))
        // const q = query(collectionRef, where("name", ">=", monsterQuery.search), where("name", "<=", monsterQuery.search + "\uf8ff"))
        

        const unsub = onSnapshot(q, (snapshot) => {
            console.log("firestore queried")
            setMonsters(
                snapshot.docs.map(
                doc => (({...doc.data(), id: doc.id}))
                )
            )
            setFirstItem("")
        })

        return unsub
      }, [q, monsterQuery])

    const next = async () => {
        const docs = await getDocs(q)
        const lastDoc = docs.docs[docs.docs.length -1]
        const newQuery = query(
            collection(db, "monsters"), 
            limit(monsterQuery.itemsPerPage),
            orderBy("name", "asc"),
            startAfter(lastDoc))

        const newDocs = await getDocs(newQuery)
        if (newDocs.docs.length > 0) {
            setQ(query(
                collection(db, "monsters"), 
                limit(monsterQuery.itemsPerPage),
                orderBy("name", "asc"),
                startAfter(lastDoc)))

        } else console.log("no new docs")
    }

    const prev = async () => {
        const docs = await getDocs(q)
        const firstDoc = docs.docs[0]
        const newQuery = query(
            collection(db, "monsters"), 
            limit(monsterQuery.itemsPerPage),
            orderBy("name", "asc"),
            endBefore(firstDoc))

        const newDocs = await getDocs(newQuery)
        if (newDocs.docs.length > 0) {
            setQ(query(
                collection(db, "monsters"), 
                limit(monsterQuery.itemsPerPage),
                orderBy("name", "asc"),
                endBefore(firstDoc)))

        } else console.log("no new docs")
    }


      

    return (
        <>
        <div className="flex-row">
            {/* <h2>Monsters</h2> */}
            <button disabled onClick={() => {importMonsterManual()}}>Import Disabled</button>
            {<button className="green" onClick={() => {setSelected(monsterTemplate); setModal({on:true, view: "edit"})}}>New Monster</button>}
        </div>
        <details>
            <summary>Filter & Search</summary>
            <input type="text" placeholder="search"></input>
            <div className="flex-row">
                <select value={monsterQuery.minCR} onChange={(e) => {setMonsterQuery({...monsterQuery, minCR: parseInt(e.target.value)})}}>
                    {crRange.map(cr => (
                        <option key={cr} value={cr}>{cr}</option>
                    ))}
                </select>
                <select value={monsterQuery.maxCR} onChange={(e) => {setMonsterQuery({...monsterQuery, maxCR: parseInt(e.target.value)})}}>
                    {crRange.map(cr => (
                        <option key={cr} value={cr}>{cr}</option>
                    ))}
                </select>

            </div>
        </details>
        {monsters && monsters.map(monster => (
            <div key={monster.id} className="list-item">
                <div key={monster.id} style={{"cursor": "pointer"}} onClick={() => {setSelected(monster); setModal({on:true, view: "view"})}}>
                    <div className="link">
                            <h2>{monster.name}</h2>
                            <p><strong>CR: {monster.cr} - </strong></p><em>{monster.size} {monster.type}</em>
                    </div>
                </div>
                <div>
                    <FaWindowClose 
                        style={{"cursor": "pointer"}} 
                        color="red"
                        onClick={() => {handleDelete("monsters", monster.id)}} />

                    <FaEdit
                        style={{"cursor": "pointer"}} 
                        color="grey"
                        onClick={() => {setSelected(monster); setModal({on:true, view: "edit"})}} />

                </div>
            </div>
        ))}
        <div className="flex-row">
            <button className="blue" onClick={() => {prev()}}>Prev</button>
            <button className="blue" onClick={() => {next()}}>Next</button>
        </div>
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
    const [ modal, setModal ] = useState({on: false, view: ""})
    const [ item, setItem ] = useState();
    const [ tabs, setTabs ] = useState("details");
    
    const editTrait = () => {
        console.log("edit trait")
    }
    
    const editAction = () => {
        console.log("edit action")
    }

    const editLegendary = () => {
        console.log("edit legendary")
    }

    return (
        <>
        {/* modal window */}
        {modal.on && <div id="modal-window" class="modal">
                {/* Modal content */}
                    <div class="modal-content">
                        <span class="close" onClick={() => {setModal({"on": false, "type": ""}); setItem({})}}>&times;</span>

                        {modal.view === "trait" &&
                        <>
                        <h2>Trait Form</h2>
                        <input type="text" value={item.name}></input>
                        <textarea rows="10" type="text" value={item.description}></textarea>
                        </>}

                        {modal.view === "action" &&
                        <>
                        <h2>Action Form</h2>
                        <input type="text" value={item.name}></input>
                        <textarea rows="6" value={item.description}></textarea>

                        {item.damage1 && 
                        <div className="flex-row">
                            <input type="number" value={item.damage1.hdDice}></input>
                            <input type="number" value={item.damage1.hdSides}></input>
                            <input type="number" value={item.damage1.hdBonus}></input>
                            <select value={item.damage1.type}>
                                {["none", ...damageTypes].map(type => (
                                    <option value={type}>{type}</option>
                                ))}
                            </select>
                        </div>}

                        {item.damage2 && 
                        <div className="flex-row">
                            <input type="number" value={item.damage2.hdDice}></input>
                            <input type="number" value={item.damage2.hdSides}></input>
                            <input type="number" value={item.damage2.hdBonus}></input>
                            <select value={item.damage2.type}>
                                {["none", ...damageTypes].map(type => (
                                    <option value={type}>{type}</option>
                                ))}
                            </select>
                        </div>}

                        {item.damage3 && 
                        <div className="flex-row">
                            <input type="number" value={item.damage3.hdDice}></input>
                            <input type="number" value={item.damage3.hdSides}></input>
                            <input type="number" value={item.damage3.hdBonus}></input>
                            <select value={item.damage3.type}>
                                {["none", ...damageTypes].map(type => (
                                    <option value={type}>{type}</option>
                                ))}
                            </select>
                        </div>}

                        </>}

                        {modal.view === "legendary" &&
                        <>
                        <h2>Legendary Form</h2>
                        <input type="text" value={item.name}></input>
                        <textarea type="text" rows={10} value={item.text}></textarea>
                        <input type="number" value={item.cost}></input>
                        <input type="number" value={item.actions}></input>
                        </>}
                    </div>
                </div>}
        
        {selected &&<form onSubmit={(e) => {e.preventDefault(); update(selected)}}>
        <div className="flex-row">
            {/* <h2>Monster Form</h2> */}
            <button className="green" type="submit">Save</button>
        </div>
        
        <div id="tabs" className="flex-row">
            <button className="tab" style={tabs === "details" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("details")}}>Details</button>
            <button className="tab" style={tabs === "skills" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("skills")}}>skills</button>
            <button className="tab" style={tabs === "resist" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("resist")}}>resistance</button>
            <button className="tab" style={tabs === "actions" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("actions")}}>actions</button>
            <button className="tab" style={tabs === "legend" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("legend")}}>legendary</button>
            <button className="tab" style={tabs === "traits" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("traits")}}>traits</button>

        </div>

        <div style={tabs === "details" ? {display: "block"} : {display: "none"}}>
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

        </div>
        
        <div style={tabs === "skills" ? {display: "block"} : {display: "none"}}>
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

            <hr/><h2>Skills</h2><br />
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
        </div>

        <div style={tabs === "resist" ? {display: "block"} : {display: "none"}}>
            <div className="list-columns">

            
            <div style={{padding: "0.5ch", backgroundColor: "white", boxShadow: "0 0 5px grey"}}>
                <h2 style={{padding: "0.5ch"}}>Vulnerabilities</h2>
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
            </div>

            <div style={{padding: "0.5ch", backgroundColor: "white", boxShadow: "0 0 5px grey"}}>
                <h2 style={{paddingBottom: "2ch"}}>Resistances</h2>
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
            </div>

            <div style={{padding: "0.5ch", backgroundColor: "white", boxShadow: "0 0 5px grey"}}>

                <h2>Immuities</h2>
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
            </div>

            <div style={{padding: "0.5ch", backgroundColor: "white", boxShadow: "0 0 5px grey"}}>
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
            </div>
                
</div>
        </div>

        
        <div style={tabs === "actions" ? {display: "block"} : {display: "none"}}>
            {/* actions */}
            {selected.actions && <div id="actions" className="list-columns">
                {selected.actions.map((action, i) => (
                    <div className="flex-row" key={i}>
                        <div className="list-item" style={{textAlign: "left", width: "100%"}}>
                            <div className="flex-row" style={{cursor: "pointer", width: "100%"}} onClick={() => {setItem(action); setModal({on: true, view: "action"})}}>
                                {action.name && <h2 style={{display: "inline-block", paddingRight: "1ch", width: "15ch", textAlign: "left"}}>{action.name}: </h2>}
                                {action.description && <p style={{display: "inline-block", textAlign: "left", width: "100%"}}>{action.description}</p>}
                            </div>
                            <FaWindowClose size="20px" color="red" style={{cursor: "pointer", float: "right"}} onClick={() => {window.alert("delete")}}></FaWindowClose>
                        </div>
                    </div>
                ))}
            </div>}
        </div>

        <div style={tabs === "legend" ? {display: "block"} : {display: "none"}}>
            {/* legendary */}
            {selected.legendary && <div id="legendary" className="list-columns">
                {selected.legendary.map((action, i) => (
                    <div className="flex-row" key={i}>
                        <div className="list-item" style={{textAlign: "left", width: "100%"}}>
                            <div className="flex-row" style={{cursor: "pointer", width: "100%"}} onClick={() => {setItem(action); setModal({on: true, view: "legendary"})}}>
                                {action.name && <h2 style={{display: "inline-block", paddingRight: "1ch", width: "15ch", textAlign: "left"}}>{action.name}: </h2>}
                                {action.text && <p style={{display: "inline-block", textAlign: "left", width: "100%"}}>{truncate(action.text, 70)}</p>}
                            </div>
                            <FaWindowClose size="20px" color="red" style={{cursor: "pointer", float: "right"}} onClick={() => {window.alert("delete")}}></FaWindowClose>
                        </div>
                    </div>
                ))}
            </div>}
        </div>

        <div style={tabs === "traits" ? {display: "block"} : {display: "none"}}>
            {/* traits */}
            {selected.traits && <div id="traits" className="list-columns">
                {selected.traits.map((trait, i) => (
                    <div className="flex-row" key={i}>
                        <div className="list-item" style={{textAlign: "left", width: "100%"}}>
                            <div className="flex-row" style={{cursor: "pointer", width: "100%"}} onClick={() => {setItem(trait); setModal({on: true, view: "trait"})}}>
                                {trait.name && <h2 style={{display: "inline-block", paddingRight: "1ch", width: "15ch", textAlign: "left"}}>{trait.name}: </h2>}
                                {trait.description && <p style={{display: "inline-block", textAlign: "left", width: "100%"}}>{trait.description}</p>}
                                <FaWindowClose size="20px" color="red" style={{cursor: "pointer", float: "right"}} onClick={() => {window.alert("delete")}}></FaWindowClose>
                            </div>
                        </div>
                    </div>
                ))}
                <br></br>
            </div>}
        </div>
            
            

            

            

            

            {/* spell slots */}
            {selected.spellSlots && <div id="spellslots">
                <ol>
                    {selected.spellSlots.map((slot, i) => (
                        <li>{slot}</li>
                    ))}
                </ol>
                <br></br>
            </div>}

            {/* spells */}
            {selected.spells && <div id="spells">
                <ul>
                    {selected.spells.map((spell, i) => (
                        <li>{spell}</li>
                    ))}
                </ul>
                <br></br>
            </div>}
        </form>}
        </>
    );
}
export default Monsters;
export { MonsterList, MonsterView, MonsterForm }