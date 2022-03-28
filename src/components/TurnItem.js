import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TurnItem = ({ itemStyle="item-block", item, players, route, encounter, campaignId, adventureId, background }) => {
    console.log(item)
    const campaignPlayers = players.filter((p) => { return p.campaignId === campaignId})
    const truncate = (string) => {
        if (string && string.length > 120) {
            return string.substring(0, 116) + " ..."
        }
        return string
    }

    if (itemStyle === "item-compact") {
        background = "";
    }
    const [data, setdata] = useState([])
    const monster = encounter.monsters.filter((monster) => { return monster.id === item.id })[0];
    const pc = campaignPlayers.filter((player) => { return player.id === item.id })[0];
    const npc = encounter.monsters.filter((monster) => { return monster.id === item.id })[0];

    useEffect(() => {
        // set stat block location
        if (item.enemy === "monster") {
            setdata({"name": monster.name, "cr": monster.cr, "type": monster.type, "hp": monster.hp, "ac": monster.ac})
        } else if (item.enemy === "pc") {
            setdata({"name": pc.name, "cr": pc.cr, "type": pc.type, "hp": pc.hp, "ac": pc.ac})
        } else if (item.enemy === "npc") {
            setdata({"name": npc.name, "cr": npc.cr, "type": npc.type})
        }
      return () => {
      }
    }, [])
    
    return (
        <>         
            {(itemStyle === "item-block") ?
            <div className={itemStyle} style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                <p>{item.init}</p>
                <p>Something</p>
                <h3>{ data.name }</h3>
                {data.cr && <p>CR: { data.cr }</p>}
                {data.type && <p>Type: { data.type }</p>}
                {(itemStyle === "item-block") && <p>{ truncate(data.description) }</p>}
            </div>
            :
            <div className={itemStyle}>
                <h3 style={{ color:"black"}}>
                    Init: {item.init}
                    <strong> { data.name }</strong> 
                    <em>{data.type} {data.cr && <p>CR: {data.cr}</p>}</em>
                </h3>
                <p>HP: {data.hp}</p>
                <p>AC: {data.ac}</p>
            </div>
            }
        </>
    );
}
 
export default TurnItem;