import { useState } from "react";
import FormMonster from "./FormMonster";

const ActionList = ({ title, description: formDescription, buttonText, route, items, addItem }) => {
    const [widget, setWidget] = useState({"edit": false})

    return (
        <>
            <div className="widget border-box">
                {!widget.edit && <button onClick={ (e) => { e.preventDefault(); setWidget({"edit": true})}} className="btn green float-right">{ buttonText }</button>}
                {widget.edit && <button onClick={ () => { setWidget({"edit": false})}} className="btn blue float-right">Exit Edit</button>}
                <h3>{ title }</h3>

                {!widget.edit && <p>{ formDescription }</p>}
                {!widget.edit && <div className="item-list">
                    {items ? items.map((item) => (    
                        <>              
                        <p>{ item.name }</p>
                        {item.description && <p>{ item.description }</p>}
                        {item.attack && <p>To Hit: { item.attack }</p>}
                        {item.damage && <p>Damage: { item.damage.number }d{ item.damage.dice }+{ item.damage.bonus } { item.damage.type }</p>}
                        </>
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