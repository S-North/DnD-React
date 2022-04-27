import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { FaWindowClose } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import FormMonster from "./FormMonster";
import tarrasque from '../tarrasque'

const MonsterList = ({setSelected, deleteMonster, addMonster}) => {
    console.log(tarrasque)
    console.log(setSelected)
    const { monsterBook, monsterTemplate, addItem, deleteItem, crRange, monsterTypes } = useContext(AppContext);
    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("30");
    const [ type, setType ] = useState("All");

    const truncate = (string, maxlength) => {
        if (string.length > maxlength) {
            return `${string.slice(0, maxlength)}...`
        } else {
            return string
        }
    }

    const filtered = (monsters, filter="name") => {
        let items = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(search)})
            .filter((monster) => { return monster.cr >= parseFloat(minCr) })
            .filter((monster) => { return monster.cr <= parseFloat(maxCr) });
        if (type !== "All") {
            items = items.filter((item) => { return item.type === type })}
        return items.sort()
        }
    
    return (
        <>
            {addMonster && <button className="green" onClick={() => {setSelected({...monsterTemplate.list})}}>New Monster</button>}

            {/* Search bar and filters */}
            <details open={false} id="details" style={{"flexGrow": 0}}>
                <summary>Filters</summary>
                <form>
                    <div className="section">
                        <input className="input-text" name='search' type='text' value={ search } onChange={e => setSearch(e.target.value)} placeholder="Search" />
                    </div> 
                    <div className="section">
                        <div className="flex-row">
                            <FormSelect title="Minimum CR" value={ minCr } values={ crRange.list } setState={ setMinCr } />
                            <FormSelect title="Maximum CR" value={ maxCr } values={ crRange.list } setState={ setMaxCr } />
                            <FormSelect title="Type" values={ monsterTypes.list } value={ type } setState={ setType } />
                        </div>
                    </div>
                </form>
            </details>

            {filtered(monsterBook.list).map(monster => (
                <div key={monster.id} className="list-item">
                    <div key={monster.id} style={{"cursor": "pointer"}} onClick={() => {setSelected(monster)}}>
                        <div className="link">
                                <h2>{monster.name}</h2>
                                <em>{truncate(monster.description, 50)}</em>
                        </div>
                    </div>
                    <div>
                        {deleteMonster && <FaWindowClose 
                            style={{"cursor": "pointer"}} 
                            color="red"
                            // onClick={() => {deleteItem("monsters", monster.id)}} />
                            onClick={() => {deleteMonster(monster)}} />}

                    </div>
                </div>
            ))}
        </>
    );

}

const FormSelect = ({ title, value, setState, values }) => {
    return (
        <>
            <div className="horizontal">
                <p>{ title }</p>
                <select name="minCr" id="minCr" value={ value } type='number' onChange={e => setState(e.target.value)}>
                    {values && values.map((value) => (
                        <option value={ value } key={ value }>{ value } </option>
                        ))}
                </select>
            </div>
        </>
    );
}

const MonsterBook = () => {
    const { settings, monsterBook, monsterTypes, monsterTemplate, addItem, deleteItem, editItem } = useContext(AppContext);
    const [ search, setSearch ] = useState("");
    const [ minCr, setMinCr ] = useState("0");
    const [ maxCr, setMaxCr ] = useState("30");
    const [ type, setType ] = useState("All");
    const [ selected, setSelected ] = useState();

  
    const addMonster = (monster) => {
        addItem("monsters", monster);
        setSelected(monsterTemplate)
    }

    const deleteMonster = (monster) => {
        console.log(monster)
        deleteItem("monsters", monster.id)
    }

    const editMonster = (monster) => {
        console.log(monster)
        if (monster && monster.id) {
                editItem("monsters", monster, monster.id);
            } else if (monster && !monster.id){
                addItem("monsters", {...monster, "id": uuidv4(), enemy: "monster"})
            }
    }

    return (
        <>
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav location="monsters"></Nav>
            <main>
                <section>
                    <div className="one-column">
                        <h2>Monsters</h2>
                        <MonsterList setSelected={setSelected} deleteMonster={deleteMonster} addMonster={addMonster}></MonsterList>

                    </div>
                    <div className="column-wide">
                        <FormMonster monster={selected} dbUpdate={editMonster}></FormMonster>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MonsterBook;
export { MonsterList };