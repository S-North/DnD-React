import { useState } from "react";
import FormCrSelect from "./FormCrSelect";
import ItemList from "./ItemList";

const FilterMonsters = ({ items: monsters, addItem, deleteItem}) => {
    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("21");
    const [ type, setType ] = useState("All");
    const types = ["All", "Dragon", "Monstrosity", "Aberation", "Humanoid"];
    const crRange = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"];

    const filtered = (monsters) => {
        let items = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(search)})
            .filter((monster) => { return monster.cr >= parseInt(minCr) })
            .filter((monster) => { return monster.cr <= parseInt(maxCr) });
        if (type !== "All") {
            items = items.filter((item) => { return item.type === type })}
        return items
        }

    return (
        <>
            <div className="section">
                <label>Search</label>
                <input className="input-text" name='search' type='text' value={ search } onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="section">
            <div className="flex-row">
                <FormCrSelect title="Minimum CR" value={ minCr } values={ crRange } setState={ setMinCr }></FormCrSelect>
                <FormCrSelect title="Maximum CR" value={ maxCr } values={ crRange } setState={ setMaxCr }></FormCrSelect>
                <FormCrSelect title="Type" values={ types } value={ type } setState={ setType } />
            </div>
            </div>
            <ItemList
                title="Monsters"
                description="Use the search & filters to find the right monster for the right occasion."
                buttonText="New Monster"
                items={ filtered(monsters) }
                route="/monster"
                addItem={ addItem }
                deleteItem={ deleteItem }/>
        </>
    );
}
 
export default FilterMonsters;