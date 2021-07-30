import { useState } from "react";
import FormSelect from "./FormSelect";
import ItemList from "./ItemList";

const FilterMonsters = ({ items: monsters, addItem, deleteItem}) => {
    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("30");
    const [ type, setType ] = useState("All");
    const types = ["All", "Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];
    const crRange = ["0","0.125","0.25","0.5","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21", "30"];

    const filtered = (monsters, filter="name") => {
        let items = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(search)})
            .filter((monster) => { return monster.cr >= parseFloat(minCr) })
            .filter((monster) => { return monster.cr <= parseFloat(maxCr) });
        if (type !== "All") {
            items = items.filter((item) => { return item.type === type })}
        return items.sort((filter === "name") ? (a, b) => (a.name > b.name) - (a.name < b.name) : (a, b) => (parseFloat(a.cr) > parseFloat(b.cr)) - (parseFloat(a.cr) < parseFloat(b.cr)))
        }

    return (
        <>
            <div className="section">
                <label>Search</label>
                <input className="input-text" name='search' type='text' value={ search } onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="section">
            <div className="flex-row">
                <FormSelect title="Minimum CR" value={ minCr } values={ crRange } setState={ setMinCr } />
                <FormSelect title="Maximum CR" value={ maxCr } values={ crRange } setState={ setMaxCr } />
                <FormSelect title="Type" values={ types } value={ type } setState={ setType } />
            </div>
            </div>
            <ItemList
                title="Monsters"
                description="Use the search & filters to find the right monster for the right occasion."
                buttonText="New Monster"
                itemStyle="item-compact"
                items={ filtered(monsters) }
                route="/monster"
                addItem={ addItem }
                deleteItem={ deleteItem }/>
        </>
    );
}
 
export default FilterMonsters;