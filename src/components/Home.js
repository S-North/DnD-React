import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import BasicForm from "./forms/BasicForm";

const Home = () => {

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

    const { settings, campaigns, adventures, encounters, addItem, editItem, deleteItem } = useContext(AppContext);
    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })

    const truncate = (string="", maxlength) => {
        if (string.length > maxlength) {
            return `${string.slice(0, maxlength)}...`
        } else {
            return string
        }
    }

    const addCampaign = (campaign) => {
        switch (!campaign.id) {
            default:
                console.log("id is not empty. Edit campaign");
                console.log(Date());
                console.log(campaign);
                editItem("campaigns", {...campaign, "modified": getDateTime()}, campaign.id);
                setModal({"on": false});
                break
            case true:
                console.log("id is empty. Create new campaign");
                console.log(campaign);
                console.log(Date());
                addItem("campaigns", {...campaign, "id": uuidv4(), "modified": getDateTime});
                setModal({"on": false});
        }
    }

    return (
        <>
            {/* navbar and toolbar */}
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav></Nav>

            <main>
                {/* modal window */}
                {modal.on && <div id="modal-window" class="modal">
                    {/* Modal content */}
                        <div class="modal-content">
                            <span class="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                            {modal.type === "campaign" &&
                            <>
                                <h3>Edit Campaign</h3>
                                <BasicForm data={selected} updateFnc={addCampaign}></BasicForm>
                            </>}
                        </div>
                </div>}
                

                <section>
                    <div className="one-column">
                        <h2>Campaigns</h2>
                            <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "campaign"}))}}>New</button>

                            {campaigns.list.sort((a,b) => {return a.modified < b.modified}).map(campaign => (
                                <div key={campaign.id} className="list-item">
                                    <Link key={campaign.id} to={`/campaign/${campaign.id}`}>
                                        <div className="link">
                                                <h2>{campaign.name}</h2>
                                                <em>{truncate(campaign.description, 50)}</em>
                                        </div>
                                    </Link>

                                    <div><FaWindowClose 
                                        style={{"cursor": "pointer"}} 
                                        color="red"
                                        onClick={() => {deleteItem("campaigns", campaign.id)}} />
                                    <FaEdit 
                                        style={{"cursor": "pointer"}} 
                                        color="grey"
                                        onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaign"})}} />
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="one-column">
                        <h2>Running Encounters</h2>
                        {encounters && encounters.list
                            .filter(e => { return e.mode === "running"})
                            .map(encounter => (
                                <div key={encounter.id} className="list-item">
                                    <Link to={`/encounter/${encounter.id}`}>
                                        <h2>{encounter.name}</h2>
                                        <p>{`In ${campaigns.list.filter(c => c.id === encounter.campaignId)[0].name} > ${adventures.list.filter(c => c.id === encounter.adventureId)[0].name}`}</p>
                                    </Link>
                                </div>))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;