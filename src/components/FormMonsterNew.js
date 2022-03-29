import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { types } from "../Forms";
import { diceRoll } from '../Maths';

const FormMonsterNew = ({ monster }) => {
    console.log(monster)
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
    const [ temp, setTemp ]                             = useState() // temporary state for miscelaneous editing

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
                    <label for="name">Name:</label>
                    <input id="name"
                        type="text" 
                        placeholder="name"
                        value={ selected.name } 
                        onChange={(e) =>                {setSelected({...selected, "name": e.target.value})}} />
                    
                    <label for="descr">Description: </label>
                    <textarea id="descr"
                        rows="10" 
                        type="text" 
                        placeholder="description" 
                        value={ selected.description } 
                        onChange={(e) =>                {setSelected({...selected, "description": e.target.value})}} />
                    
                    <div className="flex-row">
                        <label for="cr">CR:</label>
                        <input id="cr"
                            type="number" 
                            placeholder="cr"
                            value={ selected.cr } 
                            onChange={(e) =>            {setSelected({...selected, "cr": e.target.value})}} />
                        
                        <label for="ac">AC:</label>
                        <input id="ac"
                            type="number" 
                            placeholder="ac"
                            value={ selected.ac } 
                            onChange={(e) =>            {setSelected({...selected, "ac": e.target.value})}} />
    
                        <label for="hp">HP:</label>
                        <input id="hp" type="number" placeholder="hp" value={ selected.hp }
                            onChange={(e) =>            {setSelected({...selected, "hp": e.target.value})}} />
                    
                        <label for="speed">Speed:</label>
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
                        <div
                            style={{"float": "right", "cursor": "pointer"}}
                            className="green"
                            onClick={() => {setPanes({...panes, "addTrait": true})}}>Add New</div>
                    </div>
                    
    {/* add */}
                    {panes.addTrait == true &&
                        // store input in {temp} state, then setTraits with the temp data. Clear the temp state *** not working
                        <div> 
                            <input type="text" onChange={(e) => {setTemp({...temp, "name": e.target.value})}} />
                            <textarea type="text" rows="10" onChange={(e) => {setTemp({...temp, "description": e.target.value})}} />
                            <div className="btn blue" onClick={() => {setTemp({...temp, "id": uuidv4()}, setTraits([...traits, temp], setTemp({}), setPanes({...panes, "addTrait": false})))}}>Save</div>
                        </div>}

    {/* list & delete */}
                    {traits && panes.addTrait == false && traits
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                        .map((trait) => (
                            <div
                                key={trait.id}
                                className="flex-row">
                                
                                <div
                                    className="description" 
                                    style={{"cursor": "pointer"}} 
                                    onClick={(e) => {window.alert("create pane to edit trait")}}>
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
                        <div
                            style={{"float": "right", "cursor": "pointer"}}
                            className="green"
                            onClick={() => {setPanes({...panes, "addAction": true})}}>Add New</div>
                    </div>
                    
    {/* add */}
                    {panes.addAction == true &&
                        // store input in {temp} state, then setActions with the temp data. Clear the temp state *** not working
                        <div> 
                            <input type="text" onChange={(e) => {setTemp({...temp, "name": e.target.value})}} />
                            <textarea type="text" rows="10" onChange={(e) => {setTemp({...temp, "description": e.target.value})}} />
                            <div className="btn blue" onClick={() => {setTemp({...temp, "id": uuidv4()}, setActions([...actions, temp], setTemp({}), setPanes({...panes, "addAction": false})))}}>Save</div>
                        </div>}

    {/* list & delete */}
                    {traits && panes.addAction == false && actions
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) )
                        .map((action) => (
                            <div
                                key={action.id}
                                className="flex-row">
                                
                                <div
                                    className="description" 
                                    style={{"cursor": "pointer"}} 
                                    onClick={(e) => {window.alert("create pane to edit action")}}>
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
