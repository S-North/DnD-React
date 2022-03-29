import DiceRoller from './DiceRoller';
import ItemList from './ItemList';
import FormMonsterNew from './FormMonsterNew';

const Home = ({ title, config, campaigns, monsters, setConfig, addItem }) => {
    // console.log(addItem);
    return (
        <>
            <div className="main-header">
                <h1>{ title }</h1>
            </div>
            <div className="section">
                <ItemList 
                    title="Active Campaigns"
                    description="Please select a campaign below to access campaign notes, npcs, adventures and encounters."
                    buttonText="New Campaign"
                    items={ campaigns }
                    route="/campaign"
                    config={ config }
                    setConfig={ setConfig }
                    addItem={ addItem }/>

                <FormMonsterNew monster={monsters[0]} /> 


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
            </div>
        </>
    );
}
 
export default Home;