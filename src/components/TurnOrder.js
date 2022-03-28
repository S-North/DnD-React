import { useState } from "react";
import background from '../assets/adventure-bg.jpg';
import { crToXp, diceRoll } from "../Maths";
import TurnItem from "./TurnItem"

const TurnOrder = ({ windows, setWindows, title, monsters, players, route, items, setCombatList, itemStyle, addItem, encounter, campaignId, adventureId, encounterId, deleteItem }) => {
    const [ selected, setSelected ] = useState()
    const updateSelected = (item) => {
        switch (item.enemy) {
            default:
                break
            case "monster":
                setSelected(encounter.monsters.filter(m => { return m.id === item.id })[0])
                break;
            case "pc":
                setSelected(players.filter(p => { return p.id === item.id })[0])
        }
    }

    const clickMe = (value) => {
        const roll = diceRoll(1,20,value)
        window.alert(`${roll[0]} + ${roll[1]} = ${roll[2]}`)
    }

    return (
        <>
            <div className="widget">
                <button onClick={ (e) => { e.preventDefault(); setWindows({
                    ...windows, 
                    "turn": false, 
                    "list": true}
                    )}} className="btn green float-right">Edit</button>
                
                <h3>Combat</h3>
                <p>Turn = {encounter.turn}</p>
                <br />
                <div className="item-list">
                    {items ? items
                        .sort(((a, b) => a.name > b.name ? 1 : -1))
                        .sort(((a, b) => a.enemy < b.enemy ? 1 : -1))
                        .sort(((a, b) => a.init < b.init ? 1 : -1))
                        .map((item) => (
                        <div onClick={(e) => {updateSelected(item)}}>
                            <TurnItem 
                                cursor="pointer"
                                key={ item.id } 
                                encounter={encounter} 
                                players={ players } 
                                item={ item } 
                                route={ route } 
                                campaignId={ campaignId} 
                                adventureId={ adventureId} 
                                itemStyle={ itemStyle } 
                                background={ background } />
                        </div>
                    ))
                : <p>No items to display</p>}
                </div>
            </div>
            <div className="widget">
                {selected &&
                    <>
                        <h1>{selected.name}</h1>
                        <em><span>({selected.type})</span> <span>CR: {selected.cr} ({crToXp(selected.cr)} xp)</span></em>
                        <hr />
                        <p>AC: {selected.ac}</p>
                        <p>HP: {selected.hp}</p>
                        <p>Speed: {selected.speed}</p>
                        <hr />
                        <p>Str: {selected.str}</p>
                        <p>Dex: {selected.dex}</p>
                        <p>Con: {selected.con}</p>
                        <p>Int: {selected.int}</p>
                        <p>Wis: {selected.wis}</p>
                        <p>Cha: {selected.cha}</p>
                        <hr />
                        {selected.skills && <p>Skills: {selected.skills.map(r => (<span>{r} </span>))}</p>}
                        {selected.vulnerabilities && <p>Vulnerabilities: {selected.vulnerabilities.map(r => (<span>{r} </span>))}</p>}
                        {selected.resistances && <p>Resistances: {selected.resistances.map(r => (<span>{r} </span>))}</p>}
                        {selected.damageImmunity && <p>Damage Immunities: {selected.damageImmunity.map(r => (<span>{r} </span>))}</p>}
                        {selected.conditionImmunity && <p>Condition Immunities: {selected.conditionImmunity.map(r => (<span>{r} </span>))}</p>}
                        {selected.senses && <p>Senses: {selected.senses.map(r => (<span>{r} </span>))}</p>}
                        {selected.languages && <p>Languages: {selected.languages.map(r => (<span>{r} </span>))}</p>}
                        <hr />
                        {selected.traits && <p>Traits</p>}
                        {selected.traits && selected.traits.map(r => (
                            <>
                                <p>{r.name}</p>
                                <p>{r.description}</p>
                            </>
                        ))}
                        <hr />
                        {selected.actions && <p>Actions</p>}
                        {selected.actions && selected.actions.map(r => (
                            <>
                                <p>{r.name}</p>
                                <p>{r.description}</p>
                                <button onClick={e => {clickMe(r.attack)}}>To Hit: {r.attack}</button>
                            </>
                        ))}
                    </>
                }
            </div>
        </>
    );
}
 
export default TurnOrder;