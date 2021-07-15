import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const campaigns = props.campaigns;
    const monsters = props.monsters;
    const config = props.config;

    return (
        <div className="navbar" style={{ 
            backgroundImage: `url("https://media.dnd.wizards.com/styles/news_banner_header/public/images/head-banner/04-PRODUCT-INFO_Tabletop_Hero_PHB.jpg")` 
          }}>
            <div className="container">
                <h1>DnD Campaign Tracker</h1>
                <Link to="/">Home</Link>
                <Link to={{
                    pathname: "/campaigns",
                    state: { campaigns, config }
                }}>Campaigns</Link>
                <Link to={{
                    pathname: "/monsters",
                    state: { monsters, config }
                }}>Monsters</Link>
                <Link to="/parent">State Parent</Link>

            </div>
        </div>
    );
}
 
export default Navbar;