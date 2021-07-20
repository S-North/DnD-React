import { useState } from "react";

const FormAdventure = ({ campaignId, addItem, setWidget }) => {
    const collection = "adventures";
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description, campaignId }
        // console.log(data);
        addItem(collection, data, collection);
        setWidget({"edit": false});
        // history.push("/");
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
                        value='Save Adventure' 
                        />
                </form>
        </>
    );
}
 
export default FormAdventure;