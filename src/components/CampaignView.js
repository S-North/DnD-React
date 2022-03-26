import { useLocation } from "react-router";
import ItemList from './ItemList';

const CampaignView = ({ adventures, players, notes, deleteItem, addItem }) => {
    const location = useLocation();
    const collection = "campaigns";
    const campaign = location.state.item;
    console.log(`campaignView page: ${campaign.id}`)
    console.log(campaign)

    return (
        <>
            <div className="main-header">
                <button className="btn red float-right" onClick={ () => deleteItem(campaign.id, collection) }>Delete Campaign</button>
                <h1>Campaign: { campaign.name }</h1>
                <p>{ campaign.description }</p>
            </div>
            <div className="section">
                <ItemList 
                    title="Adventures"
                    description="Please select an adventure below to access adventure notes, npcs and encounters."
                    buttonText="New Adventure"
                    items={ adventures.filter((adventure) => {return adventure.campaignId === campaign.id}) }
                    route="/adventure"
                    addItem={ addItem }
                    deleteItem={ deleteItem }
                    campaignId={ campaign.id }
                    campaign={ campaign }

                />
                <ItemList 
                    title="Characters"
                    description="Player characters for this campaign"
                    buttonText="New Character"
                    items={ players.filter((character) => {return character.campaignId === campaign.id  && character.player === true})  }
                    route="/player"
                    addItem={ addItem }
                    deleteItem={ deleteItem }
                    campaignId={ campaign.id }
                />
                <ItemList 
                    title="NPCs"
                    description="Please select an NPC below to view their details"
                    buttonText="New NPC"
                    items={ players.filter((npc) => {return npc.campaignId === campaign.id && npc.npc === "true"})  }
                    route="/npc"
                    addItem={ addItem }
                    deleteItem={ deleteItem }
                    campaignId={ campaign.id }
                />
                <ItemList 
                    title="Notes"
                    description="Campaign Notes"
                    buttonText="New Note"
                    items={ notes.filter((notes) => {return notes.campaignId === campaign.id})  }
                    route="/note"
                    addItem={ addItem }
                    deleteItem={ deleteItem }
                    campaignId={ campaign.id }
                />
            </div>
        </>
    );
}
 
export default CampaignView;