import { Link } from 'react-router-dom';
import background from '../assets/maxresdefault.jpg'

const Navbar = (props) => {
    const monsters = props.monsters;
    const config = props.config;

    return (
        <div className="navbar" style={{ backgroundImage: "url(" + background + ")"}}>
            <div className="container">
                <h1>D&D Campaign Tracker</h1>

                <Link to="/">Home</Link>
                
                <Link to={{
                    pathname: "/monsters",
                    state: { monsters, config }
                }}>Monsters</Link>
            </div>
        </div>
    );
}
 
export default Navbar;