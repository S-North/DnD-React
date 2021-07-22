import FilterMonsters from "./FilterMonsters";

const MonsterHome = ({ monsters, addItem, deleteItem }) => {
    
    return (
        <>
            <div className="main-header">
                <h1>Monster Home</h1>
            </div>
            {/* <div className="section"> */}
                <FilterMonsters items={ monsters} addItem={ addItem } deleteItem={ deleteItem }></FilterMonsters>
            {/* </div> */}
        </>
    );
}
 
export default MonsterHome;