import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useParams, Link } from 'react-router-dom';

import { firestore as db } from '../Firebase'
import { onSnapshot, collection, getDoc, doc, addDoc, setDoc, deleteDoc, query, orderBy, where, serverTimestamp } from 'firebase/firestore';
import { handleNew, handleDelete } from "../firebaseData";

import { truncate } from "../utils";
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import BasicForm from "./forms/BasicForm";
import CharacterForm from './forms/CharacterForm';

const Adventure = () => {
    const { id } = useParams();
    const { settings, campaigns, adventures, addItem, deleteItem, editItem } = useContext(AppContext);
    const [ adventure, setAdventure ] = useState({name: "LOADING...", description: ""})
    const [ campaign, setCampaign ] = useState({});
    const [ encounters, setEncounters ] = useState([])
    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })

    // get the snapshot of the collection and keep campaign state up to date
    useEffect(() => {
        // create Firebase listener to update the adventures state
        const collectionRef= collection(db, "encounters")
        // filter and sort here
        const q = query(collectionRef, where("adventureId", "==", id)) // Compound queries need to have an index created for them in Firebase console 
        const unsub = onSnapshot(q, (snapshot) => {
            setEncounters(
                snapshot.docs.map(
                    doc => (({...doc.data(), id: doc.id}))
                    )
                    )
                })

        const AdventureReq = async () => {
            const docRef = doc(db, "adventures", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setAdventure({...docSnap.data(), id: docSnap.id});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        AdventureReq()
        
        return unsub
      }, [])

      useEffect(() => {
        const campaignReq = async () => {
            const docRef = doc(db, "campaigns", adventure.campaignId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCampaign({...docSnap.data(), id: docSnap.id});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        campaignReq()
        return () => {}
      }, [adventure])

    const encounterAdd = async (firebaseCol, encounter) => {
        console.log(encounter)
        console.log(firebaseCol)
        const collectionRef = collection(db, "encounters")
        if (!encounter.id) {
            const payload = {...encounter, initiative: [], monsters: [], adventureId: id, campaignId: campaign.id, mode: "editing", created: serverTimestamp(), modified: serverTimestamp()}
            const docRef = await addDoc(collectionRef, payload)
            console.log(docRef.id)
        }
        if (encounter.id) {
            // identify the collection and document 
            const payload = {...encounter, modified: serverTimestamp()}
            const docRef = doc(db, "encounters", encounter.id)
            await setDoc(docRef, payload)
        }
            setModal({on: false, type: ""})
    }

    const handleDelete = async (collection, id) => {
        console.log(collection)
        const docRef = doc(db, collection, id)  
        await deleteDoc(docRef)
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

                    {encounters.map(encounter => (
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
                                onClick={() => {handleDelete("encounters", encounter.id)}} />
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