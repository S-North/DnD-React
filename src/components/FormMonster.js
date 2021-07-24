import { useState } from "react";
import { useHistory } from "react-router";

const FormMonster = ({ addItem, setWidget }) => {
    const history = useHistory();
    const collection = "monsters";
    const types = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [ type, setType] = useState();
    const [ac, setAc] = useState(``);
    const [hp, setHp] = useState(``);
    const [cr, setCr] = useState(``);
    const [str, setStr] = useState("10");
    const [dex, setDex] = useState("10");
    const [con, setCon] = useState("10");
    const [int, setInt] = useState("10");
    const [wis, setWis] = useState("10");
    const [cha, setCha] = useState("10");


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, type, ac, hp, cr, str, dex, con, int, wis, cha }
        console.log(data);
        addItem(collection, data);
        setWidget({"edit": false});
        history.push("/");
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
                <label>HP</label>
                <input
                    className="input-text"
                    name='Name' 
                    type='number'
                    required
                    value={ hp }
                    onChange={e => setHp(e.target.value)}
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
                    <label>STR</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ str }
                        onChange={e => setStr(e.target.value)}/>
                    <label>DEX</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ dex }
                        onChange={e => setDex(e.target.value)} />
                    <label>CON</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ con }
                        onChange={e => setCon(e.target.value)}/>
                </div>
                <div className="flex-row">
                    <label>INT</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ int }
                        onChange={e => setInt(e.target.value)}
                    />
                    <label>WIS</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ wis }
                        onChange={e => setWis(e.target.value)}
                    />
                    <label>CHA</label>
                    <input
                        className="input-text"
                        name='Name' 
                        type='number'
                        required
                        value={ cha }
                        onChange={e => setCha(e.target.value)}
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