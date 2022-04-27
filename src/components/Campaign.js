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

const Campaign = () => {
    const { id } = useParams();
    const { settings } = useContext(AppContext);
    const [ campaign, setCampaign ] = useState([{name: "LOADING...", description: ""}]);
    const [ adventures, setAdventures ] = useState([{name: "LOADING...", description: ""}])
    const [ encounters, setEncounters ] = useState([]);
    const [ characters, setCharacters ] = useState([])
    const [ selected, setSelected ] =useState();
    const [ modal, setModal ] = useState({
        "type": "none",
        "on": false
    })
    
    useEffect(() => {
        // create Firebase listener to update the adventures state
        const collectionRef= collection(db, "adventures")
        // filter and sort here
        const q = query(collectionRef, where("campaignId", "==", id), orderBy("modified", "asc")) // Compound queries need to have an index created for them in Firebase console 
        const unsub = onSnapshot(q, (snapshot) => {
            setAdventures(
                snapshot.docs.map(
                    doc => (({...doc.data(), id: doc.id}))
                    )
                    )
                })

        const campaignReq = async () => {
            const docRef = doc(db, "campaigns", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCampaign(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        campaignReq()
        
        return unsub
      }, [])

      useEffect(() => {
        // create Firebase listener to update the characters state
        const charQ = query(collection(db, "characters"), where("campaignId", "==", id)) // Compound queries need to have an index created for them in Firebase console 
        const unsub = onSnapshot(charQ, (snapshot) => {
            setCharacters(
            snapshot.docs.map(
              doc => (({...doc.data(), id: doc.id}))
            )
          )
        })
        return unsub
      }, [])

      useEffect(() => {
        // create Firebase listener to update the running encounters state
        const charQ = query(collection(db, "encounters"), where("mode", "==", "running")) // Compound queries need to have an index created for them in Firebase console 
        const unsub = onSnapshot(charQ, (snapshot) => {
            setEncounters(
            snapshot.docs.map(
              doc => (({...doc.data(), id: doc.id}))
            )
          )
        })
        return unsub
      }, [])

    const addCharacter = async (character) => {
        console.log(character)
        const collectionRef = collection(db, "characters")
        if (!character.id) {
            const payload = {...character, campaignId: id, created: serverTimestamp(), modified: serverTimestamp()}
            const docRef = await addDoc(collectionRef, payload)
            console.log(docRef.id)
        }
        if (character.id) {
            // identify the collection and document 
            const payload = {...character, modified: serverTimestamp()}
            const docRef = doc(db, "characters", character.id)
            await setDoc(docRef, payload)
        }
            setModal({on: false, type: ""})
    }

    const updateAdventure = async (firebaseCol, adventure) => {
        console.log(adventure)
        const collectionRef = collection(db, "adventures")
        if (!adventure.id) {
            const payload = {...adventure, campaignId: id, created: serverTimestamp(), modified: serverTimestamp()}
            const docRef = await addDoc(collectionRef, payload)
            console.log(docRef.id)
        }
        if (adventure.id) {
            // identify the collection and document 
            const payload = {...adventure, modified: serverTimestamp()}
            const docRef = doc(db, "adventures", adventure.id)
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
            <Nav campaign={campaign} location="campaign"></Nav>
            <main>
                {/* modal window */}
                {modal.on && <div id="modal-window" class="modal">
                    {/* Modal content */}
                    <div class="modal-content">
                        <span class="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                        {modal.type === "adventures" &&
                        <>
                            <h3>Edit Adventure</h3>
                            <BasicForm data={selected} updateFnc={updateAdventure} firebaseCol={modal.type}></BasicForm>
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
                        <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "adventures"}))}}>New</button>

                        {adventures.map(adventure => (
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
                                    onClick={() => {handleDelete("adventures", adventure.id)}} />
                                <FaEdit 
                                    style={{"cursor": "pointer"}} 
                                    color="grey"
                                    onClick={() => {setSelected(adventure); setModal({"on": true, "type": "adventures"})}} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="one-column">
                        <h2>Characters</h2>
                        <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "character"}))}}>New</button>

                        {characters.map(character => (
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
                                    onClick={() => {handleDelete("characters", character.id)}} />
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
                        {encounters && encounters.map(encounter => (
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