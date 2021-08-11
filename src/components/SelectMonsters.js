// rewrite this to return an object of the monster, NPC or player selected, to the combat list

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // generate a UUID for the object id
import { types, crRange} from '../Forms'
import FormSelect from "./FormSelect";
import FormMonster from "./FormMonster";
import FormPlayer from "./FormPlayer";

const SelectMonsters = ({ monsters, players, addItem, selectMonster, closePicker, setSelected, windows, setWindows }) => {
    const [widget, setWidget] = useState({"edit": false})
    const [ tab, setTab] = useState("monster");

    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("30");
    const [ type, setType ] = useState("All");
    
    const filtered = (monsters, filter="name") => {
        let items = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(search)})
            .filter((monster) => { return monster.cr >= parseFloat(minCr) })
            .filter((monster) => { return monster.cr <= parseFloat(maxCr) });
        if (type !== "All") {
            items = items.filter((item) => { return item.type === type })}
        return items.sort((filter === "name") ? (a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) - (a.name.toLowerCase() < b.name.toLowerCase()) : (a, b) => (parseFloat(a.cr) > parseFloat(b.cr)) - (parseFloat(a.cr) < parseFloat(b.cr)))
        }

    const selectItem = (item) => {
        setSelected({...item, "id": uuidv4()});
        setWindows({...windows, "select": false, "add": true})
    }

    return (
        <>
        <div className="widget">
            <div className="section">
                <input className="input-text" name='search' type='text' value={ search } onChange={e => setSearch(e.target.value)} placeholder="Search" />
            </div>
            <div className="section">
            <div className="flex-row">
                <FormSelect title="Minimum CR" value={ minCr } values={ crRange } setState={ setMinCr } />
                <FormSelect title="Maximum CR" value={ maxCr } values={ crRange } setState={ setMaxCr } />
                <FormSelect title="Type" values={ types } value={ type } setState={ setType } />
            </div>

            </div>
            <div>
                
                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                {!widget.edit && <div className="item-list">
                    {filtered ? filtered(monsters).map((item) => (
                        <div key={ item.id } onClick={() => {selectItem(item)}} className="item-compact" id="click this" style={{ cursor:"pointer" }}>
                            <h3 style={{ color:"black"}}><strong>{ item.name }.</strong> <em>{item.type} CR: {item.cr}</em></h3>
                        </div>
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && tab === "monster") && <FormMonster addItem={ addItem } setWidget={ setWidget } setTab={ setTab }></FormMonster>}
                {(widget.edit && tab === "character") && <FormPlayer addItem={ addItem } setWidget={ setWidget } setTab={ setTab } />}
            </div>
            </div>
        </>
    );
}
 
export default SelectMonsters;
