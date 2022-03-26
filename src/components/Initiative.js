import { diceRoll, abilityModifier } from "../Maths";
import { useState, useEffect } from "react";

const Initiative = ({ encounter, players, setEncounter, windows, setWindows }) => {
    const [ initiative, setInitiative ] = useState()
    const [sources, setsources] = useState([])

    useEffect(() => {
        encounter.initiative.forEach(v => {
            console.log(v.id);
          });
        const s = []
        encounter.initiative.forEach(v => {
            if (v.source && !s.includes(v.source)) {
                s.push(v.source)
            }
        });
        setsources(s)
        return () => {
            
        }
    }, [encounter])

    const rollGroup = (sourceid) => {
        const intitBonus = encounter.monsters.filter((m) => { return m.source === sourceid})[0].dex
        const roll = diceRoll(1,20,abilityModifier(intitBonus))
        window.alert("Group initiative rolled is "+roll[0]+" + "+roll[1]+" = "+roll[2])
    }

    const rollSingle = (bonus, id) => {
        // const intitBonus = encounter.CombatantList.filter(c => { return c.source === id}).[0].dex
        const roll = diceRoll(1,20,0)
        const total = roll[2]+bonus
        window.alert("Initiative rolled is "+roll[2]+" + "+bonus+" = "+total)
    }

    return (
        <div className="widget">
            <p>Run initiative</p>
            
            {/* Group for player characters */}
            {players
                .filter((p) => { return encounter.initiative.map(e => (e.id)).includes(p.id)})
                .map((combatant) => (
                <div key={ combatant.id } className="flex-row">
                    <div style={{"width": "30ch"}}>{combatant.name}</div>
                    <input className="btn green" type="button" value={abilityModifier(combatant.dex)} onClick={() => {rollSingle(abilityModifier(combatant.dex), combatant.id)}} style={{"width": "10ch"}}/>
                    <input type="number" style={{"width": "8ch"}}></input>
                </div>
            ))}
            <hr />
            {/* Group monsters into sections with a group roll button */}
            {sources.map(g => (
                <div key={g}>
                    {encounter.initiative.filter((c) => { return c.source === g }).map(c => (
                        <div key={ c.id } className="flex-row">
                            <div style={{"width": "30ch"}}>{encounter.monsters.filter((m) => { return m.id === c.id})[0].name}</div>
                            <input className="btn green" type="button" value={abilityModifier(encounter.monsters.filter((m) => { return m.id === c.id})[0].dex)} onClick={() => {rollSingle(abilityModifier(encounter.monsters.filter((m) => { return m.id === c.id})[0].dex), c.id)}} style={{"width": "10ch"}}/>
                            <input type="number" style={{"width": "8ch"}}></input>
                        </div>
                        
                        // <p>{c.name}</p>
                    ))}
                    <div className="flex-row">
                        <input className="btn green" type="button" value="Roll Group" onClick={() => {rollGroup(g)}}></input>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Initiative;