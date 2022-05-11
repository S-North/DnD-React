import Link from 'next/link';
import { useEffect, useState } from 'react'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const Nav = () => {
    const { query, pathname, isReady } = useRouter()
    const path = pathname.split("/")[1]
    const id = query.id
    const api = 'http://localhost:3000/api/'
    console.log(path)
    console.log(id)
    const [ campaign, setCampaign ] = useState()
    const [ adventure, setAdventure ] = useState()
    const [ encounter, setEncounter ] = useState()

    const getEncounter = async (id) => {
        console.log(`get encounter with id: ${id}`)
        const encounterRes = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {action: 'query', data: {_id: id}}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const encounterJson = await encounterRes.json()
            console.log(encounterJson)
            if (encounterJson && encounterJson.length > 0) {console.log(`id: ${id}`);console.log(encounterJson); setEncounter(encounterJson[0])}
    }

    useEffect(() => {
        console.log(path)
        console.log(id)

        if (isReady && !path) {
            console.log('no path')
            setCampaign({})
            setAdventure({})
            setEncounter({})
        }

        if (isReady && id && path === "campaign") {
            console.log(`get campaign with id: ${id}`)
            const getCampaign = async (id) => {
                console.log(`get campaign with id: ${id}`)
                const campaignRes = await fetch(`${api}campaigns`, {
                    method: "POST",
                    body: JSON.stringify(
                        {action: 'query', data: {_id: id}}),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                const campaignJson = await campaignRes.json()
                if (campaignJson && campaignJson.length > 0) {console.log(campaignJson); setCampaign(campaignJson[0])}
                setAdventure({})
                setEncounter({})
            }
            getCampaign()
        }

        if (isReady && id && path === "adventure") {
            const getAdventure = async (id) => {
                console.log(`get adventure with id: ${id}`)
                const adventureRes = await fetch(`${api}adventures`, {
                    method: "POST",
                    body: JSON.stringify(
                        {action: 'query', data: {_id: id}}),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    })
                    const adventureJson = await adventureRes.json()
                    console.log(adventureJson)

                    if (adventureJson && adventureJson.length > 0) {
                        setAdventure(adventureJson[0])

                        const getCampaign = async (id) => {
                            console.log(`get campaign with id: ${id}`)
                            const campaignRes = await fetch(`${api}campaigns`, {
                                method: "POST",
                                body: JSON.stringify(
                                    {action: 'query', data: {_id: id}}),
                                headers: {"Content-type": "application/json; charset=UTF-8"}
                            })
                            const campaignJson = await campaignRes.json()
                            if (campaignJson && campaignJson.length > 0) {console.log(campaignJson); setCampaign(campaignJson[0])}
                        }
                        getCampaign(adventureJson[0].campaignId)
                    }
                    setEncounter({})
            }
            getAdventure()
        }

        if (isReady && path === "encounter" && isReady) {
            console.log(`get encounter with id: ${id}`)
            getEncounter(id)
        }
    
        return () => {}
    }, [query, pathname])

    return (
        <header>
            <nav>
                <h2></h2>
                <Link href='/'>Home</Link>
                {path && path === "monsters" && <Link href={`/monsters`}>&gt; Monsters</Link>}
                {path && path === "equipment" && <Link href={`/equipment`}>&gt; Equipment</Link>}
                {path && path === "spells" && <Link href={`/spells`}>&gt; Spells</Link>}
                
                {campaign && path && ['campaign', 'adventure', 'encounter'].includes(path) && 
                    <Link style={{cursor: "pointer"}} className="tooltip" href={`/campaign/${campaign._id}`}>
                        <>
                        <span >&gt; {campaign.name}</span>
                        {/* <span className="tooltiptext">&gt; {campaign.description}</span> */}
                        </>
                    </Link>}
                {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>&gt; {campaign.name}</p>}
                
                {adventure && path && ['adventure', 'encounter'].includes(path) && 
                    <Link className="tooltip" href={`/adventure/${adventure._id}`}>
                        <span className="tooltiptext">&gt; {adventure.name}</span>
                    </Link>}
                {adventure && adventure.id && location === "adventure" && <p style={{"color": "var(--paper)"}} title={adventure.description}>&gt; {adventure.name}</p>}

                {encounter && path && ['encounter'].includes(path) &&
                    <Link href={`/encounter/${encounter._id}`} title={encounter.description}>
                        <span>&gt; {encounter.name}</span>
                    </Link>}
                {encounter && encounter.id && location === "encounter" && <p style={{"color": "var(--paper)"}} title={encounter.description}>&gt; {encounter.name}</p>}
            </nav>
        </header>
    );
}

export default Nav