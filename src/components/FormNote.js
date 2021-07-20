import { useState } from "react";

const FormNote = ({ campaignId, adventureId, EncounterId, addItem, setWidget }) => {
    const collection = "notes";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);
    console.log(`campaign: ${campaignId}, adventure: ${adventureId}`)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, campaignId, adventureId, EncounterId }
        console.log(data);
        addItem(collection, data );
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
                    <input
                        className='btn green'
                        type='submit' 
                        value='Save Note' 
                        />
                </form>
        </>
    );
}
 
export default FormNote;