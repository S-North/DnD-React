import { useState } from "react";
import { Link } from 'react-router-dom';

const StateParent = () => {
    const [ data, setData ] = useState(
        {
            "title": "My data passed into the child"
        }
    );

    return (
        <>
        <h1>Parent</h1>
        <Link to={{ pathname: "/parent/child",
                    state: {data} }}>
            Link
        </Link>
        </>
    );
}
 
export default StateParent;