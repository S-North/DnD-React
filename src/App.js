import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Login from './components/Login'
import MonsterBook from './components/MonsterBook';
import Home from './components/Home';
import Campaign from './components/Campaign';
import Adventure from './components/Adventure';
import Encounter from './components/Encounter';
import Equipment from './components/Equipment';
import Spells from './components/Spells';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <div className="App">
      <>
      {/* {!loggedIn &&
      <Router>
        <Routes>
          <Route path="/" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}></Route>
          <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}></Route>
        </Routes>
      </Router>
      }
      {loggedIn && */}
      <AppProvider loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/campaign/:id" element={<Campaign />} />
            <Route exact path="/adventure/:id" element={<Adventure />} />
            <Route exact path="/encounter/:id" element={<Encounter />} />
            <Route exact path="/monsters" element={<MonsterBook />}></Route>
            <Route exact path="/equipment" element={<Equipment />}></Route>
            <Route exact path="/spells" element={<Spells />}></Route>
            <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}></Route>
            {/* {loggedIn && <Route exact path="/campaign/:id" element={<Campaign />} />}
            {loggedIn && <Route exact path="/adventure/:id" element={<Adventure />} />}
            {loggedIn && <Route exact path="/encounter/:id" element={<Encounter />} />}
            {loggedIn && <Route exact path="/monsters" element={<MonsterBook />}></Route>}
            {loggedIn && <Route exact path="/equipment" element={<Equipment />}></Route>}
            {loggedIn && <Route exact path="/spells" element={<Spells />}></Route>}
            {loggedIn && <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}></Route>} */}
          </Routes>
        </Router>
      </AppProvider>
      
      }
      </>
    </div>
  );
}

export default App;
