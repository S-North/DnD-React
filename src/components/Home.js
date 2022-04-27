import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

import { firestore as db } from '../Firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { handleNew, handleDelete } from "../firebaseData";

import { truncate } from "../utils";
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import BasicForm from "./forms/BasicForm";

const Home = () => {
    const { settings, adventures, encounters } = useContext(AppContext);
    const [ campaigns, setCampaigns ] = useState([])

    // get the snapshot of the collection and keep campaign state up to date
    useEffect(() => {
    const collectionRef= collection(db, "campaigns")
    // filter and sort here
    const q = query(collectionRef, orderBy("modified", "asc"))
    const unsub = onSnapshot(q, (snapshot) => {
      setCampaigns(
        snapshot.docs.map(
          doc => (({...doc.data(), id: doc.id}))
        )
      )
    })
    return unsub
  }, [])

    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })

    const updateCampaigns = (firebaseCol, item) => {
        handleNew(firebaseCol, item)
        setModal({on: false, type: ""})
    }

    const deleteCampaign = (firebaseCol, id) => {
        handleDelete(firebaseCol, id)
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
                            {modal.type === "campaigns" &&
                            <>
                                <h3>Edit Campaign</h3>
                                <BasicForm data={selected} updateFnc={updateCampaigns} firebaseCol={modal.type}></BasicForm>
                            </>}
                        </div>
                </div>}
                

                <section>
                    <div className="one-column">
                        <h2>Campaigns</h2>
                            <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "campaigns"}))}}>New</button>

                            {campaigns.sort((a,b) => {return a.modified < b.modified}).map(campaign => (
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
                                        onClick={() => {deleteCampaign("campaigns", campaign.id)}} />
                                    <FaEdit 
                                        style={{"cursor": "pointer"}} 
                                        color="grey"
                                        onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaigns"})}} />
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
                                        <p>{`In ${campaigns.filter(c => c.id === encounter.campaignId).name} > ${adventures.list.filter(c => c.id === encounter.adventureId)[0].name}`}</p>
                                    </Link>
                                </div>))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;