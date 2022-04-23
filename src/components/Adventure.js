import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useParams, Link } from 'react-router-dom';

import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import BasicForm from "./forms/BasicForm";
import CharacterForm from './forms/CharacterForm';

const Adventure = () => {
    const { id } = useParams();
    const { settings, campaigns, adventures, encounters, addItem, deleteItem, editItem } = useContext(AppContext);
    const [ adventure, setAdventure ] = useState(adventures.list.filter(f => { return f.id === id})[0])
    const [ campaign, setCampaign ] = useState({});
    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })


    useEffect(() => {
      setAdventure(adventures.list.filter(f => { return f.id === id})[0]);    
      return () => {
      }
    }, [adventures])
    
    useEffect(() => {
      setCampaign(campaigns.list.filter(f => {return f.id === adventure.campaignId})[0])
      return () => {
      }
    }, [adventure])

    const truncate = (string, maxlength) => {
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

    const encounterAdd = (encounter) => {
        switch (!encounter.id) {
            default:
                console.log("id is not empty. Edit campaign");
                console.log(Date());
                console.log(encounter);
                editItem("encounters", {...encounter, "modified": getDateTime()}, encounter.id);
                setModal({"on": false});
                break
            case true:
                console.log("id is empty. Create new campaign");
                console.log(encounter);
                console.log(Date());
                addItem("encounters", {
                    ...encounter, 
                    "id": uuidv4(), 
                    "adventureId": id, 
                    "campaignId": adventure.campaignId, 
                    "modified": getDateTime(),
                    "initiative": [],
                    "monsters": [],
                    "mode": "editing"});
                setModal({"on": false});
        }
    }
    
    return (
        <>
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav campaign={campaign} adventure={adventure} encounter={encounters} location="adventure"></Nav>
            <main>
                {/* modal window */}
                {modal.on && <div id="modal-window" class="modal">
                    {/* Modal content */}
                    <div class="modal-content">
                        <span class="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                        {modal.type === "encounter" &&
                        <>
                            <p>Edit Encounter</p>
                            <BasicForm data={selected} updateFnc={encounterAdd}></BasicForm>
                        </>}

                    </div>
                </div>}

                <section>
                    <div className="one-column">
                    <h2>Encounters</h2>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "encounter"}))}}>New</button>

                    {encounters.list.filter(f => {return f.adventureId === id}).sort((a,b) => {return a.name < b.name}).map(encounter => (
                        <div key={encounter.id} className="list-item">
                            <Link key={encounter.id} to={`/encounter/${encounter.id}`}>
                                <div className="link">
                                        <h2>{encounter.name}</h2>
                                        <em>{truncate(encounter.description, 50)}</em>
                                </div>
                            </Link>

                            <div><FaWindowClose 
                                style={{"cursor": "pointer"}} 
                                color="red"
                                onClick={() => {deleteItem("encounters", encounter.id)}} />
                            <FaEdit 
                                style={{"cursor": "pointer"}} 
                                color="grey"
                                onClick={() => {setSelected(encounter); setModal({"on": true, "type": "encounter"})}} />
                            </div>
                        </div>
                    ))}
                        
                    </div>
                </section>
            </main>
        </>
    );
}

export default Adventure;