import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { abiilityModifier, xpToLevel } from "../Maths";
import { classes, races } from '../Forms';

const FormPlayer = ({ campaignId, adventureId, encounterId, addItem, setWidget, pc }) => {
    console.log(`campaignId: ${campaignId}, adventureId: ${adventureId}`)
    console.log(`22000 xp is`, xpToLevel(22000))
    if (pc === true) console.log("this is for a player character"); else console.log("this is for a non-player character")
    const collection = "players";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [ chRace, setChRace ] = useState();
    const [ chClass, setChClass ] = useState();
    const [ chLevel, setChLevel ] = useState("1");
    const [str, setStr] = useState("10");
    const [dex, setDex] = useState("10");
    const [con, setCon] = useState("10");
    const [int, setInt] = useState("10");
    const [wis, setWis] = useState("10");
    const [cha, setCha] = useState("10");
    const [hdNumber, setHdNumber] = useState(`1`);
    const [hdDice, setHdDice] = useState(`8`);
    const [hdBonus, setHdBonus] = useState(abiilityModifier(con));
    const [hp, setHp] = useState(`5`);
    const [ac, setAc] = useState(``);
    const [xp, setXp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { "id": uuidv4(), name, description, chRace, chClass, chLevel, str, dex, con, int, wis, cha, hp, ac, xp, "level": xpToLevel(xp), campaignId, adventureId, encounterId, "player": pc};
        console.log(data);
        addItem(collection, data );
        setWidget({"edit": false});
    }

    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e) }>
                    <input
                        className="input-text"
                        name='Name' 
                        type='text'
                        required
                        placeholder="name"
                        value={ name }
                        onChange={e => setName(e.target.value)}
                    />
                    <div className="flex-row">
                        <select onChange={e => setChRace(e.target.value)}>
                            {races && races.map((race) => (
                                <option value={ race } key={ race }>{ race } </option>
                                ))}
                        </select>
                        <select onChange={e => setChClass(e.target.value)}>
                            {classes && classes.map((clss) => (
                                <option value={ clss } key={ clss }>{ clss } </option>
                                ))}
                        </select>
                    </div>
                    <div className="flex-row">
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="str"
                            onChange={e => setStr(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="dex"
                            onChange={e => setDex(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="con"
                            onChange={e => setCon(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="int"
                            onChange={e => setInt(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="wis"
                            onChange={e => setWis(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="cha"
                            onChange={e => setCha(e.target.value)}
                        />
                    </div>
                    <div className="flex-row">
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="hp"
                            onChange={e => setHp(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="ac"
                            onChange={e => setAc(e.target.value)}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="xp"
                            onChange={e => setXp(e.target.value)}
                        />
                    </div>
                    <textarea
                        className="input-text"
                        name='Description'
                        required
                        placeholder="description"
                        value={ description }
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        className='btn green'
                        type='submit' 
                        value='Save Character' 
                        />
                </form>
        </>
    );
}
 
export default FormPlayer;