import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Campaigns from './components/Campaigns';
import CampaignView from './components/CampaignView';
import AdventureView from './components/AdventureView';
import EncounterView from './components/EncounterView';
import MonsterView from './components/MonsterView';

function App() {
  const history = useHistory();
  // console.log(history);
  const jsonserver = "http://localhost:8000";
  
  const [ config, setConfig ] = useState({
    "title": "Home",
    "profile": "guest",
    "campaign": "",
    "adventure": "",
    "encounter": ""
  })

  const [ campaigns, setCampaigns ] = useState([]);
  const [ monsters, setMonsters ] = useState([]);
  const [ adventures, setAdventures ] = useState([]);
  const [ players, setPlayers ] = useState([]);
  const [ notes, setNotes ] = useState([]);
  
  useEffect(() => {
    fetch(`${jsonserver}/campaigns`)
    .then(response => response.json())
            .then((campaigns) => {
                setCampaigns(campaigns);
                // console.log(`Result of campaigns fetch`, campaigns);
    
            });
    fetch(`${jsonserver}/monsters`)
    .then(response => response.json())
            .then((monsters) => {
                setMonsters(monsters);
                // console.log(`Result of monsters fetch`, monsters);
    
            });

    fetch(`${jsonserver}/adventures`)
    .then(response => response.json())
            .then((adventures) => {
                setAdventures(adventures);
                // console.log(`Result of campaigns fetch`, campaigns);
    
            });
    
    fetch(`${jsonserver}/players`)
    .then(response => response.json())
            .then((players) => {
                setPlayers(players);
                // console.log(`Result of monsters fetch`, monsters);
    
            });
    fetch(`${jsonserver}/notes`)
    .then(response => response.json())
            .then((notes) => {
                setNotes(notes);
                // console.log(`Result of campaigns fetch`, campaigns);
    
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

    if (collection === "campaigns") {
      setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
      setAdventures(adventures.filter((adventure) => adventure.campaignId !== id));
    }
    if (collection === "monsters") setMonsters(monsters.filter((monster) => monster.id !== id));

    history.push("/")
    }
  }

  const addItem = (collection, data) => {
    // collection is the json collection to put the data e.g. monsters, campaigns, adventures, etc
    // data is the json object to post to the server
    const url = `${jsonserver}/${collection}`;

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      })

      // call the correct useState function based on the collection name
      .then(response => response.json()) 
      .then((response) => {
        if (collection === "campaigns") {
          setCampaigns([...campaigns, response])
        }
        if (collection === "monsters") {
          setMonsters([...monsters, response])
        }
        if (collection === "adventures") {
          setAdventures([...adventures, response])
        }
        if (collection === "players") {
          setPlayers([...players, response])
        }
        if (collection === "notes") {
          setNotes([...notes, response])
        }
        // history.push("/");      
    })
  }

    return (
      <>
        <Navbar campaigns={campaigns} monsters={monsters} config={config}></Navbar>
        <div className="footer-container">
        <main>
          <Switch>
            <Route exact path="/">
                <Home title="Home" config={ config } campaigns={ campaigns } monsters={ monsters } setConfig={ setConfig }  addItem={ addItem }></Home>
            </Route>
            <Route exact path="/campaign">
              <CampaignView adventures={ adventures } players={ players } notes={ notes } deleteItem={ deleteItem } addItem={ addItem }></CampaignView>
            </Route>
            <Route exact path="/adventure">
              <AdventureView></AdventureView>
            </Route>
            <Route exact path="/encounter">
              <EncounterView></EncounterView>
            </Route>
            <Route exact path="/monster">
              <MonsterView deleteItem={ deleteItem }></MonsterView>
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
