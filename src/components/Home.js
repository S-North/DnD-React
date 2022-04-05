import DiceRoller from './DiceRoller';
import ItemList from './ItemList';
import FormMonsterNew from './FormMonsterNew';

const Home = ({ title, config, campaigns, monsters, setConfig, addItem, dbUpdate }) => {
    // console.log(addItem);
    return (
        <>
            <div className="main-header">
                <h1>{ title }</h1>
            </div>
            <section id="main-section">
                <ItemList 
                    title="Active Campaigns"
                    description="Please select a campaign below to access campaign notes, npcs, adventures and encounters."
                    buttonText="New Campaign"
                    items={ campaigns }
                    route="/campaign"
                    config={ config }
                    setConfig={ setConfig }
                    addItem={ addItem }/>

                <FormMonsterNew monsters={monsters} monster={monsters[12]} dbUpdate={dbUpdate} /> 


                {/* <ItemList 
                    title="Monster List"
                    description="Please select a monster below to view its details, customise and duplicate."
                    buttonText="New Monster"
                    items={ monsters }
                    route="/monster"
                    config={ config } 
                    setConfig={ setConfig }
                    addItem={ addItem }/>
                <DiceRoller /> */}
            </section>
        </>
    );
}
 
export default Home;