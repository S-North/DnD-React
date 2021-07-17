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
import MonsterDetail from './components/MonsterDetail';

function App() {
  const history = useHistory();
  console.log(history);
  
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

  const deleteCampaign = async (id) => {
    await fetch(`http://192.168.1.200:8002/campaigns/${id}`, {
      method: 'DELETE'
    })

    console.log('delete', id);
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
    history.push("/")
  }

    return (
      <>
      
        <Navbar campaigns={campaigns} monsters={monsters} config={config}></Navbar>
        <div className="footer-container">
        <main>
          <Switch>
            <Route exact path="/">
                <Home title="Home" config={ config } campaigns={ campaigns } monsters={ monsters } setConfig={ setConfig }></Home>
            </Route>
            <Route exact path="/campaigns">
              <Campaigns></Campaigns>
            </Route>
            <Route exact path="/campaign">
              <CampaignView deleteCampaign={deleteCampaign}></CampaignView>
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
          </Switch>  
        </main>
        <Footer></Footer>
        </div>

      </>
    )
}

export default App;
