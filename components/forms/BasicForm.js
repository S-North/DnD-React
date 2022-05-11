import { useState, useEffect } from "react";

const BasicForm = ({data, updateFnc, mongoCollection}) => {
    // console.log(data, updateFnc)
    const [ item, setItem ] = useState({"name": "", "description": ""});

    useEffect(() => {
        if (data) {
            setItem({...data})
        }
      return () => {}
    }, [data])
    
    return (
        <>
            {item && <form className="form" onSubmit={(e) => {e.preventDefault(); updateFnc(mongoCollection, item)}}>
                <label>Name</label>
                <input
                    className="input-text"
                    name='Name' 
                    type='text'
                    required
                    value={ item.name }
                    onChange={e => setItem({...item, "name": e.target.value})}
                />
                <label>Description</label>
                <textarea
                    className="input-text"
                    name='Description'
                    required
                    value={ item.description }
                    onChange={e => setItem({...item, "description": e.target.value})}
                />
                <button
                    className='btn green'
                    type='submit' 
                    value='Save Campaign'
                    
                >Add</button>
            </form>}
        </>
    );
}

export default BasicForm