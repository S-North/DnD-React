import { useState, createContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  }

console.log(config)

const app = firebase.initializeApp(config);
const db = getFirestore(app);

export const AppContext = createContext();
export const auth = app.firebase.auth;

export const AppProvider = (props) => {

  async function getCampaigns() {
    if (firebase.auth().currentUser) {
      const campaignCol = collection(db, 'campaigns');
      const campaignSnapshot = await getDocs(campaignCol);
      const campaignList = await campaignSnapshot.docs.map(doc => doc.data());
      // console.log(campaignList);
      return campaignList
    }
  }
  
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [ settings, setSettings] = useState(
      {
          "darkmode": false,
          "name": "Stuart",
          "toolbarOpen": false
      }
  )
  const [ characters, setCharacters ] = useState([]);
  const [ campaigns, setCampaigns ] = useState([]);
  const [ adventures, setAdventures ] = useState([]);
  const [ encounters, setEncounters ] = useState([]);
  const  [ monsterTemplate, setMonsterTemplate ] = useState(
      {
          "id": "",
          "name": "",
          "description": "",
          "ac": "",
          "hitDice": {
            "hdDice": 0,
            "hdSides": 0,
            "hdBonus": 0
          },
          "hp": 0,
          "cr": null,
          "type": "",
          "str": 10,
          "dex": 10,
          "con": 10,
          "int": 10,
          "wis": 10,
          "cha": 10,
          "speed": "",
          "xp": 0,
          "senses": [],
          "languages": [],
          "saves": [],
          "skills": [],
          "vulnerabilities": [],
          "resistances": [],
          "damageImmunity": [],
          "conditionImmunity": [],
          "conditions": [],
          "traits": [],
          "actions": [],
          "legendary": [],
          "legendaryActions": []
      }
  )

  const [ monsterBook, setMonsterBook ] = useState([])
  const [ equipment, setEquipment ] = useState([]);

  const [ monsterTypes, setMonsterTypes ] = useState(["All", "Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"])
  const [ crRange, setCrRange ] = useState([0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 30].sort(function(a,b) {return a-b}))
  const [ classes, setClasses ] = useState(["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"].sort())
  const [ races, setRaces ] = useState(["Aarakocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Feral Teifling", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Halfling", "Half-Orc", "Hobgoblin", "Human", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Orc", "Orc of Exandria", "Satyr", "Tabaxi", "Teifling", "Tortle", "Triton", "Yuan-ti Pureblood"].sort())
  const [ damageTypes, setDamageTypes ] = useState(["bludgeoning", "piercing", "slashing", "acid", "poison", "fire", "cold", "force", "lightning", "thunder", "necrotic", "psychic", "radiant"].sort())
  const [ conditions, setConditions ] = useState(["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralysed", "petrified", "poisoned", "stunned", "unconcious"].sort())
  const [ sizes, setSizes ] = useState(["tiny", "small", "medium", "large", "huge", "gargantuan"])
  const [ abilityList, setAbilityList ] = useState(["str", "dex", "con", "int", "wis", "cha"])
  const [ skillList, setSkillList ] = useState(["acrobatics", "animal handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight of hand", "stealth", "survival"])
  const [ sensesList, setSensesList ] = useState(["darkvision 30", "darkvision 60", "darkvision 120", "blindsight", "tremorsense", "truevision"])
  const skillToAbility = (skill) => {
      switch (true) {
          default:
              return "wis"
          case ["athletics"].includes(skill):
              return "str"
          case ["acrobatics", "sleight of hand", "stealth" ].includes(skill):
              return "dex"
          case ["arcana", "history", "investigation", "nature", "religion"].includes(skill):
              return "int"
          case ["deception", "intimidation", "performance", "persuasion"].includes(skill):
              return "cha"
            }
          }

const jsonserver = process.env.REACT_APP_JSON_SERVER
    useEffect(() => {
        console.log(`fetching campaigns from jsonserver ${jsonserver}`)    
        fetch(`${jsonserver}/campaigns`)
            .then(response => response.json())
            .then((campaigns) => {
            setCampaigns(campaigns);
        });
        console.log(`fetching adventures from jsonserver  ${jsonserver}`)
      fetch(`${jsonserver}/adventures`)
      .then(response => response.json())
      .then((adventures) => {
        setAdventures(adventures);
      });
      console.log(`fetching encounters from jsonserver ${jsonserver}`)
    fetch(`${jsonserver}/encounters`)
      .then(response => response.json())
      .then((encounters) => {
        setEncounters(encounters);
      });
    console.log("encounters fetched")
    console.log(encounters)
    
    fetch(`${jsonserver}/monsters`)
      .then(response => response.json())
      .then((monsters) => {
          setMonsterBook(monsters);
      });
    
    fetch(`${jsonserver}/characters`)
      .then(response => response.json())
      .then((character) => {
        setCharacters(character);    
      });

    fetch(`${jsonserver}/equipment`)
    .then(response => response.json())
    .then((equipment) => {
      setEquipment(equipment);    
    });

    // fetch(`${jsonserver}/notes`)
    //   .then(response => response.json())
    //   .then((notes) => {
    //     setNotes(notes);
    //   });
    
        return () => {
        }
      }, [])
  
      const deleteItem = async (collection, id) => {
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
          setCharacters(characters.filter((character) => character.campaignId !== id));
          // setNotes(notes.filter((note) => note.campaignId !== id));
          // history.push(`/`);
        }
    
        if (collection === "adventures") {
          setAdventures(adventures.filter((adventure) => adventure.id !== id));
          setEncounters(encounters.filter((encounter) => encounter.adventureId !== id));
          // setPlayers(players.filter((player) => player.adventureId !== id));
          // setNotes(notes.filter((note) => note.adventureId !== id));
          // history.goBack();
        }

        if (collection === "encounters") {
          setEncounters(encounters.filter((encounter) => encounter.id !== id));
          // setPlayers(players.filter((player) => player.adventureId !== id));
          // setNotes(notes.filter((note) => note.adventureId !== id));
          // history.goBack();
        }
    
        if (collection === "monsters") {
          setMonsterBook(monsterBook.filter((monster) => monster.id !== id));
          // history.goBack();
        }

          if (collection === "characters") {
            setCharacters(characters.filter((character) => character.id !== id));
            // history.goBack();
        }
      }
    
    
      const addItem = (collection, data) => {
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
            if (collection === "adventures") {setAdventures([...adventures, response])}
            if (collection === "encounters") {setEncounters([...encounters, response])}
            if (collection === "monsters") {setMonsterBook([...monsterBook, response])}
            if (collection === "characters") {setCharacters([...characters, response])}
            // if (collection === "players") {setPlayers([...players, response])}
            // if (collection === "notes") {setNotes([...notes, response])}
        })
      }
    
    
      const editItem = (collection, data, id, operation) => {
        // collection is the json collection to put the data e.g. monsters, campaigns, adventures, etc
        // data is the json object to post to the server
        const url = `${jsonserver}/${collection}/${id}`;
        console.log("item edited");
        console.log(collection, data, id);
        // console.log(collection, data);
    
        fetch(url, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
          })
    
          // call the correct useState function based on the collection name
          .then(response => response.json()) 
          .then((response) => {
            console.log([...adventures.filter(f => {return f.id !== response.id}), response])
            if (collection === "campaigns") {setCampaigns([...campaigns.filter(f => {return f.id !== response.id}), response])}
            if (collection === "monsters") {setMonsterBook([...monsterBook.filter(f => {return f.id !==response.id}), response])}
            if (collection === "adventures") {setAdventures([...adventures.filter(f => {return f.id !==response.id}), response])}
            if (collection === "encounters") {setEncounters([...encounters.filter(f => {return f.id !==response.id}), response])}
            if (collection === "characters") {setCharacters([...characters.filter(f => {return f.id !==response.id}), response])}
            // if (collection === "players") {setPlayers([response])}
            // if (collection === "notes") {setNotes([response])}
        })
      }

    return (
        <AppContext.Provider
            value={{
                // app: app,
                auth: firebase.auth,
                getCampaigns: getCampaigns,
                loggedIn: {state: props.loggedIn, setState: props.setLoggedIn},
                isSignedIn: {"state": isSignedIn, "setState": setIsSignedIn},
                characters: {"list": characters, "update": setCharacters},
                monsterBook: {"list": monsterBook, "update": setMonsterBook},
                equipment: {"list": equipment, "update": setEquipment},
                settings: {"list": settings, "update": setSettings}, 
                monsterTemplate: {"list": monsterTemplate, "update": setMonsterTemplate},
                campaigns: {"list": campaigns, "update": setCampaigns},
                adventures: {"list": adventures, "update": setAdventures},
                encounters: {"list": encounters, "update": setEncounters},
                monsterTypes: {"list": monsterTypes, "update": setMonsterTypes},
                crRange: {"list": crRange, "update": setCrRange},
                classes: {"list": classes, "update": setClasses},
                races: {"list": races, "update": setRaces},
                damageTypes: {"list": damageTypes, "update": setDamageTypes},
                conditions: {"list": conditions, "update": setConditions},
                sizes: {"list": sizes, "update": setSizes},
                abilityList: {"list": abilityList, "update": setAbilityList},
                sensesList: {"list": sensesList, "update": setSensesList},
                skillList: skillList,
                skillToAbility: skillToAbility,
                editItem: editItem,
                addItem: addItem,
                deleteItem: deleteItem}}>
            {props.children}
        </AppContext.Provider>

    );
}