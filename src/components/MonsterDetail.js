import { useLocation } from "react-router";

const MonsterDetail = () => {
    const location = useLocation();
    const monster = location.state.item;
    console.log(location);
    console.log(monster);

    return (
        <>
            <h1>{ monster.name }</h1>
            <p>{ monster.description }</p>
        </>
    );
}
 
export default MonsterDetail;