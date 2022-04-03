import { useState, useEffect } from "react";

const CombatListItem = ({ itemStyle="item-block", item, players, route, encounter, dbUpdate, campaignId, adventureId, background }) => {
    const campaignPlayers = players.filter((p) => { return p.campaignId === campaignId})

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
            setdata({"id": item.id, "name": monster.name, "cr": monster.cr, "type": monster.type})
        } 
        else if (item.enemy === "pc") {
            setdata({"id": item.id, "name": pc.name, "cr": pc.cr, "type": pc.type})
        } 
        else if (item.enemy === "npc") {
            setdata({"name": npc.name, "cr": npc.cr, "type": npc.type})
        }
      return () => {
      }
    }, [])

    const deleteItem = (data) => {

        const initiative = encounter.initiative.filter(f => { return f.id !== data.id})
        const monsters = encounter.monsters.filter(f => { return f.id !== data.id})
        dbUpdate("encounters", {...encounter, initiative, monsters}, encounter.id, "PUT"); // Delete the monsters/initiative in in the encounter
    }
    
    return (
        <>         
                <div className={itemStyle}>
                    <h3 style={{ color:"black"}}><strong>{ data.name }</strong></h3> 
                    <em>
                        {data.type} {data.cr && <p>CR: {data.cr}</p>}<input type="button" className="red" value="delete" onClick={(e) => {deleteItem(data)}}></input></em>
                </div>
        </>
    );
}
 
export default CombatListItem;