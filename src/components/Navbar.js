import { Link } from 'react-router-dom';
import background from '../assets/maxresdefault.jpg'

const Navbar = (props) => {
    const campaigns = props.campaigns;
    const monsters = props.monsters;
    const config = props.config;

    return (
        <div className="navbar" style={{ backgroundImage: "url(" + background + ")"}}>
            <div className="container">
                <h1>D&D Campaign Tracker</h1>

                <Link to="/">Home</Link>

                <Link to={{
                    pathname: "/campaigns",
                    state: { campaigns, config }
                }}>Campaigns</Link>
                
                <Link to={{
                    pathname: "/monsters",
                    state: { monsters, config }
                }}>Monsters</Link>
            </div>
        </div>
    );
}
 
export default Navbar;