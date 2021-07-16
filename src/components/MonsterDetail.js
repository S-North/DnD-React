import { useLocation } from "react-router";

const MonsterDetail = () => {
    const location = useLocation();
    const monster = location.state.item;
    console.log(location);
    console.log(monster);

    return (
        <>
            <div className="main-header">
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
 
export default MonsterDetail;