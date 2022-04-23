import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Nav = ({ campaign, adventure, encounter, location }) => {
    const { settings } = useContext(AppContext)

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                {location && location === "monsters" && <Link to={`/monsters`}>> Monsters</Link>}
                {location && location === "equipment" && <Link to={`/equipment`}>> Equipment</Link>}
                {location && location === "spells" && <Link to={`/spells`}>> Spells</Link>}
                
                {campaign && campaign.id && location !== "campaign" && 
                    <Link className="tooltip" to={`/campaign/${campaign.id}`}>> {campaign.name}
                        <span class="tooltiptext">{campaign.description}</span>
                    </Link>}
                {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>> {campaign.name}</p>}
                
                {adventure && adventure.id && location !== "adventure" && 
                    <Link className="tooltip" to={`/adventure/${adventure.id}`}>> {adventure.name}
                        <span class="tooltiptext">{adventure.description}</span>
                    </Link>}
                {adventure && adventure.id && location === "adventure" && <p style={{"color": "var(--paper)"}} title={adventure.description}>> {adventure.name}</p>}

                {encounter && encounter.id && location !== "encounter" && <Link to={`/encounter/${encounter.id}`} title={encounter.description}>> {encounter.name}</Link>}
                {encounter && encounter.id && location === "encounter" && <p style={{"color": "var(--paper)"}} title={encounter.description}>> {encounter.name}</p>}
            </nav>
            <div onClick={() => {settings.update({...settings.list, "toolbarOpen": !settings.list.toolbarOpen})}} id="toolbar-button">{settings.list.toolbarOpen ? <FaChevronRight /> : <FaChevronLeft />}</div>
        </header>
    );
}

export default Nav;