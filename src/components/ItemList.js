import { useState } from "react";
import background from '../assets/adventure-bg.jpg';
import FormCampaign from "./FormCampaign";
import FormMonster from "./FormMonster";
import FormAdventure from "./FormAdventure";
import FormEncounter from "./FormEncounter";
import FormPlayer from "./FormPlayer";
import FormNote from "./FormNote";
import Item from "./Item";

const ItemList = ({ title, description: formDescription, buttonText, route, items, itemStyle, addItem, campaignId, adventureId, encounterId, deleteItem }) => {
    const [widget, setWidget] = useState({"edit": false})
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
                        <Item key={ item.id} item={ item } route={ route } campaignId={ campaignId} adventureId={ adventureId} itemStyle={ itemStyle } background={ background } />
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/campaign") && <FormCampaign addItem={ addItem } setWidget={ setWidget } />}
                {(widget.edit && route === "/adventure") && <FormAdventure addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId } />}
                {(widget.edit && route === "/encounter") && <FormEncounter addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId } />}
                {(widget.edit && route === "/monster") && <FormMonster addItem={ addItem } setWidget={ setWidget }></FormMonster>}
                {(widget.edit && route === "/npc") && <FormPlayer addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId } encounterId={ encounterId } pc={false} />}
                {(widget.edit && route === "/player") && <FormPlayer addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId } encounterId={ encounterId } pc={true} />}
                {(widget.edit && route === "/note") && <FormNote addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId } encounterId={ encounterId } />}
            </div>
        </>
    );
}
 
export default ItemList;