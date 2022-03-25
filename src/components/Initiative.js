import { abiilityModifier } from "../Maths";

const Initiative = ({ encounter, setEncounter, windows, setWindows }) => {
    return (
        <div className="widget">
            <p>Run initiative</p>
            {encounter.CombatantList.map((combatant) => (
                <div className="flex-row">
                    <div style={{"width": "30ch"}}>{combatant.name}</div>
                    <input className="btn blue" type="button" value={abiilityModifier(combatant.dex)} style={{"width": "10ch"}}/>
                    <input type="number" style={{"width": "8ch"}}></input>
                </div>
            ))}
        </div>
    );
}
 
export default Initiative;