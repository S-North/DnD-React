// react.router.dom router component is in the index.js. To prevent conflicts with useHistory on this page.
// data json file is in data/tables.json
// run "json-server --watch data/tables.json --port 8000" before running this app
// install dependencies with "npm install"
// run this app with "npm start"

import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CampaignView from './components/CampaignView';
import AdventureView from './components/AdventureView';
import EncounterView from './components/EncounterView';
import MonsterHome from './components/MonsterHome';
import MonsterView from './components/MonsterView';

function App() {
  const history = useHistory();
  const jsonserver = "http://localhost:8000";
  const [ campaigns, setCampaigns ] = useState([]);
  const [ monsters, setMonsters ] = useState([]);
  const [ adventures, setAdventures ] = useState([]);
  const [ encounters, setEncounters ] = useState([]);
  const [ players, setPlayers ] = useState([]);
  const [ notes, setNotes ] = useState([]);
  
  useEffect(() => {
    fetch(`${jsonserver}/campaigns`)
      .then(response => response.json())
      .then((campaigns) => {
          setCampaigns(campaigns);
      });
            
    fetch(`${jsonserver}/adventures`)
      .then(response => response.json())
      .then((adventures) => {
        setAdventures(adventures);
      });
    
    fetch(`${jsonserver}/encounters`)
      .then(response => response.json())
      .then((encounters) => {
        setEncounters(encounters);
      });
    console.log("encounters fetched")
    fetch(`${jsonserver}/monsters`)
      .then(response => response.json())
      .then((monsters) => {
          setMonsters(monsters);
      });
    
    fetch(`${jsonserver}/players`)
      .then(response => response.json())
      .then((players) => {
          setPlayers(players);    
      });

    fetch(`${jsonserver}/notes`)
      .then(response => response.json())
      .then((notes) => {
        setNotes(notes);
      });

    return () => {
    }
  }, [])


  const deleteItem = async (id, collection) => {
    if (window.confirm(
      "Deleting this will also delete all child items e.g. npcs, notes, players, etc. Are you sure you want to continue?")) {
    const url = `${jsonserver}/${collection}/${id}`;
    await fetch(url, {
      method: 'DELETE'
    })
  }

    if (collection === "campaigns") {
      setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
      setAdventures(adventures.filter((adventure) => adventure.campaignId !== id));
      setEncounters(encounters.filter((encounter) => encounter.campaignId !== id));
      setPlayers(players.filter((player) => player.campaignId !== id));
      setNotes(notes.filter((note) => note.campaignId !== id));
      history.push(`/`);
    }

    if (collection === "adventures") {
      setAdventures(adventures.filter((adventure) => adventure.id !== id));
      setEncounters(encounters.filter((encounter) => encounter.adventureId !== id));
      setPlayers(players.filter((player) => player.adventureId !== id));
      setNotes(notes.filter((note) => note.adventureId !== id));
      history.goBack();
    }

    if (collection === "monsters") {
      setMonsters(monsters.filter((monster) => monster.id !== id));
      history.goBack();
    }
  }


  const addItem = (collection, data, id, operation) => {
    // collection is the json collection to put the data e.g. monsters, campaigns, adventures, etc
    // data is the json object to post to the server
    const url = `${jsonserver}/${collection}`;
    console.log(collection, data);

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      })

      // call the correct useState function based on the collection name
      .then(response => response.json()) 
      .then((response) => {
        if (collection === "campaigns") {setCampaigns([...campaigns, response])}
        if (collection === "monsters") {setMonsters([...monsters, response])}
        if (collection === "adventures") {setAdventures([...adventures, response])}
        if (collection === "encounters") {setEncounters([...encounters, response])}
        if (collection === "players") {setPlayers([...players, response])}
        if (collection === "notes") {setNotes([...notes, response])}
    })
  }


  const dbUpdate = (collection, data, id, operation) => {
    // collection is the json collection to put the data e.g. monsters, campaigns, adventures, etc
    // data is the json object to post to the server
    const url = `${jsonserver}/${collection}/${id}`;
    console.log("dbUpdate");
    console.log(data);
    // console.log(collection, data);

    fetch(url, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      })

      // call the correct useState function based on the collection name
      .then(response => response.json()) 
      .then((response) => {
        if (collection === "campaigns") {setCampaigns([response])}
        if (collection === "monsters") {setMonsters([monsters, response])}
        if (collection === "adventures") {setAdventures([response])}
        if (collection === "encounters") {setEncounters([response])}
        if (collection === "players") {setPlayers([response])}
        if (collection === "notes") {setNotes([response])}
    })
  }


    return (
      <>
        <Navbar campaigns={campaigns} monsters={monsters}></Navbar>
        <div className="footer-container">
        <main>
          <Switch>
            <Route exact path="/">
                <Home title="Home" campaigns={ campaigns } monsters={ monsters } addItem={ addItem } dbUpdate={ dbUpdate}></Home>
            </Route>
            <Route exact path="/campaign">
              <CampaignView adventures={ adventures } players={ players } notes={ notes } deleteItem={ deleteItem } addItem={ addItem } dbUpdate={ dbUpdate }></CampaignView>
            </Route>
            <Route exact path="/adventure">
              <AdventureView encounters={encounters} players={ players } notes={ notes } deleteItem={ deleteItem } addItem={ addItem } dbUpdate={ dbUpdate }></AdventureView>
            </Route>
            <Route exact path="/encounter">
              <EncounterView encounters={ encounters} players={ players } monsters={ monsters } notes={ notes } deleteItem={ deleteItem } addItem={ addItem } dbUpdate={ dbUpdate }></EncounterView>
            </Route>
            <Route exact path="/monster">
              <MonsterView deleteItem={ deleteItem } addItem={ addItem }></MonsterView>
            </Route>
            <Route exact path="/monsters">
              <MonsterHome monsters={ monsters } deleteItem={ deleteItem } addItem={ addItem } dbUpdate={ dbUpdate }></MonsterHome>
            </Route>
            <Route exact path="/character">
              <h1>Character View Page</h1>
            </Route>
            <Route exact path="/note">
              <h1>Note View Page</h1>
            </Route>
          </Switch>  
        </main>
        <Footer></Footer>
        </div>

      </>
    )
  }
  
  export default App;
