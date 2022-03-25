import { diceRoll, abilityModifier } from "../Maths";
import { useState, useEffect } from "react";

const Initiative = ({ encounter, setEncounter, windows, setWindows }) => {
    const [ initiative, setInitiative ] = useState()
    const [sources, setsources] = useState([])

    useEffect(() => {
        encounter.CombatantList.forEach(v => {
            console.log(v.name);
          });
        const s = []
        encounter.CombatantList.forEach(v => {
            if (v.source && !s.includes(v.source)) {
                s.push(v.source)
            }
        });
        setsources(s)
        return () => {
            
        }
    }, [encounter])

    const rollGroup = (id) => {
        const intitBonus = encounter.CombatantList.filter(c => { return c.source === id}).[0].dex
        const roll = diceRoll(2,20,abilityModifier(intitBonus))
        window.alert("Group initiative rolled is "+roll[2])
    }

    return (
        <div className="widget">
            <p>Run initiative</p>
            
            {/* Group for player characters */}
            {encounter.CombatantList.filter((c) => { return c.player === true }).map((combatant) => (
                <div key={ combatant.id } className="flex-row">
                    <div style={{"width": "30ch"}}>{combatant.name}</div>
                    <input className="btn blue" type="button" value={abilityModifier(combatant.dex)} style={{"width": "10ch"}}/>
                    <input type="number" style={{"width": "8ch"}}></input>
                </div>
            ))}
            <hr />
            {/* Group monsters into sections with a group roll button */}
            {sources.map(g => (
                <>
                    {encounter.CombatantList.filter((c) => { return c.source === g }).map(c => (
                        <div key={ c.id } className="flex-row">
                            <div style={{"width": "30ch"}}>{c.name}</div>
                            <input className="btn blue" type="button" value={abilityModifier(c.dex)} style={{"width": "10ch"}}/>
                            <input type="number" style={{"width": "8ch"}}></input>
                        </div>
                        
                        // <p>{c.name}</p>
                    ))}
                    <div className="flex-row">
                        <input className="btn green" type="button" value="Roll Group" onClick={() => {rollGroup(g)}}></input>
                    </div>
                </>
            ))}
        </div>
    );
}
 
export default Initiative;