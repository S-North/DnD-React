import { useLocation } from "react-router";

const MonsterView = ({ deleteItem }) => {
    const location = useLocation();
    const collection = "monsters";
    const monster = location.state.item;
    // const config = location.state.config;
    console.log(deleteItem, monster.id, collection)

    return (
        <>
            <div className="main-header">
            <button className="btn red float-right" onClick={ () => deleteItem(monster.id, collection) }>Delete Monster</button>
                <h1>Monster Overview</h1>
                <h2>{ monster.name }</h2>
                <p>{ monster.description }</p>
            </div>
            <div className="section">
                <p>Type: { monster.type }</p>
                <p>AC: { monster.ac }</p>
                <p>HP: { monster.hp }</p>
            </div>
        </>
    );
}
 
export default MonsterView;