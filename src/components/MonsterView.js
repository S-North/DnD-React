import { useLocation } from "react-router";
import ActionList from "./ActionList";

const MonsterView = ({ deleteItem, addItem, config, setConfig }) => {
    const location = useLocation();
    const collection = "monsters";
    const monster = location.state.item;
    // const config = location.state.config;
    console.log(deleteItem, monster.id, collection)

    return (
        <>
            <div className="main-header">
            <button className="btn red float-right" onClick={ () => deleteItem(monster.id, collection) }>Delete Monster</button>
                <h1>Monster Overview: { monster.name }</h1>
                <div className="widget">
                    <p>{ monster.description }</p>
                </div>
            </div>

            <div className="section d-md-columns">
                <div className="widget border-box">

                    <div className="flex-row">
                        <div>Type: { monster.type }</div>
                        <div>CR: { monster.cr }</div>
                        <div>AC: { monster.ac }</div>
                    </div>

                    <div className="flex-row">
                        {monster.hitDice && <div>Dit Dice: { monster.hitDice.hdNumber }d{monster.hitDice.hdDice }+{monster.hitDice.hdBonus }</div>}
                        <div>HP: { monster.hp }</div>
                    </div>

                    <div className="flex-row">
                        <div>STR: { monster.str }</div>
                        <div>DEX: { monster.dex }</div>
                        <div>CON: { monster.con }</div>
                        <div>INT: { monster.int }</div>
                        <div>WIS: { monster.wis }</div>
                        <div>CHA: { monster.cha }</div>
                    </div>
                </div>

                {monster.actions && <ActionList 
                    title="Traits"
                    description=""
                    buttonText="New Trait"
                    items={ monster.traits }
                    route="/trait"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>}
                
                {monster.actions && <ActionList 
                    title="Actions"
                    description=""
                    buttonText="New Action"
                    items={ monster.actions }
                    route="/action"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>}
                
                {monster.actions && <ActionList 
                    title="Legendary"
                    description={ monster.legendary.description }
                    buttonText="New Legendary"
                    items={ monster.legendaryActions }
                    route="/legendary"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>}
            </div>
        </>
    );
}
 
export default MonsterView;