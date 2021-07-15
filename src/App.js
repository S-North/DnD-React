import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Campaigns from './components/Campaigns';
import StateParent from './components/StateParent';
import StateChild from './components/StateChild';
// import AdventuresList from './components/AdventuresList';


function App() {
  
  const [ config, setConfig ] = useState({
    "title": "Home",
    "profile": "guest",
    "campaign": "",
    "adventure": "",
    "encounter": ""
  })

  const [ campaigns, setCampaigns ] = useState([]);
  useEffect(() => {
    fetch('http://192.168.1.200:8002/campaigns')
    .then(response => response.json())
           .then((data) => {
               setCampaigns(data);
               console.log(`Result of fetch`, data);
           });

    return () => {
    }
  }, [])

    return (
      <>
      <Router>
        <Navbar campaigns={campaigns} config={config}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home title="Home" config={ config } campaigns={ campaigns } setConfig={ setConfig }></Home>
          </Route>
          <Route exact path="/campaigns">
            <Campaigns></Campaigns>
          </Route>
          <Route exact path="/parent">
            <StateParent></StateParent>
          </Route>
          <Route exact path="/parent/child">
            <StateChild></StateChild>
          </Route>
        </Switch>  
      </Router>
      </>
    )
}

export default App;
