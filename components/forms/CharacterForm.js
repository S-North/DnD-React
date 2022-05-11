import { useState, useEffect, useContext } from "react";
import { races, classes } from '../../utils/Forms'

const CharacterForm = ({data, updateFnc}) => {
    // console.log(updateFnc)
    const [ character, setCharacter ] = useState({
        "name": "",
        "description": "",
        "class": classes[0],
        "race": races[0],
        "str": "",
        "dex": "",
        "con": "",
        "int": "",
        "wis": "",
        "cha": "",
        "ac": "",
        "maxHP": "",
        "currentHP": "",
    });

    useEffect(() => {
        if (data && !data.id) {
            setCharacter({...data})
        } else setCharacter(data)
    
      return () => {}
    }, [data])    

    return (
        <>
        {character && <form onSubmit={(e) => {e.preventDefault(); updateFnc(character)}} className="form">
                    <input
                        className="input-text"
                        name='Name' 
                        type='text'
                        required
                        placeholder="name"
                        value={ character.name }
                        onChange={e => setCharacter({...character, "name": e.target.value})}
                    />
                    <div className="flex-row">
                        {races && <select value={character.race} onChange={e => setCharacter({...character, "race": e.target.value})}>
                            {races && races.map((race) => (
                                <option value={ race } key={ race }>{ race } </option>
                                ))}
                        </select>}

                        <select value={character.class} onChange={e => setCharacter({...character, "class": e.target.value})}>
                            {classes && classes.map((clss) => (
                                <option value={ clss } key={ clss }>{ clss } </option>
                                ))}
                        </select>
                    </div>
                    <div className="flex-row">
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder="str"
                            value={ character.str }
                            onChange={e => setCharacter({...character, "str": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.dex}
                            value={character.dex}
                            onChange={e => setCharacter({...character, "dex": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.con}
                            value={character.con}
                            onChange={e => setCharacter({...character, "con": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.int}
                            value={character.int}
                            onChange={e => setCharacter({...character, "int": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.wis}
                            value={character.wis}
                            onChange={e => setCharacter({...character, "wis": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.cha}
                            value={character.cha}
                            onChange={e => setCharacter({...character, "cha": e.target.value})}
                        />
                    </div>
                    <div className="flex-row">
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.maxHP}
                            value={character.maxHP}
                            onChange={e => setCharacter({...character, "maxHP": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.ac}
                            value={character.ac}
                            onChange={e => setCharacter({...character, "ac": e.target.value})}
                        />
                        <input
                            name='Name' 
                            type='number'
                            required
                            placeholder={character.xp}
                            value={character.xp}
                            onChange={e => setCharacter({...character, "xp": e.target.value})}
                        />
                    </div>
                    <textarea
                        className="input-text"
                        name='Description'
                        required
                        placeholder="description"
                        value={character.description}
                        onChange={e => setCharacter({...character, "description": e.target.value})}
                    />
                    <input
                        className='btn green'
                        type='submit' 
                        value='Save Character'
                        />
                </form>}
                </>
    );
}

export default CharacterForm