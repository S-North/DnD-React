import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";

import { firestore as db } from "../Firebase";
import { onSnapshot, collection, getDoc, doc, addDoc, setDoc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp } from "firebase/firestore";

import { FaWindowClose, FaBackward, FaForward } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { abilityModifier, diceRoll } from "../Maths";

import Nav from "./Nav";
import Toolbar from "./Toolbar";
import { MonsterList } from "./Monsters";
import { MonsterForm } from "./Monsters";
import FormMonster from './FormMonster'
import CharacterForm from "./forms/CharacterForm";

const Encounter = () => {
  const { id } = useParams();
  const { settings, editItem } = useContext(AppContext);
  const [campaign, setCampaign] = useState({});
  const [adventure, setAdventure] = useState({});
  const [encounter, setEncounter] = useState({});
  const [characters, setCharacters] = useState();
  const [initiative, setInitiative] = useState();
  const [selected, setSelected] = useState();
  const [modal, setModal] = useState({ type: "none", on: false });

  useEffect(() => {
    // create Firebase listener to update the adventure state
    const unsub = onSnapshot(doc(db, "encounters", id), (doc) => {
      setEncounter({ ...doc.data(), id: doc.id });
    });
    return unsub;
  }, []);

  useEffect(() => {
    // when the encounter changes, get the related camapign, adventure, characters, etc
    // update campaign state
    const campaignReq = async () => {
      if (encounter && encounter.adventureId) {
        const docRef = doc(db, "campaigns", encounter.campaignId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCampaign({...docSnap.data(), id: docSnap.id});
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    };
    campaignReq();

    // update adventure state
    const adventureReq = async () => {
      if (encounter && encounter.adventureId) {
        const docRef = doc(db, "adventures", encounter.adventureId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAdventure({...docSnap.data(), id: docSnap.id});
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    };
    adventureReq();

    // update characters state
    if (encounter && encounter.adventureId) {
      const q = query(
        collection(db, "characters"),
        where("campaignId", "==", encounter.campaignId)
      );
      onSnapshot(q, (snapshot) => {
        setCharacters(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    }

    return () => {};
  }, [encounter]);

  const selectMonster = (monster) => {
    // utility function to handle setting the selected item state. Should propably rename as this us used for monsters, characters, npcs, etc
    setSelected(monster);
  };

  const addCharacters = async (charactersList) => {
    console.log(charactersList);
    // identify the collection and document
    console.log(encounter.id);
    const docRef = doc(db, "encounters", encounter.id);
    await updateDoc(docRef, {
      initiative: [...encounter.initiative, ...charactersList],
      modified: serverTimestamp(),
    });
    setModal({ on: false, type: "" });
  };

  const addMonsters = async (monsters) => {
    // identify the collection and document then update the initiative & monsters
    const docRef = doc(db, "encounters", encounter.id);
    await updateDoc(docRef, {
        initiative: [...encounter.initiative, ...monsters.map(m => (
            {
                id: m.id,
                enemy: "monster",
                source: m.source,
                init: 0,
                name: m.name
            }
        ))],
        monsters: [...encounter.monsters, ...monsters],
        modified: serverTimestamp(),
    });
    setModal({ on: false, type: "" }); // close the form window
    };

  const deleteCombatant = async (combatant) => {
    // delete someone from the encounter. removes them from the encounter.initiative & for monsters, also removes them from the encounter.monsters
    console.log(combatant);
    // identify the collection and document
    console.log(encounter.id);
    const docRef = doc(db, "encounters", encounter.id);
    await updateDoc(docRef, {
      initiative: [
        ...encounter.initiative.filter((i) => {
          return i.id !== combatant.id;
        }),
      ],
      monsters: [
        ...encounter.monsters.filter((m) => {
          return m.id !== combatant.id;
        }),
      ],
      modified: serverTimestamp(),
    });
    setModal({ on: false, type: "" });
  };

  const editCombatant = async (monster) => {
    // this is only for monsters. updates the encounter.initiative & encounter.monsters
    // identify the collection and document then update the initiative & monsters
    const docRef = doc(db, "encounters", encounter.id);
    await updateDoc(docRef, {
        ...encounter,
        monsters: [
          ...encounter.monsters.filter((m) => {
            return m.id !== monster.id;
          }),
          monster,
        ],
        initiative: [
          ...encounter.initiative.filter((m) => {
            return m.id !== monster.id;
          }),
          {
            id: monster.id,
            source: monster.source,
            name: monster.name,
            enemy: monster.enemy,
          },
        ],
    })
    setSelected({});
  };

  const editCharacter = (character) => {
    // updates the selected character in context.characters
    editItem("characters", character, character.id);
    setSelected({});
  };

  const saveInitiative = (initiative) => {
    // update the encounter with the initiative rolls, then set the encounter to "running"
    console.log(initiative);
    editItem(
      "encounters",
      { ...encounter, initiative: initiative, mode: "running" },
      encounter.id
    );
    setModal({ on: false, type: "" });
  };

  const incrementInitiative = (direction) => {
    console.log(`current turn: ${encounter.turn}`);
    switch (direction) {
      default:
        if (encounter.turn < encounter.initiative.length - 1) {
          setEncounter({ ...encounter, turn: encounter.turn + 1 });
          displayCombatant(encounter.initiative[encounter.turn + 1]);
          console.log(
            `encounter length: ${encounter.initiative.length}, current turn: ${encounter.turn}`
          );
        } else {
          setEncounter({ ...encounter, turn: 0, round: encounter.round + 1 });
          displayCombatant(encounter.initiative[0]);
        }
        break;
      case "back":
        if (encounter.turn > 0) {
          setEncounter({ ...encounter, turn: encounter.turn - 1 });
          displayCombatant(encounter.initiative[encounter.turn - 1]);
        } else if (encounter.round > 0) {
          setEncounter({
            ...encounter,
            turn: encounter.initiative.length - 1,
            round: encounter.round - 1,
          });
          displayCombatant(
            encounter.initiative[encounter.initiative.length - 1]
          );
        }
        break;
    }
    console.log(encounter.turn);
  };

  const displayCombatant = (combatant) => {
    switch (true) {
      default:
        // monsters
        console.log(encounter.monsters.filter((m) => m.id === combatant.id)[0]);
        setSelected(encounter.monsters.filter((m) => m.id === combatant.id)[0]);
        break;
      case combatant.enemy === "pc":
        console.log(characters.filter((c) => c.id === combatant.id)[0]);
        setSelected(characters.filter((c) => c.id === combatant.id)[0]);
        break;
    }
    // console.log(combatant)
  };

  return (
    <>
      {settings.list.toolbarOpen && <Toolbar></Toolbar>}
      <Nav
        campaign={campaign}
        adventure={adventure}
        encounter={encounter}
        location="encounter"
      ></Nav>

      <main>
        {/* modal window for popup forms */}
        {modal.on && (
          <div id="modal-window" className="modal">
            {/* Modal content */}
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  setModal({ on: false, type: "none" });
                }}
              >
                &times;
              </span>

              {modal.type === "addPC" && (
                <AddCharacter
                  characters={characters}
                  encounter={encounter}
                  addCharacters={addCharacters}
                  initiative={initiative}
                  setInitiative={setInitiative}
                  setModal={setModal}
                  clearView={setSelected}
                ></AddCharacter>
              )}

              {modal.type === "addMonster" && (
                <>
                  <AddMonster
                    setSelected={setSelected}
                    setModal={setModal}
                  ></AddMonster>
                </>
              )}

              {modal.type === "editMonsters" && (
                <>
                  <EditMonsters
                    selected={selected}
                    setSelected={setSelected}
                    addMonsters={addMonsters}
                    setModal={setModal}
                  ></EditMonsters>
                </>
              )}

              {modal.type === "rollInitiative" && (
                <>
                  <RollInitiative
                    encounter={encounter}
                    characters={characters}
                    setModal={setModal}
                    saveInitiative={saveInitiative}
                  ></RollInitiative>
                </>
              )}
            </div>
          </div>
        )}

        <section>
          {/* the edit list of combatants */}
          {encounter && encounter.mode === "editing" && (
            <div className="one-column">
              <div className="flex-row" style={{ justifyContent: "flex-end" }}>
                {/* <h2>Combatants</h2> */}
                {characters && (
                  <button
                    className="blue"
                    onClick={() => {
                      setModal({ type: "addPC", on: true });
                    }}
                  >
                    Add PC
                  </button>
                )}
                <button
                  className="blue"
                  onClick={() => {
                    setModal({ type: "addNPC", on: true });
                  }}
                >
                  Add NPC
                </button>
                <button
                  className="blue"
                  onClick={() => {
                    setModal({ type: "addMonster", on: true });
                  }}
                >
                  Add Monster
                </button>
                <button
                  className="green"
                  onClick={() => {
                    setModal({ type: "rollInitiative", on: true });
                  }}
                >
                  Run
                </button>
              </div>
              {characters &&
                encounter &&
                encounter.initiative.map((combatant) => (
                  <>
                    {combatant.enemy === "pc" && (
                      <div key={combatant.id}>
                        <InitiativeItem
                          combatant={combatant}
                          encounter={encounter}
                          campaign={campaign}
                          action={selectMonster}
                          characters={characters}
                          deleteCombatant={deleteCombatant}
                        ></InitiativeItem>
                      </div>
                    )}
                  </>
                ))}

              {encounter &&
                encounter.initiative.map((combatant) => (
                  <>
                    {combatant.enemy === "monster" && (
                      <div key={combatant.id}>
                        <InitiativeItem
                          combatant={combatant}
                          encounter={encounter}
                          campaign={campaign}
                          action={selectMonster}
                          characters={characters}
                          deleteCombatant={deleteCombatant}
                        ></InitiativeItem>
                      </div>
                    )}
                  </>
                ))}
            </div>
          )}

          {/* running initiative list */}
          {encounter && encounter.mode === "running" && (
            <div className="one-column">
              <div className="flex-row">
                <h3>{`Round: ${encounter.round + 1} Turn: ${
                  encounter.turn + 1
                }`}</h3>
                <button
                  onClick={() => {
                    incrementInitiative("back");
                  }}
                >
                  <FaBackward />
                </button>
                <button
                  onClick={() => {
                    editItem(
                      "encounters",
                      { ...encounter, mode: "editing" },
                      encounter.id
                    );
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    incrementInitiative("forward");
                  }}
                >
                  <FaForward />
                </button>
              </div>
              {/* <p>initiative list</p> */}
              <CombatantList
                encounter={encounter}
                characters={characters}
                displayCombatant={displayCombatant}
                setSelected={setSelected}
              ></CombatantList>
            </div>
          )}

          {/* the display pane for selected items */}
          <div className="column-wide">
            {encounter &&
              encounter.mode === "editing" &&
              selected &&
              selected.enemy === "monster" && (
                <FormMonster
                  monster={selected}
                  dbUpdate={editCombatant}
                ></FormMonster>
              )}
            {encounter &&
              encounter.mode === "editing" &&
              selected &&
              selected.enemy === "pc" && (
                <CharacterForm
                  data={selected}
                  updateFnc={editCharacter}
                ></CharacterForm>
              )}
            {/* {encounter && encounter.mode === "running" && selected && selected.enemy === "monster" &&<h1>{selected.name}</h1>} */}
            {encounter && encounter.mode === "running" && selected && (
              <CombatantDetails combatant={selected}></CombatantDetails>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

const InitiativeItem = ({
  encounter,
  combatant,
  action,
  deleteCombatant,
  characters,
}) => {
  const [item, setItem] = useState();

  useEffect(() => {
    switch (true) {
      default:
        break;
      case combatant.enemy === "monster":
        setItem(encounter.monsters.filter((f) => f.id === combatant.id)[0]);
        break;
      case combatant.enemy === "pc":
        setItem(characters.filter((f) => f.id === combatant.id)[0]);
    }

    return () => {};
  }, [encounter]);

  useEffect(() => {
    switch (true) {
      default:
        break;
      case combatant.enemy === "monster":
        setItem(encounter.monsters.filter((f) => f.id === combatant.id)[0]);
        break;
      case combatant.enemy === "pc":
        setItem(characters.filter((f) => f.id === combatant.id)[0]);
    }

    return () => {};
  }, [characters]);

  return (
    <>
      {item && (
        <div className="list-item">
          <div
            style={{ cursor: "pointer", width: "100%" }}
            onClick={() => {
              action(item);
            }}
          >
            <h2>{item.name}</h2>
            {item.cr && <p>CR: {item.cr}</p>}
            <p>HP: {item.hp}</p>
            <p>AC: {item.ac}</p>
            {/* <p>{item.id}</p> */}
          </div>
          <FaWindowClose
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteCombatant(combatant);
            }}
          ></FaWindowClose>
        </div>
      )}
    </>
  );
};

const AddCharacter = ({ characters, encounter, setModal, addCharacters }) => {
  const { editItem } = useContext(AppContext);
  const pcsInInitiative = encounter.initiative
    .filter((pc) => {
      return pc.enemy === "pc";
    })
    .map((id) => id.id);
  const pcsNotInInitiative = characters.filter((pc) => {
    return !pcsInInitiative.includes(pc.id);
  });
  const [selected, setSelected] = useState([]);

  const handleSelect = (e, player) => {
    if (e.target.checked) {
      setSelected([...selected, player]);
    } else {
      setSelected(
        selected.filter((character) => {
          return character.id !== player.id;
        })
      );
    }
  };

  const handleSubmit = (selected) => {
    const data = selected.map((pc) => ({
      name: pc.name,
      id: pc.id,
      enemy: "pc",
      init: 0,
    }));
    addCharacters(data);
    setModal({ on: false, type: null });
  };

  return (
    <>
      <h2>Character List</h2>
      {pcsNotInInitiative &&
        pcsNotInInitiative.map((pc) => (
          <div key={pc.id} className="flex-row">
            <div className="flex-checkboxes">
              <div className="checkboxs">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    handleSelect(e, pc);
                  }}
                />
                <p>{pc.name}</p>
              </div>
            </div>
          </div>
        ))}
      <button value="Add" onClick={() => handleSubmit(selected)}>
        Add
      </button>
    </>
  );
};

const AddMonster = ({ setSelected, setModal }) => {
  const choseMonster = (monster) => {
    setSelected(monster);
    setModal({ type: "editMonsters", on: true });
  };

  return (
    <>
      <MonsterList setSelected={choseMonster}></MonsterList>
    </>
  );
};

const EditMonsters = ({ selected, setSelected, addMonsters, setModal }) => {
  const [repeat, setRepeat] = useState();

  const dbUpdate = (monster) => {
    // selected is updated monster edited in the form.
    // repeat is how many of the edited monsters to add to the initiative
    console.log(repeat, monster);
    const monsters = [];
    for (let i = 0; i < parseInt(repeat); i++) {
      monsters.push({
        ...monster,
        source: monster.id,
        id: uuidv4(),
        name: `${monster.name} ${i + 1}`,
      });
    }
    addMonsters(monsters);
    setModal({ on: false, type: null });
    setSelected({});
  };

  return (
    <>
      <div className="flex-row">
        <label htmlFor="numberToAdd">
          How Many of these monsters do you want to add?
        </label>
        <input
          id="numberToAdd"
          type="number"
          required
          value={repeat}
          onChange={(e) => {
            setRepeat(e.target.value);
          }}
        />
      </div>
      <FormMonster monster={selected} dbUpdate={dbUpdate}></FormMonster>
    </>
  );
};

const RollInitiative = ({ encounter, setModal, saveInitiative }) => {
  // console.log(encounter)
  const { id } = useParams();
  const { characters } = useContext(AppContext);
  const [initiative, setInitiative] = useState([]);
  const [sources, setsources] = useState([]);

  useEffect(() => {
    setInitiative(encounter.initiative); // populate initiative state with existing data

    // get a list of all monster types
    const s = [];
    encounter.initiative.forEach((v) => {
      if (v.source && !s.includes(v.source)) {
        s.push(v.source);
      }
    });
    setsources(s);
    return () => {};
  }, [encounter]);

  // const rollPlayer = (id) => {
  //     // roll a d20, add dex bonus, update the initiative. id = the characters id to roll on
  //     const init = encounter.initiative.filter((p) => { return p.id === id})[0]
  //     const roll = diceRoll(1,20,abilityModifier(characters.list.filter((p) => { return p.id === id})[0].dex))
  //     setInitiative([...encounter.initiative.filter(f => { return f.id !== id}), {...init, "id": id, "init": roll[2]}])
  // }

  const rollMonster = (id) => {
    // roll a d20, add dex bonus, update the initiative. id = the monsters id to roll on
    const init = initiative.filter((m) => {
      return m.id === id;
    })[0];
    const roll = diceRoll(
      1,
      20,
      abilityModifier(
        encounter.monsters.filter((m) => {
          return m.id === id;
        })[0].dex
      )
    );
    setInitiative([
      ...initiative.filter((f) => {
        return f.id !== id;
      }),
      { ...init, id: id, init: roll[2] },
    ]);
  };

  const rollMonsters = (id) => {
    // roll all monster source groups. a d20 for each monster source group, then add individual bonus to the roll, update the initiative
    const init = initiative.filter((m) => {
      return m.enemy === "monster";
    });
    const update = [
      ...initiative.filter((f) => {
        return f.enemy !== "monster";
      }),
    ];
    sources.forEach((s) => {
      const roll = diceRoll(1, 20, 0);
      // console.log(`source group ${s} dice roll = ${roll[2]}`)
      init
        .filter((m) => {
          return m.source === s;
        })
        .forEach((m) => {
          // console.log(`monster ${m.id}: roll ${roll[2]} + ${abilityModifier(encounter.monsters.filter((f) => { return f.id === m.id})[0].dex)}`)
          update.push({
            ...m,
            init:
              roll[2] +
              abilityModifier(
                encounter.monsters.filter((f) => {
                  return f.id === m.id;
                })[0].dex
              ),
          });
        });
    });
    setInitiative([...update]);
  };

  const rollG = (gid) => {
    // roll a single monster source group. gid is the source id of the monsters
    const init = initiative.filter((m) => {
      return m.source === gid;
    });
    const roll = diceRoll(
      1,
      20,
      abilityModifier(
        encounter.monsters.filter((m) => {
          return m.source === gid;
        })[0].dex
      )
    );
    const update = [];
    init.forEach((m) => {
      update.push({ ...m, init: roll[2] });
    });
    setInitiative([
      ...initiative.filter((f) => {
        return f.source !== gid;
      }),
      ...update,
    ]);
  };

  return (
    <>
      <h2>Roll Initiative</h2>

      {initiative
        .filter((p) => {
          return p.enemy === "pc";
        })
        .sort((a, b) => (a.id > b.id ? 1 : -1)) // sorting on strings from here https://stackoverflow.com/a/43572944
        .map((p) => (
          <div key={p.id} className="flex-row">
            <div style={{ width: "30ch" }}>{p.name}</div>
            {/* <input 
                        type="button" 
                        value={abilityModifier(characters.list.filter((player) => { return player.id === p.id})[0].dex)} 
                        onClick={() => {rollPlayer(p.id)}} 
                        className="btn green" 
                        style={{"width": "10ch"}}/> */}
            <input
              type="number"
              id={p.id}
              name={p.id}
              value={p.init}
              onChange={(e) =>
                setInitiative([
                  ...initiative.filter((f) => {
                    return f.id !== p.id;
                  }),
                  { ...p, init: e.target.value },
                ])
              }
              style={{ width: "5ch" }}
            />
          </div>
        ))}

      <input
        type="button"
        className="btn green"
        value="roll monsters"
        onClick={(e) => {
          rollMonsters();
        }}
      />
      {sources.map((g) => (
        <div key={g}>
          <hr />
          {initiative
            .filter((c) => {
              return c.source === g;
            })
            .sort((a, b) => (a.id > b.id ? 1 : -1)) // sorting on strings from here https://stackoverflow.com/a/43572944
            .map((c) => (
              <div key={c.id} className="flex-row">
                <div style={{ width: "30ch" }}>
                  {
                    encounter.monsters.filter((m) => {
                      return m.id === c.id;
                    })[0].name
                  }
                </div>
                <input
                  type="button"
                  value={abilityModifier(
                    encounter.monsters.filter((m) => {
                      return m.id === c.id;
                    })[0].dex
                  )}
                  onClick={() => {
                    rollMonster(c.id, c.source);
                  }}
                  className="btn green"
                  style={{ width: "10ch" }}
                />
                <p>{c.init}</p>
              </div>
            ))}
          {/* <div className="flex-row">
                        <input className="btn green" type="button" value="Roll Group" onClick={() => {rollG(g)}}></input>
                    </div> */}
        </div>
      ))}
      <hr />
      <input
        type="button"
        className="btn green"
        value="Save"
        onClick={(e) => {
          saveInitiative(initiative);
        }}
      />
    </>
  );
};

const CombatantList = ({
  encounter,
  characters,
  displayCombatant,
  setSelected,
}) => {
  useEffect(() => {
    console.log("Combatant loadedS");
    setSelected(encounter.initiative[encounter.turn]);

    return () => {};
  }, []);

  return (
    <>
      {/* sort the initiative list, highest init to lowest */}
      {encounter.initiative
        .sort((a, b) => b.init - a.init)
        .map((combatant, index) => (
          <div key={combatant.id}>
            <Combatant
              combatant={combatant}
              index={index}
              encounter={encounter}
              characters={characters}
              displayCombatant={displayCombatant}
            ></Combatant>
          </div>
        ))}
    </>
  );
};

const Combatant = ({
  combatant,
  index,
  characters,
  displayCombatant,
  encounter,
}) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    if (combatant && combatant.enemy === "pc") {
      setDetails(characters.list.filter((c) => c.id === combatant.id)[0]);
    } else if (combatant && combatant.enemy === "monster")
      setDetails(encounter.monsters.filter((m) => m.id === combatant.id)[0]);
    return () => {};
  }, [combatant]);

  return (
    <>
      {details && (
        <div
          key={details.id}
          className="combatant-item"
          style={
            encounter.turn === index
              ? { backgroundColor: "lightgreen" }
              : { backgroundColor: "white" }
          }
        >
          <div
            className="initiative"
            style={{ backgroundColor: "green", color: "white", width: "40px" }}
          >
            {combatant.init}
          </div>
          <div
            className="details"
            onClick={() => {
              combatant.enemy === "monster"
                ? displayCombatant(
                    encounter.monsters.filter((m) => m.id === combatant.id)[0]
                  )
                : displayCombatant(
                    characters.list.filter((c) => c.id === combatant.id)[0]
                  );
            }}
          >
            <h2>{details.name}</h2>

            <p>Invisible, Blinded</p>
          </div>
          <div
            className="hitpoints"
            onClick={() => {
              window.alert("cool hitpoint calulator :)");
            }}
          >
            <h2>
              {details.hp}
              {details.maxHP}/{details.hp}
              {details.maxHP}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

const CombatantDetails = ({ combatant }) => {
  return (
    <>
      <div className="combat-details-column">
        <h3>{combatant.name}</h3>
        <p>{combatant.description}</p>
        <div className="flex-row">
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.str))[2]);
            }}
          >
            {combatant.str}
          </button>
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.dex))[2]);
            }}
          >
            {combatant.dex}
          </button>
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.con))[2]);
            }}
          >
            {combatant.con}
          </button>
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.int))[2]);
            }}
          >
            {combatant.int}
          </button>
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.wis))[2]);
            }}
          >
            {combatant.wis}
          </button>
          <button
            onClick={() => {
              window.alert(diceRoll(1, 20, abilityModifier(combatant.cha))[2]);
            }}
          >
            {combatant.cha}
          </button>
        </div>
        <div className="flex-row">
          <p>Speed: {combatant.speed}</p>
        </div>
        <div className="flex-column">
          {combatant.actions &&
            combatant.actions.map((action) => (
              <div key={action.id} className="flex-row">
                <p>{action.name}</p>
                {action.attack && (
                  <button
                    onClick={() => {
                      window.alert(diceRoll(1, 20, action.attack)[2]);
                    }}
                  >
                    To Hit: {action.attack}
                  </button>
                )}
                {action.damage && (
                  <button
                    onClick={() => {
                      window.alert(
                        diceRoll(
                          action.damage.dice,
                          action.damage.sides,
                          action.damage.bonus
                        )[2]
                      );
                    }}
                  >
                    damage: {action.damage.dice}d{action.damage.sides}+
                    {action.damage.bonus}
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Encounter;
