const SelectPlayers = ({ players, windows, setWindows, characters, setCharacters }) => {
    const handleSelect = (e, player) => {
        if (e.target.checked) {
            setCharacters([...characters, player]);
        } else {
            setCharacters(characters.filter((character) => {return character.id !== player.id}))
        }
    }
    return (
        <>
        <div className="widget">
            <form>
                {players && players.map((player) => (
                    <div className="flex-row">
                    <input style={{"width": "auto", "min-width": "auto"}} type="checkbox" onChange={(e) => {handleSelect(e, player)}}></input>
                    <p>{player.name}</p>
                    </div>
                ))}
            </form>
            </div>
        </>
    );
}
 
export default SelectPlayers;