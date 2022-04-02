import { Link } from 'react-router-dom';
import background from '../assets/maxresdefault.jpg'

const Navbar = (props) => {
    const monsters = props.monsters;
    const config = props.config;

    return (
        <header style={{ backgroundImage: "url(" + background + ")"}}>
            <div className="container">
                <h1>D&D Campaign Tracker</h1>
                <nav>
                    <Link to="/">Home</Link>
                    
                    <Link to={{
                        pathname: "/monsters",
                        state: { monsters, config }
                    }}>Monsters</Link>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;