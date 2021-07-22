import { useState } from "react";
import { Link } from "react-router-dom";
import background from '../assets/adventure-bg.jpg';
import FormCampaign from "./FormCampaign";
import FormMonster from "./FormMonster";
import FormAdventure from "./FormAdventure";
import FormPlayer from "./FormPlayer";
import FormNote from "./FormNote";

const ItemList = ({ title, description: formDescription, buttonText, route, items, addItem, campaignId, adventureId, deleteItem }) => {
    const [widget, setWidget] = useState({"edit": false})
    // console.log(`campaign: ${campaignId}, adventure: ${adventureId}`);
    const truncate = (string) => {
        if (string && string.length > 120) {
            return string.substring(0, 116) + " ..."
        }
        return string
    }

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
                        <Link key={ item.id } to={{
                                pathname: route,
                                state: { item, campaignId, adventureId }
                                }} 
                        >

                            <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                                <h3>{ item.name }</h3>
                                <p>{ truncate(item.description) }</p>
                            </div>

                        </Link>
                    ))
                : <p>No items to display</p>}
                </div>}

                {(widget.edit && route === "/campaign") && <FormCampaign addItem={ addItem } setWidget={ setWidget }></FormCampaign>}
                {(widget.edit && route === "/adventure") && <FormAdventure addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId }></FormAdventure>}
                {(widget.edit && route === "/encounter") && <h1>Encounter Form</h1>}
                {(widget.edit && route === "/monster") && <FormMonster addItem={ addItem } setWidget={ setWidget }></FormMonster>}
                {(widget.edit && route === "/character") && <FormPlayer addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId }></FormPlayer>}
                {(widget.edit && route === "/note") && <FormNote addItem={ addItem } setWidget={ setWidget } campaignId={ campaignId } adventureId={ adventureId }></FormNote>}
            </div>
        </>
    );
}
 
export default ItemList;