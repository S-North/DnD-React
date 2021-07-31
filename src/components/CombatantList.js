import { useState } from "react";
import background from '../assets/adventure-bg.jpg';
import Item from "./Item";
import SelectMonsters from "./SelectMonsters";


const CombatantList = ({ windows, setWindows, title, monsters, players, route, items, setCombatList, itemStyle, addItem, campaignId, adventureId, encounterId, deleteItem }) => {
    const [widget, setWidget] = useState({"edit": false})
    const selectMonster = ({selection}) => {
        setWindows({...windows, "select": true, "npcs": false, "notes": false})
        // setCombatList([...items, selection])
    }


    return (
        <>
            <div className="widget">
                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWindows({...windows, "select": true, "list": false, "npcs": false, "notes": false})}} className="btn green float-right">+</button>}
                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                <h3>Combatants</h3>
                <br />
                {!widget.edit && <p>Add new combatants to the list and run the encounter when ready.</p>}
                {!widget.edit && <div className="item-list">
                    {items ? items.map((item) => (
                        <Item key={ item.id } item={ item } route={ route } campaignId={ campaignId} adventureId={ adventureId} itemStyle={ itemStyle } background={ background } />
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/combatant") && <SelectMonsters monsters={ monsters } players={ players } selectMonster={ selectMonster } closePicker={ setWidget } />}
                </div>
        </>
    );
}
 
export default CombatantList;