import { useState } from "react";
import { types, crRange} from '../Forms';
import FormSelect from "./FormSelect";
import ItemList from "./ItemList";

const FilterMonsters = ({ items: monsters, addItem, deleteItem }) => {
    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("30");
    const [ type, setType ] = useState("All");
    
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
            {monsters && <ItemList
                title="Monsters"
                description="Use the search & filters to find the right monster for the right occasion."
                buttonText="New Monster"
                itemStyle="item-compact"
                items={ filtered(monsters) }
                route="/monster"
                addItem={ addItem }
                deleteItem={ deleteItem }/>}
        </>
    );
}
 
export default FilterMonsters;