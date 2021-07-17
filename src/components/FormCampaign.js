import { useState } from "react";

const FormCampaign = () => {
    const [name, setName] = useState(``);
    const [description, setDescription] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, description}
        console.log(data);
        // // useAdd('http://192.168.1.200:8001/campaigns', data);
        
        // fetch(' http://192.168.1.200:8001/campaigns', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // }).then(() => {
        //     console.log(data);
        //     history.push('/campaigns');            
        // })
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
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
                        value='Save Campaign' 
                        />
                </form>
        </>
    );
}
 
export default FormCampaign;