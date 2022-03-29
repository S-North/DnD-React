import { useState } from "react";
import background from '../assets/adventure-bg.jpg';
import CombatListItem from "./CombatListItem";
import SelectMonsters from "./SelectMonsters";

const CombatantList = ({ windows, setWindows, title, monsters, players, route, items, setCombatList, itemStyle, addItem, encounter, campaignId, adventureId, encounterId, deleteItem, dbUpdate }) => {
    const [widget, setWidget] = useState({"edit": false})
    const selectMonster = ({selection}) => {
        setWindows({...windows, "select": true, "npcs": false, "notes": false})
    }

    return (
        <>
            <div className="widget">
                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWindows({
                    ...windows, 
                    "initiative": true, 
                    "list": false, 
                    "npcs": false, 
                    "notes": false}
                    )}} className="btn green float-right">Roll Initiative</button>}

                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWindows({
                    ...windows, 
                    "select": true, 
                    "list": false, 
                    "npcs": false, 
                    "notes": false}
                    )}} className="btn blue float-right">+Enemy</button>}

                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWindows({
                    ...windows, 
                    "player": true, 
                    "list": false, 
                    "npcs": false, 
                    "notes": false}
                    )}} className="btn blue float-right">+PC</button>}

                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                
                <h3>Combatants</h3>
                <br />
                {!widget.edit && <p>Add new combatants to the list and run the encounter when ready.</p>}
                {!widget.edit && <div className="item-list">
                    {items ? items.map((item) => (
                        <CombatListItem key={ item.id } encounter={encounter} dbUpdate={dbUpdate} players={ players } item={ item } route={ route } campaignId={ campaignId} adventureId={ adventureId} itemStyle={ itemStyle } background={ background } />
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/combatant") && <SelectMonsters monsters={ monsters } players={ players } selectMonster={ selectMonster } closePicker={ setWidget } />}
                </div>
        </>
    );
}
 
export default CombatantList;