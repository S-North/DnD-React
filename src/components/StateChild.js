import { useLocation } from 'react-router-dom';

const StateChild = (props) => {
    const location = useLocation();

    return (
        <>
        <h2>Child Stuff</h2>
        <p>{location.state.data.title}</p>
        </>
    );
}
 
export default StateChild;