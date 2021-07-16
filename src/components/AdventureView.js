import { useLocation } from "react-router";
import ItemList from './ItemList';

const AdventureView = () => {
    const location = useLocation();
    const adventure = location.state.item;
    const config = location.state.config;
    console.log(config);
    console.log(adventure);

    return (
        <>
            <div className="main-header">
                <h1>Adventure Overview</h1>
                <h2>{ adventure.name }</h2>
                <p>{ adventure.description }</p>
            </div>
            <div className="section">
                <ItemList 
                    title="Encounters"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Encounter"
                    items={ adventure.encounters }
                    route="/encounter"
                    config={ config } 
                />
                <ItemList 
                    title="Adventure Notes"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New Note"
                    items={ adventure.notes }
                    route="/note"
                    config={ config } 
                />
                 <ItemList 
                    title="Adventure NPCs"
                    description="Please select an encounter below to view and run the encounter."
                    buttonText="New NPC"
                    items={ adventure.npcs }
                    route="/npc"
                    config={ config } 
                />
            </div>
        </>
    );
}
 
export default AdventureView;