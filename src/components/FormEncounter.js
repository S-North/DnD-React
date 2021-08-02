import { useState } from "react";

const FormEncounter = ({ campaignId, adventureId, addItem, setWidget }) => {
    const collection = "encounters";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    const [location, setLocation] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, location, campaignId, adventureId, "mobList": ["players", "default"] }
        console.log(data);
        addItem(collection, data);
        setWidget({"edit": false});
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
                    <label>Location</label>
                    <input
                        className="input-text"
                        name='Location' 
                        type='text'
                        required
                        value={ location }
                        onChange={e => setLocation(e.target.value)}
                    />
                    <input
                        className='btn green'
                        type='submit' 
                        value='Save' 
                        />
                </form>
        </>
    );
}
 
export default FormEncounter;