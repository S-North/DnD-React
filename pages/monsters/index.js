import connectToDatabase from '../../utils/mongodb'
import { useState, useEffect } from 'react'
import { truncate, abilityModifier, diceRoll, crToXp } from '../../utils/utils'
import Link from 'next/link'
import { FaEdit, FaWindowClose, FaDiceSix } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'; // https://www.npmjs.com/package/react-paginate
import BasicForm from '../../components/forms/BasicForm'
import monsterManual from '../../utils/monsterManual'
import { importMonster } from '../../utils/import'
import { sizes, types, crRange, sensesList, abilityList, languagesList, skillList, damageTypes, conditions, monsterTemplate } from '../../utils/Forms'


export default function Monsters({ }) {
  const api = 'http://localhost:3000/api/'
  const [ monsters, setMonsters ] = useState()
  const [ selected, setSelected ] =useState();
  const [ modal, setModal ] = useState({"type": "none", "on": false})
  
  useEffect(() => {
    return () => {}
  }, [])

  const importMonsterManual = async (file) => {
    const monsterUpload = []
    monsterManual.forEach(monster => {
        monsterUpload.push(importMonster(monster))
    })
    console.log(monsterUpload)
    const response = await fetch(`${api}monsters`, {
      method: "POST",
      body: JSON.stringify(
          {
          action: 'addmany',
          data: monsterUpload
      }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    const uploadedMonsters = await response.json()
    console.log(uploadedMonsters)

  }

  const addMonster = (monster) => {
    console.log(monster)
}

const editMonster = (monster) => {
    if (monster._id) {console.log(`edit monster ${monster}`)}
    else if (!monster._id) {console.log(`add monster ${monster}`)}
     
}

const deleteMonster = (collection, _id) => {
    console.log(collection)
    console.log(_id)
}
  
  return (
    <>
        {/* modal window */}
        {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "campaigns" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <BasicForm data={selected} updateFnc={updateCampaigns} mongoCollection={modal.type}></BasicForm>
                    </>}

                    {modal.view === "edit" &&
                        <>
                        <MonsterForm selected={selected} setSelected={setSelected} update={editMonster}></MonsterForm>
                        </>}

                    {modal.view === "view" &&
                        <>
                        <MonsterView id={selected._id}></MonsterView>
                        </>}
                </div>
        </div>}

        <section>
            <div className="one-column">
                <MonsterList importMonsterManual={importMonsterManual} addMonster={editMonster} deleteMonster={deleteMonster} setSelected={setSelected} editMonster={editMonster} setModal={setModal}></MonsterList>
            </div>

            <div className="one-column">
                <button onClick={() => {importMonsterManual()}}>Import Monsters</button>
                
            </div>
        </section>
    </>
  )
}

const MonsterList = ({ addMonster, editMonster, deleteMonster, setSelected, setModal, importMonsterManual }) => {
  const api = '/api/'
  const [ monsters, setMonsters ] = useState([]);

  // manage the query state
  const [ search, setSearch ] = useState("")
  const [ minCr, setminCr ] = useState(0)
  const [ maxCr, setMaxCr ] = useState(30)
  const [ type, setType ] = useState()
  const [ query, setQuery ] = useState(
    {}
  )

  // pagination state
  const [ currentItems, setCurrentItems ] = useState(null);
  const [ pageCount, setPageCount ] = useState(0);
  const [ itemOffset, setItemOffset ] = useState(0);
  const [ itemsPerPage, setItemsPerPage ] = useState(10)

  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetch(`${api}monsters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'minilist',
            data: {minCr: minCr, maxCr: maxCr, search: search}
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      const allMonsters = await response.json()
      setMonsters(allMonsters)
    }
    getMonsters()

    return () => {} 
  }, [minCr, maxCr, search])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(monsters.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(monsters.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, monsters]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % monsters.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const getMonster = async (monster) => {
    console.log(monster)
    const response = await fetch(`${api}monsters`, {
      method: "POST",
      body: JSON.stringify(
          {
          action: 'query',
          data: {_id: monster._id}
      }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    const selectedMonster = await response.json()
    console.log(selectedMonster)
    if (selectedMonster && selectedMonster.length > 0) setSelected(selectedMonster[0])
  }

  return (
      <>
      <div className="flex-row">
          {/* <h2>Monsters</h2> */}
          {/* <button onClick={() => {importMonsterManual()}}>Import Disabled</button> */}
          {<button className="green" onClick={() => {setSelected(monsterTemplate); setModal({on:true, view: "edit"})}}>New Monster</button>}
      </div>

      {/* filtering the results */}
      <details>
          <summary>Filter & Search</summary>
          <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
          <div className="flex-row">
              <select value={minCr} onChange={(e) => {setminCr(parseInt(e.target.value))}}>
                  {crRange.map(cr => (
                      <option key={cr} value={cr}>{cr}</option>
                  ))}
              </select>
              <select value={maxCr} onChange={(e) => {setMaxCr(parseInt(e.target.value))}}>
                  {crRange.map(cr => (
                      <option key={cr} value={cr}>{cr}</option>
                  ))}
              </select>

          </div>
      </details>
      {currentItems && currentItems.map(monster => (
          <div key={monster._id} className="list-item">
              <div key={monster.id} style={{cursor: "pointer", width: "100%"}} onClick={() => {setSelected(monster); setModal({on:true, view: "view"})}}>
                  <div className="link">
                          <h2>{monster.name}</h2>
                          <div style={{display: "flex"}}>
                            <p><strong>CR: {monster.cr} - </strong></p>
                            <em>{monster.size} {monster.type}</em>
                          </div>
                  </div>
              </div>
              <div className='actions'>
                  {deleteMonster && <FaWindowClose 
                      style={{"cursor": "pointer"}} 
                      color="red"
                      onClick={() => {deleteMonster("monsters", monster._id)}} />}

                  {editMonster && <FaEdit
                      style={{"cursor": "pointer"}} 
                      color="grey"
                      onClick={() => {editMonster(monster); setModal({on:true, view: "edit"})}} />}

              </div>
          </div>
      ))}
      {monsters && monsters.length > itemsPerPage && <div id='pagination-controls'>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
      </div>}
      {/* <div className="flex-row">
          <button className="blue" onClick={() => {prev()}}>Prev</button>
          <button className="blue" onClick={() => {next()}}>Next</button>
      </div> */}
      </>
  );
}

const MonsterView = ({ id }) => {
  const [ monster, setMonster ] = useState()

  useEffect(() => {
    const getFullMonster = async () => {
      const response = await fetch(`/api/monsters`, {
        method: "POST",
        body: JSON.stringify(
            {
              action: 'query',
              data: {_id: id}
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      const fullMonster = await response.json()
      if (fullMonster && fullMonster.length > 0) setMonster(fullMonster[0])
    }
    if (id) getFullMonster()
  
    return () => {}
  }, [id, query])
  
  return (
    <>
    {monster &&
    <>
      <div className='flex-row'>
        <h3>{`${monster.name}`}</h3>
        <h2>{`( CR ${monster.cr} ) XP: ${monster.xp}`}</h2>

      </div>

      <div className='flex-row' style={{backgroundColor: "rgba(255,255,255,0.7)", padding: "0.5rem", marginBottom: "1ch"}}>
        <em>{`${monster.size} ${monster.type}. Speed: `}</em>
      </div>

      <div className='flex-row' style={{backgroundColor: "rgba(255,255,255,0.7)", padding: "0.5rem", marginBottom: "1ch"}}>
        <div><h2>{"STR"}</h2><p>{monster.str}</p><p>{abilityModifier(monster.str)}</p></div>
        <div><h2>{"DEX"}</h2><p>{monster.dex}</p><p>{abilityModifier(monster.dex)}</p></div>
        <div><h2>{"CON"}</h2><p>{monster.con}</p><p>{abilityModifier(monster.con)}</p></div>
        <div><h2>{"INT"}</h2><p>{monster.int}</p><p>{abilityModifier(monster.int)}</p></div>
        <div><h2>{"WIS"}</h2><p>{monster.wis}</p><p>{abilityModifier(monster.wis)}</p></div>
        <div><h2>{"CHA"}</h2><p>{monster.cha}</p><p>{abilityModifier(monster.cha)}</p></div>
      </div>

      <div style={{backgroundColor: "rgba(255,255,255,0.7)", padding: "0.5rem", marginBottom: "1ch"}}>
        <h2>Traits</h2>
        {monster.traits &&
          monster.traits.map(trait => (
            <div>
              <h2>{trait.name}</h2>
              <p>{trait.description}</p>
            </div>
          ))
        }
      </div>

      <div style={{backgroundColor: "rgba(255,255,255,0.7)", padding: "0.5rem", marginBottom: "1ch"}}>
        <h2>Actions</h2>
        {monster.actions &&
          monster.actions.map(action => (
          <>
            <div>
              <h2>{action.name}</h2>
              <p>{action.description}</p>
            </div>
          </>
          ))
        }
      </div>

      <div  style={{backgroundColor: "rgba(255,255,255,0.7)", padding: "0.5rem", marginBottom: "1ch"}}>
        <h2>Description</h2>
        <p>{monster.description}</p>
      </div>

    </>
    }
    </>
  );
}

const MonsterForm = ({ selected, setSelected, update}) => {
  const [ modal, setModal ] = useState({on: false, view: ""})
  const [ item, setItem ] = useState();
  const [ tabs, setTabs ] = useState("details");

  useEffect(() => {
    if (selected) setItem(selected)
  
    return () => {}
  }, [selected])
  
  
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
      {modal.on && <div id="modal-window" className="modal">
              {/* Modal content */}
                  <div className="modal-content">
                      <span className="close" onClick={() => {setModal({"on": false, "type": ""}); setItem({})}}>&times;</span>

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
                              {["none", ...damageTypes].map((type, i) => (
                                  <option key={i} value={type}>{type}</option>
                              ))}
                          </select>
                      </div>}

                      {item.damage2 && 
                      <div className="flex-row">
                          <input type="number" value={item.damage2.hdDice}></input>
                          <input type="number" value={item.damage2.hdSides}></input>
                          <input type="number" value={item.damage2.hdBonus}></input>
                          <select value={item.damage2.type}>
                              {["none", ...damageTypes].map((type, i) => (
                                  <option key={i} value={type}>{type}</option>
                              ))}
                          </select>
                      </div>}

                      {item.damage3 && 
                      <div className="flex-row">
                          <input type="number" value={item.damage3.hdDice}></input>
                          <input type="number" value={item.damage3.hdSides}></input>
                          <input type="number" value={item.damage3.hdBonus}></input>
                          <select value={item.damage3.type}>
                              {["none", ...damageTypes].map((type, i) => (
                                  <option key={i} value={type}>{type}</option>
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
          <button className="tab" style={tabs === "spells" ? {backgroundColor: "#babdd4"} : {}} onClick={() => {setTabs("spells")}}>spells</button>
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

      <div style={tabs === "spells" ? {display: "block"} : {display: "none"}}>
        {/* spell slots */}
        {selected.spellSlots && <div id="spellslots">
              <ol>
                  {selected.spellSlots.map((slot, i) => (
                      <li key={i}>{slot}</li>
                  ))}
              </ol>
              <br></br>
          </div>}

          {/* spells */}
          {selected.spells && <div id="spells">
              <ul>
                  {selected.spells.map((spell, i) => (
                      <li key={i}>{spell}</li>
                  ))}
              </ul>
              <br></br>
          </div>}
      </div>
      </form>}
      </>
  );
}

export async function getServerSideProps(context) {
  try {
    await connectToDatabase
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export { MonsterList, MonsterForm}