import connectToDatabase from '../../utils/mongodb'
import { useState, useEffect } from 'react'
import { truncate } from '../../utils/utils'
import Link from 'next/link'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import BasicForm from '../../components/forms/BasicForm'


export default function Home({ }) {
  const api = 'http://localhost:3000/api/'
  const [ campaigns, setCampaigns ] = useState([])
  const [ encounters, setEncounters ] = useState([])
  const [ selected, setSelected ] =useState();
  const [ modal, setModal ] = useState({"type": "none", "on": false})
  
  useEffect(() => {
    const getCampaigns = async () => {
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'query',
            data: {}
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
      }
      })
      const allcampaigns = await response.json(response)
      setCampaigns(allcampaigns)
    }
    getCampaigns()

    
    const getRunningEncounters = async () => {
      const response = await fetch(`${api}encounters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'query',
            data: {
                mode: "running"
            }
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })

      const runningEncounters = await response.json()
      // console.log(runningEncounters)
      if (runningEncounters) setEncounters(runningEncounters)
    }
    getRunningEncounters()

    return () => {}
  }, [])

  const updateCampaigns = async (mongoCollection, item) => {
    const newCampaigns = null

    // does the item have an id, if so do an editone api call
    if (!item._id) {
      // console.log('item has no id, add this to collection')
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'addone',
            data: item
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      newCampaigns = await response.json()
    }

    if (item._id) {
      // console.log('item has id, edit this item')
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'editone',
            data: item
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      newCampaigns = await response.json()
    }
   
    if (newCampaigns.acknowledged && newCampaigns.insertedId) {
      setCampaigns([...campaigns, {...item, _id: newCampaigns.insertedId}])
      setModal({on: false, type: ""})
    } 
    else if (newCampaigns.modifiedCount && newCampaigns.modifiedCount === 1) {
      setCampaigns([...campaigns.filter(c => c._id !== item._id), item])
      setModal({on: false, type: ""})
    }
  }

  const deleteCampaign = async (mongoCollection, item) => {
    // console.log(item)
    const response = await fetch(`${api}delete`, {
      method: "POST",
      body: JSON.stringify(
          {
            collection: 'campaigns',
            action: 'deleteone',
            data: item
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })

    const acknowledgement = await response.json()
    if (acknowledgement.acknowledged && acknowledgement.deletedCount === 1) {
      setCampaigns([...campaigns.filter(campaign => { return campaign._id !== item._id})])
    }
  } 
  
  return (
    <>
        {/* modal window */}
        {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "campaigns" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <BasicForm data={selected} updateFnc={updateCampaigns} mongoCollection={modal.type}></BasicForm>
                    </>}
                </div>
        </div>}

        <section>
            <div className="one-column">
                <h2>Campaigns</h2>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "campaigns"}))}}>New</button>

                    {campaigns.sort((a,b) => {return a.modified < b.modified}).map(campaign => (
                        <div key={campaign._id} className="list-item">
                            <Link key={campaign.id} href={`/campaign/${campaign._id}`}>
                                <div className="link">
                                        <h2>{campaign.name}</h2>
                                        <em>{truncate(campaign.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteCampaign("campaigns", campaign)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaigns"})}} />
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
  )
}

export async function getServerSideProps(context) {
  try {
    await connectToDatabase
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
