import { useState, useEffect } from "react";

const BasicForm = ({data, updateFnc, firebaseCol}) => {
    console.log(data, updateFnc)
    const [ item, setItem ] = useState({"name": "", "description": ""});

    useEffect(() => {
        if (data) {
            setItem({...data})
        }
      return () => {}
    }, [data])
    
    return (
        <>
            {item && <form className="form">
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
                    type='button' 
                    value='Save Campaign'
                    onClick={(e) => {updateFnc(firebaseCol, item)}}
                >Add</button>
            </form>}
        </>
    );
}

export default BasicForm