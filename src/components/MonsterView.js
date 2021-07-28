import { useLocation } from "react-router";
import ActionList from "./ActionList";
import { abiilityModifier, diceRoll } from "../Maths";

const MonsterView = ({ deleteItem, addItem, config, setConfig }) => {
    const location = useLocation();
    const collection = "monsters";
    const monster = location.state.item;
    const handleClick = (bonus) => {
        console.log(bonus);
        const roll = diceRoll(1,20,bonus);
        alert(`Roll is ${roll[0]} and the total is ${roll[2]}`);
    }

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
                        <p><strong>Type:</strong> { monster.type }</p>
                        <p><strong>CR:</strong> { monster.cr }</p>
                        <p><strong>AC:</strong> { monster.ac }</p>
                    </div>

                    <div className="flex-row">
                        {monster.hitDice && <p><strong>Hit Dice:</strong> { monster.hitDice.hdNumber }d{monster.hitDice.hdDice }+{monster.hitDice.hdBonus }</p>}
                        <p><strong>HP:</strong> { monster.hp }</p>
                    </div>

                    <div className="flex-row">
                        <h3>STR: { monster.str } <button onClick={ () => (handleClick(abiilityModifier(monster.str))) } className="btn blue">({abiilityModifier(monster.str)})</button></h3>
                        <div>DEX: { monster.dex } <button onClick={ () => (handleClick(abiilityModifier(monster.dex))) } className="btn blue">({abiilityModifier(monster.dex)})</button></div>
                        <div>CON: { monster.con } <button onClick={ () => (handleClick(abiilityModifier(monster.con))) } className="btn blue">({abiilityModifier(monster.con)})</button></div>
                        <div>INT: { monster.int } <button onClick={ () => (handleClick(abiilityModifier(monster.int))) } className="btn blue">({abiilityModifier(monster.int)})</button></div>
                        <div>WIS: { monster.wis } <button onClick={ () => (handleClick(abiilityModifier(monster.wis))) } className="btn blue">({abiilityModifier(monster.wis)})</button></div>
                        <div>CHA: { monster.cha } <button onClick={ () => (handleClick(abiilityModifier(monster.cha))) } className="btn blue">({abiilityModifier(monster.cha)})</button></div>
                    </div>
                </div>

                {monster.traits && <ActionList 
                    title="Traits"
                    description=""
                    buttonText="+"
                    items={ monster.traits }
                    route="/trait"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>}
                
                {monster.actions && <ActionList 
                    title="Actions"
                    description=""
                    buttonText="+"
                    items={ monster.actions }
                    route="/action"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>}
                
                {monster.legendary && <ActionList 
                    title="Legendary"
                    description={ monster.legendary.description }
                    buttonText="+"
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