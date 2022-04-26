import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useParams, Link } from 'react-router-dom';

import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import BasicForm from "./forms/BasicForm";
import CharacterForm from './forms/CharacterForm';

const Campaign = () => {
    const { id } = useParams();
    const { settings, campaigns, adventures, characters, encounters, addItem, deleteItem, editItem, isSignedIn } = useContext(AppContext);
    const [ campaign, setCampaign ] = useState(campaigns.list.filter(f => { return f.id === id})[0]);
    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })

    useEffect(() => {
      setCampaign(campaigns.list.filter(f => { return f.id === id})[0])
      return () => {
      }
    }, [campaigns])

    const truncate = (string="", maxlength) => {
        if (string.length > maxlength) {
            return `${string.slice(0, maxlength)}...`
        } else {
            return string
        }
    }

    const getDateTime = () => {
        const datetime = new Date();
        let day = datetime.getDate();
        let month = datetime.getMonth()+1;//January is 0!`
        let year = datetime.getFullYear();
        let hour = datetime.getHours();
        let minute = datetime.getMinutes();
        let second = datetime.getSeconds();
        if(month<10){month='0'+month}
        if(day<10){day='0'+day}
        if(hour<10){hour='0'+hour}
        if(minute<10){minute='0'+minute}
        if(second<10){second='0'+second}
        return `${year}:${month}:${day}:${hour}:${minute}:${second}`
    }

    const addCharacter = (character) => {
        console.log(character)
        switch (!character.id) {
            default:
                console.log("id is not empty. Edit campaign");
                console.log(Date());
                console.log(character);
                editItem("characters", {...character, "modified": getDateTime()}, character.id);
                setModal({"on": false});
                break
            case true:
                console.log("id is empty. Create new campaign");
                console.log(character);
                console.log(Date());
                addItem("characters", {...character, "id": uuidv4(), "campaignId": id, "modified": getDateTime(), enemy: "pc"});
                setModal({"on": false});
        }
    }
    
    const addAdventure = (adventure) => {
        switch (!adventure.id) {
            default:
                console.log("id is not empty. Edit campaign");
                console.log(Date());
                console.log(adventure);
                editItem("adventures", {...adventure, "modified": getDateTime()}, adventure.id);
                setModal({"on": false});
                break
            case true:
                console.log("id is empty. Create new campaign");
                console.log(campaign);
                console.log(Date());
                addItem("adventures", {...adventure, "id": uuidv4(), "campaignId": id, "modified": getDateTime()});
                setModal({"on": false});
        }
    }
    return (
        <>
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav campaign={campaign} location="campaign"></Nav>
            <main>
                {/* modal window */}
                {modal.on && <div id="modal-window" class="modal">
                    {/* Modal content */}
                    <div class="modal-content">
                        <span class="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                        {modal.type === "adventure" &&
                        <>
                            <h3>Edit Adventure</h3>
                            <BasicForm data={selected} updateFnc={addAdventure}></BasicForm>
                        </>}

                        {modal.type === "character" &&
                        <>
                            <h3>Edit Character</h3>
                            <CharacterForm data={selected} updateFnc={addCharacter}></CharacterForm>
                        </>}
                    </div>
                </div>}
                
                <section>
                    <div className="one-column">
                        <h2>Adventures</h2>
                        <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "adventure"}))}}>New</button>

                        {adventures.list.filter(f => {return f.campaignId === id}).sort((a,b) => {return a.name < b.name}).map(adventure => (
                            <div key={adventure.id} className="list-item">
                                <Link key={adventure.id} to={`/adventure/${adventure.id}`}>
                                    <div className="link">
                                            <h2>{adventure.name}</h2>
                                            <em>{truncate(adventure.description, 50)}</em>
                                    </div>
                                </Link>

                                <div><FaWindowClose 
                                    style={{"cursor": "pointer"}} 
                                    color="red"
                                    onClick={() => {deleteItem("adventures", adventure.id)}} />
                                <FaEdit 
                                    style={{"cursor": "pointer"}} 
                                    color="grey"
                                    onClick={() => {setSelected(adventure); setModal({"on": true, "type": "adventure"})}} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="one-column">
                        <h2>Characters</h2>
                        <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "character"}))}}>New</button>

                        {characters.list.filter(f => {return f.campaignId === id}).sort((a,b) => {return a.name < b.name}).map(character => (
                            <div key={character.id} className="list-item">
                                <Link to={`/character/${character.id}`}>
                                    <div className="link">
                                            <h2>{character.name}</h2>
                                            <em>{truncate(character.description, 50)}</em>
                                    </div>
                                </Link>

                                <div><FaWindowClose 
                                    style={{"cursor": "pointer"}} 
                                    color="red"
                                    onClick={() => {deleteItem("characters", character.id)}} />
                                <FaEdit 
                                    style={{"cursor": "pointer"}} 
                                    color="grey"
                                    onClick={() => {setSelected(character); setModal({"on": true, "type": "character"})}} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="one-column">
                        <h2>Running Encounters</h2>
                        {encounters && encounters.list.filter(e => { return e.campaignId === id && e.mode === "running"}).map(encounter => (
                        <div key={encounter.id} className="list-item">
                            <Link to={`/encounter/${encounter.id}`}>
                                <h2>{encounter.name}</h2>
                                <p>{truncate(encounter.description, 50)}</p>
                            </Link>
                        </div>

                        ))
                        }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Campaign;