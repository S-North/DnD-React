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
    return () => {
    }
  }, [])

  const deleteItem = async (id, collection) => {
    const url = `${jsonserver}/${collection}/${id}`;
    // console.log(id, collection, url);
    await fetch(url, {
      method: 'DELETE'
    })

    console.log('delete', id);
    if (collection === "campaigns") setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
    if (collection === "monsters") setMonsters(monsters.filter((monster) => monster.id !== id));

    history.push("/")
  }

  const addItem = (collection, data) => {
    const url = `${jsonserver}/${collection}`;
    // console.log(collection, url)
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      }).then(() => {
        console.log(data);
        if (collection === "campaigns") {
          setCampaigns([...campaigns, data])
        }
        if (collection === "monsters") {
          setMonsters([...monsters, data])
        }
        history.push("/");            
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
            <Route exact path="/campaigns">
              <Campaigns></Campaigns>
            </Route>
            <Route exact path="/campaign">
              <CampaignView deleteItem={ deleteItem } addItem={ addItem }></CampaignView>
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
          </Switch>  
        </main>
        <Footer></Footer>
        </div>

      </>
    )
}

export default App;
