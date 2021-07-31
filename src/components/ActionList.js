import { useState } from "react";
import FormMonster from "./FormMonster";
import { diceRoll } from "../Maths";

const ActionList = ({ title, description: formDescription, buttonText, route, items, addItem }) => {
    const [widget, setWidget] = useState({"edit": false})
    const handleClick = (number, sides, bonus) => {
        const roll = diceRoll(number, sides, bonus);
        alert(`Roll is ${roll[0]} and the total is ${roll[2]}`);
    }

    return (
        <>
            <div className="widget border-box">
                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWidget({"edit": true})}} className="btn green float-right">{ buttonText }</button>}
                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                <h3>{ title }</h3>

                {!widget.edit && <p>{ formDescription }</p>}
                {!widget.edit && <div className="item-list">
                    {items ? items.map((item) => (    
                        <div className="item" key={item.id}>              
                            <p><strong>{item.name && item.name }:</strong> {item.description && item.description }</p>
                            
                            {item.attack && <>To Hit: <button className="btn blue" onClick={() => (handleClick(1, 20, item.attack))}> { item.attack }</button></>}
                            {item.damage && <>Damage: <button className="btn blue" onClick={() => (handleClick(item.damage.number, item.damage.dice, item.damage.bonus))}> { item.damage.number }d{ item.damage.dice }+{ item.damage.bonus } </button> { item.damage.type }</>}
                        </div>
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/monster") && <FormMonster addItem={ addItem } setWidget={ setWidget }></FormMonster>}
                {(widget.edit && route === "/trait") && <h1>trait Form</h1>}
                {(widget.edit && route === "/action") && <h1>Action Form</h1>}
                {(widget.edit && route === "/legendary") && <h1>Legendary Form</h1>}
            </div>
        </>
    );
}
 
export default ActionList;