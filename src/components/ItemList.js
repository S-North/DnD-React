import { useState } from "react";
import { Link } from "react-router-dom";
import background from '../assets/adventure-bg.jpg';
import FormCampaign from "./FormCampaign";
import FormMonster from "./FormMonster";

const ItemList = ({ title, description: formDescription, buttonText, route, items, config, setConfig, addItem }) => {
    const [widget, setWidget] = useState({"edit": false})
    console.log(widget.edit);
    console.log(addItem);

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
                        <Link   to={{
                                pathname: route,
                                state: { item, config }
                                }} 
                                key={item.id}>

                            <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                                <h3>{ item.name }</h3>
                                <p>{  item.description }</p>
                            </div>

                        </Link>
                    ))
                : <p>No notes to display</p>}
                </div>}

                {(widget.edit && route === "/campaign") && <FormCampaign addItem={ addItem } setWidget={ setWidget }></FormCampaign>}
                {(widget.edit && route === "/adventure") && <h1>Adventure Form</h1>}
                {(widget.edit && route === "/encounter") && <h1>Encounter Form</h1>}
                {(widget.edit && route === "/monster") && <FormMonster addItem={ addItem } setWidget={ setWidget }></FormMonster>}
                {(widget.edit && route === "/npc") && <h1>NPC Form</h1>}
                {(widget.edit && route === "/note") && <h1>Note Form</h1>}
            </div>
        </>
    );
}
 
export default ItemList;