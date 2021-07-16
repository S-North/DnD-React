import { useLocation } from "react-router";

const EncounterView = () => {
    const location = useLocation();
    const encounter = location.state.item;
    const config = location.state.config;
    console.log(config);
    console.log(encounter);

    return (
        <>
            <div className="main-header">
                <h1>Encounter Overview</h1>
                <h2>{ encounter.name }</h2>
                <p>{ encounter.description }</p>
            </div>
            <div className="section">
                
            </div>
        </>
    )
}

export default EncounterView;