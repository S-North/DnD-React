import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from 'react-router-dom';

const Toolbar = () => {
    const { settings } = useContext(AppContext)

    return (
        <aside>
            <Link to={'/'}>Home</Link><br></br>
            <Link to={'/monsters'}>Monsters</Link><br></br>
            <Link to={'/equipment'}>Equipment</Link><br></br>
            <Link to={'/spells'}>Spells</Link>
            <hr></hr>
            <Link to={'/spells'}>Dice Roller</Link>
            <div style={{"minHeight": "10ch"}}></div>
            <Link to={'/spells'}>Loot Gen</Link>
            <div style={{"minHeight": "10ch"}}></div>
            <Link to={'/spells'}>Encounter Log</Link>
        </aside>
    );
}

export default Toolbar;