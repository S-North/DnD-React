import { useLocation } from "react-router";
import ItemList from './ItemList';

const CampaignView = ({ deleteItem }) => {
    const location = useLocation();
    const collection = "campaigns";
    const campaign = location.state.item;
    const config = location.state.config;

    return (
        <>
            <div className="main-header">
                <button className="btn red float-right" onClick={ () => deleteItem(campaign.id, collection) }>Delete Campaign</button>
                <h1>Campaign Overview</h1>
                <h2>{ campaign.name }</h2>
                <p>{ campaign.description }</p>
            </div>
            <div className="section">
                <ItemList 
                    title="Adventures"
                    description="Please select an adventure below to access adventure notes, npcs and encounters."
                    buttonText="New Adventure"
                    items={ campaign.adventures }
                    route="/adventure"
                    config={ config }

                />
                <ItemList 
                    title="NPCs"
                    description="Please select an NPC below to view their details"
                    buttonText="New NPC"
                    items={ campaign.npcs }
                    route="/npc"
                    config={ config } 
                />
                <ItemList 
                    title="Notes"
                    description="Campaign notes"
                    buttonText="New Note"
                    items={ campaign.notes }
                    route="/note"
                    config={ config } 
                />
            </div>
        </>
    );
}
 
export default CampaignView;