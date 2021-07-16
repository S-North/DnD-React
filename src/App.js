import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Campaigns from './components/Campaigns';
import CampaignView from './components/CampaignView';
import AdventureView from './components/AdventureView';
import EncounterView from './components/EncounterView';
import MonsterDetail from './components/MonsterDetail';

import StateParent from './components/StateParent';
import StateChild from './components/StateChild';

function App() {
  
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
    fetch('http://192.168.1.200:8002/campaigns')
    .then(response => response.json())
            .then((campaigns) => {
                setCampaigns(campaigns);
                console.log(`Result of campaigns fetch`, campaigns);
    
            });
    fetch('http://192.168.1.200:8002/monsters')
    .then(response => response.json())
            .then((monsters) => {
                setMonsters(monsters);
                console.log(`Result of monsters fetch`, monsters);
    
            });
    return () => {
    }
  }, [])

    return (
      <>
      <Router>
        <Navbar campaigns={campaigns} monsters={monsters} config={config}></Navbar>
          <main>
            <Switch>
              <Route exact path="/">
                  <Home title="Home" config={ config } campaigns={ campaigns } monsters={ monsters } setConfig={ setConfig }></Home>
              </Route>
              <Route exact path="/campaigns">
                <Campaigns></Campaigns>
              </Route>
              <Route exact path="/campaign">
                <CampaignView></CampaignView>
              </Route>
              <Route exact path="/adventure">
                <AdventureView></AdventureView>
              </Route>
              <Route exact path="/encounter">
                <EncounterView></EncounterView>
              </Route>
              <Route exact path="/monster">
                <MonsterDetail></MonsterDetail>
              </Route>
              <Route exact path="/parent">
                <StateParent></StateParent>
              </Route>
              <Route exact path="/parent/child">
                <StateChild></StateChild>
              </Route>
            </Switch>  
          </main>
      </Router>
      </>
    )
}

export default App;
