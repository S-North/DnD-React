import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import Nav from './Nav';
import Toolbar from './Toolbar';

const Equipment = () => {
    const { settings, equipment } = useContext(AppContext);
    const [ weapons, setWeapons ] = useState([])
    const [ magicitems, setMagicItems ] = useState([])

    useEffect(() => {
        console.log("useEffect running");
        setWeapons([...equipment.list.filter(weapon => {return (weapon.type === "M" || weapon.type === "R")})]);
        setMagicItems([...equipment.list.filter(weapon => {return weapon.magic})]);
    
        return () => {}
    }, [equipment])

    const truncate = (string="", maxlength) => {
        if (string.length > maxlength) {
            return `${string.slice(0, maxlength)}...`
        } else {
            return string
        }
    }

    return (
        <>
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav location="equipment"></Nav>
            <main>
                <section>
                    <div className="one-column">
                        <h2>Equipment List</h2>

                        {weapons.sort((a,b) => {return a.name - b.name}).map(weapon => (
                                <div key={weapon.name} className="list-item">
                                    <Link key={equipment.name} to={`/equipment/${equipment.id}`}>
                                        <div className="link">
                                                <h2>{weapon.name}</h2>
                                                <em>{truncate(weapon.text[0], 50)}</em>
                                                <hr/>
                                                <p>Damage: {weapon.dmg1} Damage Type: {weapon.dmgType} Properties: {weapon.property}</p>
                                        </div>
                                    </Link>

                                    <div><FaWindowClose 
                                        style={{"cursor": "pointer"}} 
                                        color="red"
                                        // onClick={() => {deleteItem("campaigns", campaign.id)}} 
                                        />
                                    <FaEdit 
                                        style={{"cursor": "pointer"}} 
                                        color="grey"
                                        // onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaign"})}} 
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="one-column">
                        <h2>Magic Items</h2>

                        {magicitems.sort((a,b) => {return a.name - b.name}).map(weapon => (
                                <div key={weapon.name} className="list-item">
                                    <Link key={equipment.name} to={`/equipment/${equipment.id}`}>
                                        <div className="link">
                                                <h2>{weapon.name}</h2>
                                                <em>{truncate(weapon.text[0], 50)}</em>
                                                <hr/>
                                                <p>Damage: {weapon.dmg1} Damage Type: {weapon.dmgType} Properties: {weapon.property}</p>
                                        </div>
                                    </Link>

                                    <div><FaWindowClose 
                                        style={{"cursor": "pointer"}} 
                                        color="red"
                                        // onClick={() => {deleteItem("campaigns", campaign.id)}} 
                                        />
                                    <FaEdit 
                                        style={{"cursor": "pointer"}} 
                                        color="grey"
                                        // onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaign"})}} 
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </main>

        </>
    );
}

export default Equipment