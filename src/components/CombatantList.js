import { useState } from "react";
import background from '../assets/adventure-bg.jpg';
import Item from "./Item";
import SelectMonsters from "./SelectMonsters";

const CombatantList = ({ monsters, title, description: formDescription, buttonText, route, items, itemStyle, addItem, campaignId, adventureId, encounterId, deleteItem }) => {
    const [widget, setWidget] = useState({"edit": false})
    console.log(monsters);
    const selectMonster = (selection) => {
        console.log(selection);
    }
    // console.log(`campaign: ${campaignId}, adventure: ${adventureId}`);

    return (
        <>
            <div className="widget">
                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWidget({"edit": true})}} className="btn green float-right">{ buttonText }</button>}
                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                <h3>{ title }</h3>
                <br />
                {!widget.edit && <p>{ formDescription }</p>}
                {!widget.edit && <div className="item-list">
                    {items ? items.map((item) => (
                        <Item item={ item } route={ route } campaignId={ campaignId} adventureId={ adventureId} itemStyle={ itemStyle } background={ background } />
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/combatant") && <SelectMonsters monsters={ monsters } selectMonster={ selectMonster } />}
                </div>
        </>
    );
}
 
export default CombatantList;