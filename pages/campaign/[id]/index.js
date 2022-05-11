import { connectToDatabase } from '../../../utils/mongodb'
import { ObjectId } from 'mongodb'
import { useState, useEffect } from 'react'
import { truncate } from '../../../utils/utils'
import Link from 'next/link'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import BasicForm from '../../../components/forms/BasicForm'
import CharacterForm from '../../../components/forms/CharacterForm'


const Campaign = ({campaign}) => {
    const api = 'http://localhost:3000/api/'

    const [ adventures, setAdventures ] = useState([])
    const [ encounters, setEncounters ] = useState([])
    const [ characters, setCharacters ] = useState([])    
    const [ selected, setSelected ] = useState();
    const [ modal, setModal ] = useState({"type": "none", "on": false})
    
    useEffect(() => {
        const getAdventures = async () => {
            const response = await fetch(`${api}adventures`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {campaignId: campaign._id}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
              }
              })
              const alladventures = await response.json(response)
              setAdventures(alladventures)
        }
        getAdventures()

        const getCharacters = async () => {
            const response = await fetch(`${api}characters`, {
              method: "POST",
              body: JSON.stringify(
                  {
                  action: 'query',
                  data: {
                      campaignId: campaign._id
                  }
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              }
            })
            const characterReply = await response.json()
            console.log(characterReply)
            setCharacters(characterReply)
          }
          getCharacters()
  
        const getRunningEncounters = async () => {
            const response = await fetch(`${api}encounters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {
                        mode: "running",
                        campaignId: campaign._id
                    }
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

        const runningEncounters = await response.json()
        if (runningEncounters) setEncounters(runningEncounters)
        }
        getRunningEncounters()
    
      return () => {}
    }, [])
    
  const updateAdventures = async (mongoCollection, item) => {
    console.log(mongoCollection)
    console.log(item)
    const data = {}
    const newAdventures = {}
    

    // if no _id, its a new item
    if (!item._id) {
        console.log('its a new item')
        const response = await fetch(`${api}adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'addone',
                data: {...item, campaignId: campaign._id}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newAdventures = await response.json()

        if (newAdventures.acknowledged && newAdventures.insertedId) {
            setAdventures([...adventures, {...item, _id: newAdventures.insertedId}])
            setModal({on: false, type: ""})
          }
    }
    // if theres an _id, then its an edit
    else if (item._id) {
        console.log('edit this item')
        const response = await fetch(`${api}adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {...item, campaignId: campaign._id}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newAdventures = await response.json()

        if (newAdventures.acknowledged && newAdventures.modifiedCount === 1) {
            setAdventures([...adventures.filter(a => {return a._id !== item._id}), item])
            setModal({on: false, type: ""})
          }   
    }
}

  const deleteAdventure = async (item) => {
    const response = await fetch(`${api}delete`, {
        method: "POST",
            body: JSON.stringify(
                {
                collection: 'adventures',
                action: 'deleteone',
                data: item
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    })

    const acknowledgement = await response.json()
    console.log(acknowledgement)
    if (acknowledgement && acknowledgement.acknowledged && acknowledgement.deletedCount > 0) {
        setAdventures([...adventures.filter(adventure => { return adventure._id !== item._id})])
    }
  } 

  const updateCharacter = async (character, collection) => {
      console.log(collection)
      console.log(character)
      updateCharacter = null

      // if no _id, its a new item
    if (!character._id) {
        console.log('its a new item')
        const response = await fetch(`${api}characters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'addone',
                data: {
                    ...character, 
                    campaignId: campaign._id,
                    enemy: 'pc'
                }
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        updateCharacter = await response.json()

        if (updateCharacter.acknowledged && updateCharacter.insertedId) {
            setCharacters([...characters, {...character, _id: updateCharacter.insertedId}])
            setModal({on: false, type: ""})
          }
    }
    // if theres an _id, then its an edit
    else if (character._id) {
        console.log('edit this item')
        const response = await fetch(`${api}characters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {...character, campaignId: campaign._id}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        updateCharacter = await response.json()

        if (updateCharacter.acknowledged && updateCharacter.modifiedCount === 1) {
            setCharacters([...characters.filter(a => {return a._id !== character._id}), character])
            setModal({on: false, type: ""})
          }   
    }
  }

  const deleteCharacter = async (character) => {
    const response = await fetch(`${api}delete`, {
        method: "POST",
            body: JSON.stringify(
                {
                collection: 'characters',
                action: 'deleteone',
                data: character
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    })

    const acknowledgement = await response.json()
    console.log(acknowledgement)
    if (acknowledgement && acknowledgement.acknowledged && acknowledgement.deletedCount > 0) {
        setCharacters([...characters.filter(c => { return c._id !== character._id})])
    }
  }
    
    return (
       <>
       {/* modal window */}
       {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "adventures" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <BasicForm data={selected} updateFnc={updateAdventures} mongoCollection={modal.type}></BasicForm>
                    </>}
                    {modal.type === "characters" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <CharacterForm data={selected} updateFnc={updateCharacter} mongoCollection={modal.type}></CharacterForm>
                    </>}
                    
                </div>
        </div>}

        <section>
            <div className="one-column">
                <h2>Adventures</h2>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "adventures"}))}}>New</button>

                    {adventures.sort((a,b) => {return a.modified < b.modified}).map(adventure => (
                        <div key={adventure._id} className="list-item">
                            <Link key={adventure.id} href={`/adventure/${adventure._id}`}>
                                <div className="link">
                                        <h2>{adventure.name}</h2>
                                        <em>{truncate(adventure.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteAdventure("adventures", adventure)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {setSelected(adventure); setModal({"on": true, "type": "adventures"})}} />
                            </div>
                        </div>
                    ))}
            </div>

            <div className="one-column">
                <h2>Characters</h2>
                <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "characters"}))}}>New</button>

                {characters.map(character => (
                    <div key={character._id} className="list-item">
                        <Link href={`/character/${character.id}`}>
                            <div className="link">
                                    <h2>{character.name}</h2>
                                    <em>{truncate(character.description, 50)}</em>
                            </div>
                        </Link>

                        <div><FaWindowClose 
                            style={{"cursor": "pointer"}} 
                            color="red"
                            onClick={() => {deleteCharacter(character)}} />
                        <FaEdit 
                            style={{"cursor": "pointer"}} 
                            color="grey"
                            onClick={() => {setSelected(character); setModal({"on": true, "type": "characters"})}} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="one-column">
                <h2>Running Encounters</h2>
                {encounters && encounters
                    .filter(e => { return e.mode === "running"})
                    .map(encounter => (
                        <div key={encounter._id} className="list-item">
                            <Link href={`/encounter/${encounter._id}`}>
                                <h2>{encounter.name}</h2>
                                {/* <p>{`In ${campaigns.filter(c => c.id === encounter.campaignId).name} > ${adventures.list.filter(c => c.id === encounter.adventureId)[0].name}`}</p> */}
                            </Link>
                        </div>))}
            </div>
        </section>
       </>
    );
}

export default Campaign

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("campaigns").find({_id: id}).toArray()
    const campaign = await JSON.parse(JSON.stringify(response))

    return {
        props: {campaign: campaign[0]}
    }
}