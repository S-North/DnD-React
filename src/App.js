import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import MonsterBook from './components/MonsterBook';
import Home from './components/Home';
import Campaign from './components/Campaign';
import Adventure from './components/Adventure';
import Encounter from './components/Encounter';
import Equipment from './components/Equipment'
import Spells from './components/Spells'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/campaign/:id" element={<Campaign />} />
            <Route exact path="/adventure/:id" element={<Adventure />} />
            <Route exact path="/encounter/:id" element={<Encounter />} />
            <Route exact path="/monsters" element={<MonsterBook />}></Route>
            <Route exact path="/equipment" element={<Equipment />}></Route>
            <Route exact path="/spells" element={<Spells />}></Route>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
