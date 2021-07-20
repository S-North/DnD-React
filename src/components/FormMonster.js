import { useState } from "react";
import { useHistory } from "react-router";

const FormMonster = ({ addItem, setWidget }) => {
    const history = useHistory();
    console.log(addItem);
    const collection = "monsters";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [ac, setAc] = useState(``);
    const [hp, setHp] = useState(``);
    const [cr, setCr] = useState(``);
    const [type, setType] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, ac, hp, cr, type }
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
                <input
                    className="input-text"
                    name='type' 
                    type='text'
                    required
                    value={ type }
                    onChange={e => setType(e.target.value)}
                />
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