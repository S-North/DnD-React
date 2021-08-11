import { useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import { diceRoll, abiilityModifier } from '../Maths';

const FormMonster = ({ addItem, setWidget }) => {
    const history = useHistory();
    const collection = "monsters";
    const types = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [ type, setType] = useState();
    const [ac, setAc] = useState(``);
    const [cr, setCr] = useState(``);
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
    // const [ traits, setTraits ] = useState([])
    // const [ actions, setActions ] = useState([])
    // const [ legendary, setLegendary ] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        const hitDice = {
            "hdNumber": hdNumber,
            "hdDice": hdDice,
            "hdBonus": hdBonus
        }
        const data = { name, description, type, ac, hp, cr, str, dex, con, int, wis, cha, hitDice, "id": uuidv4(), "traits": [], "actions": [], "legendary": {}, "legendaryActions": [] }
        console.log(data);
        addItem(collection, data);
        setWidget({"edit": false});
        history.push("/");
    }

    const handleHitdice = (e) => {
        e.preventDefault();
        console.log(hdNumber, hdDice, hdBonus);
        setHp(diceRoll(hdNumber, hdDice, hdBonus)[2]);
    }

    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e) }>
                <label>Name</label>
                <input
                    className="input-text"
                    name='Name' 
                    type='text'
                    required
                    value={ name }
                    onChange={e => setName(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    className="input-text"
                    name='Description'
                    required
                    value={ description }
                    onChange={e => setDescription(e.target.value)}
                />
                <div className="flex-row">
                <label>AC</label>
                <input
                    className="input-text"
                    name='ac' 
                    type='number'
                    required
                    value={ ac }
                    onChange={e => setAc(e.target.value)}
                />
                <label>CR</label>
                <input
                    className="input-text"
                    name='cr' 
                    type='text'
                    required
                    value={ cr }
                    onChange={e => setCr(e.target.value)}
                />
                <label>Type</label>
                <select name="minCr" id="minCr" onChange={e => setType(e.target.value)}>
                    {types && types.map((type) => (
                        <option value={ type } key={ type }>{ type } </option>
                        ))}
                </select>
                </div>
                <div className="flex-row">
                    <label>STR ({abiilityModifier(str)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ str }
                        onChange={e => setStr(e.target.value)}/>
                    <label>DEX ({abiilityModifier(dex)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ dex }
                        onChange={e => setDex(e.target.value)} />
                    <label>CON ({abiilityModifier(con)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ con }
                        onChange={e => setCon(e.target.value)}/>
                </div>
                <div className="flex-row">
                    <label>INT ({abiilityModifier(int)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ int }
                        onChange={e => setInt(e.target.value)}
                    />
                    <label>WIS ({abiilityModifier(wis)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ wis }
                        onChange={e => setWis(e.target.value)}
                    />
                    <label>CHA ({abiilityModifier(cha)})</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ cha }
                        onChange={e => setCha(e.target.value)}
                    />
                </div>
                <div className="flex-row">
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ hdNumber }
                        onChange={e => setHdNumber(e.target.value)}
                        />
                    <label>d</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ hdDice }
                        onChange={e => setHdDice(e.target.value)}
                        />
                    <label>+</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ hdBonus }
                        onChange={e => setHdBonus(e.target.value)}
                        />
                    <button className="btn blue" onClick={ (e) => handleHitdice(e) }>Roll</button>
                    <label>HP</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ hp }
                        onChange={e => setHp(e.target.value)}
                    />
                </div>
                <input
                    className='btn green'
                    type='submit' 
                    value='Save Monster' 
                />
            </form>
        </>
    );
}
 
export default FormMonster;