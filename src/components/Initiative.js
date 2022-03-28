import { diceRoll, abilityModifier } from "../Maths";
import { useState, useEffect } from "react";

const Initiative = ({ encounter, players, setEncounter, windows, setWindows, campaignID, dbUpdate }) => {
    const [ initiative, setInitiative ] = useState([])
    const [ sources, setsources ] = useState([])
    const [ pcs, setPcs ] = useState([])

    useEffect(() => {
        setInitiative(encounter.initiative) // populate initiative state with existing data

        // get a list of all monster types
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

    // useEffect(() => {
    //     setPcs(initiative.filter(p => { return p.enemy === "pc"}), console.log(pcs))
    //   return () => {
    //   }
    // }, [initiative])
    

    const rollMonster = (id) => {
        const init = initiative.filter((m) => { return m.id === id})[0]
        const roll = diceRoll(1,20,abilityModifier(encounter.monsters.filter((m) => { return m.id === id})[0].dex))
        setInitiative([...initiative.filter(f => { return f.id !== id}), {...init, "id": id, "init": roll[2]}])
    }

    const rollPlayer = (id) => {
        const init = initiative.filter((p) => { return p.id === id})[0]
        const roll = diceRoll(1,20,abilityModifier(players.filter((p) => { return p.id === id})[0].dex))
        setInitiative([...initiative.filter(f => { return f.id !== id}), {...init, "id": id, "init": roll[2]}])
    }
    
    const rollG = (gid) => {
        const init = initiative.filter((m) => { return m.source === gid})
        const roll = diceRoll(1,20,abilityModifier(encounter.monsters.filter((m) => { return m.source === gid})[0].dex))
        const update = []
        init.forEach(m => {update.push({...m, "init": roll[2]})})
        setInitiative([...initiative.filter(f => { return f.source !== gid}), ...update])
    }

    const rollMonsters = (id) => {
        const init = initiative.filter((m) => { return m.enemy === "monster"})
        const update = [...initiative.filter(f => { return f.enemy !== "monster"})]
        console.log(update)
        sources.forEach(s => {
            const roll = diceRoll(1,20,0)
            console.log(`source group ${s} dice roll = ${roll[2]}`)
            init
                .filter(m => { return m.source === s})
                .forEach(m => {
                    console.log(`monster ${m.id}: roll ${roll[2]} + ${abilityModifier(encounter.monsters.filter((f) => { return f.id === m.id})[0].dex)}`)
                    update.push({...m, "init": roll[2]+abilityModifier(encounter.monsters.filter((f) => { return f.id === m.id})[0].dex)})
                    console.log(update)
                })
            })
        setInitiative([...update])
    }

    const save = () => {
        console.log(encounter)
        console.log(initiative)

        // setEncounter({...encounter, initiative})
        dbUpdate("encounters", {...encounter, initiative}, encounter.id, "PUT"); // save encounter to DB
        setWindows({...windows, "initiative": false, "turn": true}) // display windows for running encounter
    }
    
    return (
        <div className="widget">
            <p>Run initiative</p>
            {/* Group for player characters */}
            {initiative
                .filter((p) => { return p.enemy === "pc" })
                .sort((a, b) => a.id > b.id ? 1 : -1) // sorting on strings from here https://stackoverflow.com/a/43572944
                .map(p => (
                    <div key={ p.id } className="flex-row">
                        <div style={{"width": "30ch"}}>{p.name}</div>
                        <input 
                            type="button" 
                            value={abilityModifier(players.filter((player) => { return player.id === p.id})[0].dex)} 
                            onClick={() => {rollPlayer(p.id)}} 
                            className="btn green" 
                            style={{"width": "10ch"}}/>
                        <input 
                            type="number" 
                            id={p.id} 
                            name={p.id}
                            onChange={(e) => setInitiative([...initiative.filter(f => { return f.id !== p.id}), {...p, "init": e.target.value}])}
                            style={{"width": "5ch"}} />
                    </div>
            ))}
            <hr />

            {/* Group monsters into sections with a group roll button */}
            <input type="button" className="btn green" value="roll monsters" onClick={e => {rollMonsters()}} />
            {sources.map(g => (
                <div key={g}>
                    <hr />
                    {initiative
                        .filter((c) => { return c.source === g })
                        .sort((a, b) => a.id > b.id ? 1 : -1) // sorting on strings from here https://stackoverflow.com/a/43572944
                        .map(c => (
                            <div key={ c.id } className="flex-row">
                                <div style={{"width": "30ch"}}>{encounter.monsters.filter((m) => { return m.id === c.id})[0].name}</div>
                                <input 
                                    type="button" 
                                    value={abilityModifier(encounter.monsters.filter((m) => { return m.id === c.id})[0].dex)} 
                                    onClick={() => {rollMonster(c.id, c.source)}} 
                                    className="btn green" 
                                    style={{"width": "10ch"}}/>
                                <p>{c.init}</p>
                            </div>
                        ))
                    }
                    {/* <div className="flex-row">
                        <input className="btn green" type="button" value="Roll Group" onClick={() => {rollG(g)}}></input>
                    </div> */}
                </div>
            ))}
        <hr />
        <input type="button" className="btn green" value="Save" onClick={e => {save()}} />
        </div>
    );
}
 
export default Initiative;