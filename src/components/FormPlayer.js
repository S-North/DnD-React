import { useState } from "react";

const FormPlayer = ({ campaignId, adventureId, encounterId, addItem, setWidget }) => {
    console.log(`campaignId ${campaignId}, adventureId ${adventureId}`)
    const collection = "players";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        const npc = "true";
        const data = { name, description, campaignId, adventureId, encounterId, npc};
        console.log(data);
        addItem(collection, data );
        setWidget({"edit": false});
    }

    return (
        <>
        <p>Hello</p>
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